
import React from "react";
import "../css/ComponentStyles/Contact/contact.css"
import ContactInfo from "../components/Contact/ContactInfo.jsx";
import EmailForm from "../components/Emails/EmailForm.jsx"

const Contact = () => {
    return (
        <div className="contact-body">   
            <div className="contact-container">                    
                <div className="contact-info">
                    <ContactInfo/>
                </div>
                <div className="email-form">
                    <EmailForm/>
                </div>
            </div>
        </div>
    )
}

export default Contact