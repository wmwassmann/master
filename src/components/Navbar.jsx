import React from "react";
import "../css/navBar.css"

export default function Navbar() {
    return <nav className="navbar-container">
        <a href="/master/" className="site-title">William Wassmann</a>
        <ul>
            <li>
               <a href="/master/about" className="title-name">About</a>
            </li>
            <li>
               <a href="/master/portfolio" className="title-name">Portfolio</a>
            </li>
            <li>
               <a href="/master/game" className="title-name">Game</a>
            </li>
        </ul>
    </nav>
}