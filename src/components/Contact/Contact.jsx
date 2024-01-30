import React from "react";
import "../../css/ComponentStyles/Contact/Contact.css"
import ContactInfo from "./ContactInfo.jsx";
import EmailForm from "../Emails/EmailForm.jsx"

const ContactMain = () => {
    return (
        <div className="contact-container">
            <div className="contact-info">
                <ContactInfo/>
            </div>
            <div className="email-form">
                <EmailForm/>
            </div>
        </div>
    )
}

export default ContactMain