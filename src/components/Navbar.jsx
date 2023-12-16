import React from "react";
import { Link } from "react-router-dom";
import "../css/navBar.css"

export default function Navbar() {
    return <nav className="navbar-container">
        <Link to="/" className="site-title">William Wassmann</Link>
        <ul>
            <li>
               <Link to="/about" className="title-name">About</Link>
            </li>
            <li>
               <Link to="/portfolio" className="title-name">Portfolio</Link>
            </li>
            <li>
               <Link to="/game" className="title-name">Game</Link>
            </li>
        </ul>
    </nav>
}