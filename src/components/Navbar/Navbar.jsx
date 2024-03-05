import React from "react";
import { Link } from "react-router-dom";
import "../../css/ComponentStyles/NavBar/navBar.css"

export default function Navbar() {

    const handleTransition = (event, currentPage) => {
        const history = useHistory();
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
            history.replace(destination);
            window.location.href = destination;

        }, 200); 
    };

    return (
        <nav className="navbar-container">
            <ul>
                <li className="site-title">
                    <Link className="nav-link" to="/" onClick={(event) => handleTransition(event, "home")}>W
                        <div className="title-extended">
                            illiam Wassmann
                        </div>
                    </Link>
                </li>
            </ul>
            <ul>
                <li className="title-name">
                    <Link className="nav-link" to="/resume" onClick={(event) => handleTransition(event, "resume")}>// About Me</Link>
                </li>
                <li className="title-name">
                    <Link className="nav-link" to="/portfolio" onClick={(event) => handleTransition(event, "game")}>// Portfolio</Link>
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