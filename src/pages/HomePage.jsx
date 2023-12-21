import React, { useState, useEffect } from "react";
import "../css/homePage.css"
import AboutMe from "./AboutMe";

const homePage =()=> {

    const [scrollY, setScrollY] = useState(0);

        useEffect(() => {
            const handleScroll = () => {
            setScrollY(window.scrollY);
            };

            document.addEventListener('scroll', handleScroll);

            return () => {
            document.removeEventListener('scroll', handleScroll);
            };
        }, []);

        const getRandomPosition = () => {
            const min = -120;
            const max = 110;
            const randomX = Math.floor(Math.random() * (max - min + 1) + min);
            const randomY = Math.floor(Math.random() * (max - min + 1) + min);
            return `${randomX}px ${randomY}px`;
          };
    return (
        <div>            
            <div className="home-container">
                <div className="dot-background" style={{ backgroundPosition: getRandomPosition() }}></div>
                    <div className="home-info">
                        <div className="home-title left">
                            software
                        </div>
                        <div className="home-article left">
                            Two years experience in developing, testing, 
                            and maintaining stable, scalable, and 
                            secure automated financial systems
                        </div>
                    </div>
                    <div className="home-info">
                        <div className="home-title right">
                            design
                        </div>
                        <div className="home-article right">
                            Specializations in UX/UI integrations, platform upgrades, 
                            and data retrieval and manipulations
                        </div>
                    </div>
                </div> 
            
                <div className="about-container">
                    <AboutMe/>            
                </div>   
            
        </div>
    )
}

export default homePage;