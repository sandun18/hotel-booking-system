import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <NavLink to="/">Phegon Hotel</NavLink>
            </div>
            <ul className="navbar-ul">
                <li><NavLink to="/" end>Home</NavLink></li>
                <li><NavLink to="/rooms">Rooms</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;
