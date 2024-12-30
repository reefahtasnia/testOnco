import React from "react";
import "./CSS/style.css";

export const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <span className="logo-part1">Onco</span>
                <span className="logo-part2">Connect</span>
            </div>
            <ul className="navbar-links">
                <li><a href="/" >Home</a></li>
                <li><a href="#about-us">About Us</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="/forum">Community</a></li>
            </ul>
            <button className="navbar-button">Login</button>
        </nav>
    );
};
export default NavBar;
