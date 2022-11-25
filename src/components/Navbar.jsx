import React from "react";

const Navbar = () => {
        return(
            <div>
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src="images/outer_wilds-logo.png" alt="Logo de Outer Wilds" width="150px"></img></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sobre nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Galeria</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
}

export default Navbar;