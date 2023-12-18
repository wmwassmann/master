import React from "react";
import { Link } from "react-router-dom";
import "../css/navBar.css"

export default function Navbar() {
    return <nav className="navbar-container">
        <Link to="/" className="site-title">W</Link>
        <ul>
            <li>
               <Link to="/resume" className="title-name">// Resume</Link>
            </li>
            <li>
               <Link to="/portfolio" className="title-name">// Portfolio</Link>
            </li>
            <li>
               <Link to="/game" className="title-name">// Fun(?)</Link>
            </li>
        </ul>
    </nav>
}