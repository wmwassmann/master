import React from "react";
import "../css/navBar.css"

export default function Navbar() {
    return <nav className="navbar-container">
        <a href="/" className="site-title">William Wassmann</a>
        <ul>
            <li>
               <a href="/about" className="title-name">About</a>
            </li>
            <li>
               <a href="/portfolio" className="title-name">Portfolio</a>
            </li>
            <li>
               <a href="/game" className="title-name">Game</a>
            </li>
        </ul>
    </nav>
}