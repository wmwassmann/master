import React from "react";
import "../css/globalStyle.css"
import Skillsets from "../components/Skillset";
import AboutMe from "./AboutMe";



export default function skillSet() {
    return (
        <div>
            <div className="resume-container">
                <AboutMe/>
            </div>
            <div className="header">            
                <Skillsets/>
            </div>
        </div>
    )
}