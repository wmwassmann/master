import React from "react";
import "../css/globalStyle.css"
import Skillsets from "../components/Skillset";
import AboutMe from "./AboutMe";



export default function skillSet() {
    return (
        <div className="resume-container">
            <div className="about-me">
                <AboutMe/>
            </div>
            <div className="skill-blocks">            
                <Skillsets/>
            </div>
        </div>
    )
}