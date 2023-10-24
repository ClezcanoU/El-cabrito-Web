import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Header.css"

const Header = ({ isAuthenticated }) => {
    const navigate = useNavigate();
    return (
        <header>
            <nav className="nav-header">
                <div className="restaurant-title"><h1>El Cabrito</h1></div>
                <div className="menu">
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/login">Iniciar sesión</a></li>
                        <li><a href="/register">Registrarse</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;