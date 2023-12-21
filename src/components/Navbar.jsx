import React from "react";
import { Link } from "react-router-dom";
import "../css/navBar.css"

export default function Navbar() {
    return <nav className="navbar-container">
        <div className="site-title">
            <Link to="/">W</Link>
        </div>
        <ul>
            <li className="title-name">
               <Link to="/resume">// Resume</Link>
            </li>
            <li  className="title-name">
               <Link to="/portfolio">// Portfolio</Link>
            </li>
            <li  className="title-name">
               <Link to="/game">// Fun(?)</Link>
            </li>
        </ul>
    </nav>
}