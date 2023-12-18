import React from "react";
import "../css/homePage.css"
import AboutMe from "./AboutMe";

export default function homePage() {
    return (
        <div>            
            <div className="home-container">
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
            <AboutMe/>
        </div>
    )
}