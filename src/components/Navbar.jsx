import React from "react";
import { Link } from "react-router-dom";
import "../css/ComponentStyles/NavBar/navBar.css"

export default function Navbar() {
    return <nav className="navbar-container">
        <div className="site-title">
            <Link className="nav-link" to="/">W</Link>
        </div>
        <ul>
            <li className="title-name">
               <Link className="nav-link" to="/resume">// About Me</Link>
            </li>
            <li  className="title-name">
               <Link className="nav-link" to="/contact">// Contact Me</Link>
            </li>
            <li  className="title-name">
               <Link className="nav-link" to="/game">// Fun(?)</Link>
            </li>
        </ul>
    </nav>
}