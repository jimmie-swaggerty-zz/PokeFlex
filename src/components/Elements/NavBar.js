import React from "react";
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-red bg-small">
            <div className="container-fluid">
                    <a className="navbar-brand">PokeFlex</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/pokemon">All Pokemon</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/generation">By Generation</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/type">By Type</NavLink>
                        </li>
                        <li>
                        <NavLink className="nav-link" to="/mypokemon">My Pokemon</NavLink>
                        </li>
                        <li>
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
