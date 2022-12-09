import React from "react";
import { Link, NavLink } from "react-router-dom";
import Cartwidget from "./Cartwidget";

const Navbar = () => {
    return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="container">
                            <nav className="navbar navbar-expand-lg ">
                                <div className="container-fluid">
                                    <Link className="navbar-brand" to={"/"}><img src="./images/outer_wilds-logo.png" alt="Outer Wilds Logo" width="150"/></Link>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                            <NavLink className="nav-link active" activeclassname="page" to={"category/Pequeño"}>Cuadros Pequeños</NavLink>
                                            </li>
                                            <li className="nav-item">
                                            <NavLink className="nav-link" activeclassname="page" to={"category/Mediano"}>Cuadros Medianos</NavLink>
                                            </li>
                                            <li className="nav-item">
                                            <NavLink className="nav-link" activeclassname="page" to={"category/Grande"}>Cuadros Grandes</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                <div className="col-md-6 d-flex align-items-center justify-content-end">
                    <Cartwidget/>
                </div>
            </div>
        </div>
)
}
export default Navbar; 