import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";


const ItemDetail = ({item}) => {

    const {addItem} = useContext(CartContext);
    const [itemStock, setItemStock] = useState(0);
    const onAdd = (quantity) => {
        setItemStock(itemStock - quantity);
        addItem(item, quantity);
    }

    useEffect(() => {
        setItemStock(item.stock);
    }, [item]);

    return (
        <div className="row">
            <div className="col-md-4 offset-md-2">
                <img src={item.imagen} alt={item.nombre} className="img-fluid" />
            </div>
            <div className="col-md-4">
                <h1>{item.nombre}</h1>
                <h5>{item.descripcion}</h5>
                <p>Tamaño: {item.tamaño}</p>
                <p><b>USD: {item.precio}</b></p>
                <ItemCount stock={item.stock} onAdd={onAdd} />
            </div>
        </div>
    )
}

export default ItemDetail;