import React from "react";
import "../css/globalStyle.css"

export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="title-name">William Wassmann</a>
        <ul>
            <li>
               <a href="/about" className="title-name">About</a>
            </li>
            <li>
               <a href="/portfolio" className="title-name">Portfolio</a>
            </li>
        </ul>
    </nav>
}