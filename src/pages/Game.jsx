import { React } from "react";
import RandomWordGenerator from "../components/Game";
import "../css/globalStyle.css";


export default function aboutMe() {
    return (
        <div>
            <div className="header">                
                GAME           
            </div>
            <RandomWordGenerator/>
        </div>
    )
}