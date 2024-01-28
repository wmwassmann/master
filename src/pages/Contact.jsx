import React from "react";
import "../css/PageStyles/ContactMe/contactInfo.css";
import EmailForm from "../components/Contact/EmailForm.jsx"

export default function Contact() {
    return (
        <div className="info-container">
            <EmailForm/>
        </div>
    )
}