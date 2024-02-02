import React from "react";
import { Link } from "react-router-dom";
import "../css/ComponentStyles/NavBar/navBar.css"

export default function Navbar() {

    const handleTransition = (event, currentPage) => {
        event.preventDefault();    
    
        const gitOut = document.querySelector('.center-title');
        const profileOut = document.querySelector(".profile-container")
        const contactOut = document.querySelector(".contact-body")
    
        const leftSide = document.querySelector('.left');            
        const rightSide = document.querySelector('.right');

        if (gitOut && currentPage !== "home") {
            rightSide.classList.add('out-right');
            leftSide.classList.add('out-left');
            gitOut.classList.add('gitOut');
        }

        if (profileOut && currentPage !== "resume") {
            rightSide.classList.add('out-right');
        }     

        if (contactOut  && currentPage !== "contact") {
            // rightSide.classList.add('out-right');
        }     
        
        setTimeout(() => {
            const destination = event.target.getAttribute('href');
            window.location.href = destination;

        }, 200); 
    };

    return (
        <nav className="navbar-container">
            <div className="site-title">
                <Link className="nav-link" to="/home" onClick={(event) => handleTransition(event, "home")}>W</Link>
            </div>
            <ul>
                <li className="title-name">
                    <Link className="nav-link" to="/resume" onClick={(event) => handleTransition(event, "resume")}>// About Me</Link>
                </li>
                <li className="title-name">
                    <Link className="nav-link" to="/contact" onClick={(event) => handleTransition(event, "contact")}>// Contact Me</Link>
                </li>
                <li className="title-name">
                    <Link className="nav-link" to="/game" onClick={(event) => handleTransition(event, "game")}>// Fun(?)</Link>
                </li>
            </ul>
        </nav>
    );
}