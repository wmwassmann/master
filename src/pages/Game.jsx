import { React } from "react";
import RandomWordGenerator from "../components/Game/RandomWordGen";
import UserInput from "../components/Game/UserInput";
import "../css/globalStyle.css";


export default function aboutMe() {
    return (
        <div>
            <div className="header">                
                GAME           
            </div>
            <RandomWordGenerator/>
            <UserInput/>
        </div>
    )
}