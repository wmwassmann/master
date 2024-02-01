import React from "react";
import { Link } from "react-router-dom";
import "../css/ComponentStyles/NavBar/navBar.css"

export default function Navbar() {

    const handleTransition = (event) => {
        event.preventDefault(); 

        const homePage = document.querySelector(".github")
        if (homePage) {
            const leftSide = document.querySelector('.left');
            const rightSide = document.querySelector('.right');
            const gitOut = document.querySelector('.center-title');
            
            leftSide.classList.add('out-left');
            rightSide.classList.add('out-right');
            gitOut.classList.add('gitOut');
        }
        
        
        
        setTimeout(() => {
            const destination = event.target.getAttribute('href');
            window.location.href = destination;
        }, 200); 
    };

    return <nav className="navbar-container">
        <div className="site-title">
            <Link className="nav-link" to="/">W</Link>
        </div>
        <ul>
            <li className="title-name">
               <Link className="nav-link" to="/resume" onClick={handleTransition}>// About Me</Link>
            </li>
            <li  className="title-name">
               <Link className="nav-link" to="/contact" onClick={handleTransition}>// Contact Me</Link>
            </li>
            <li  className="title-name">
               <Link className="nav-link" to="/game" onClick={handleTransition}>// Fun(?)</Link>
            </li>
        </ul>
    </nav>
}