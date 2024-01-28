import React from "react";
import { Link } from "react-router-dom";
import "../css/ComponentStyles/NavBar/navBar.css"

export default function Navbar() {
    return <nav className="navbar-container">
        <div className="site-title">
            <Link to="/">W</Link>
        </div>
        <ul>
            <li className="title-name">
               <Link to="/resume">// About Me</Link>
            </li>
            <li  className="title-name">
               <Link to="/contact">// Contact Me</Link>
            </li>
            <li  className="title-name">
               <Link to="/game">// Fun(?)</Link>
            </li>
        </ul>
    </nav>
}