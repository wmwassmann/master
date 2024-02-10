import React, { useState } from "react";
import { sendCustomEmail } from "./EmailHandler";
import "../../css/ComponentStyles/Contact/email.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const EmailForm = () => {
    
    // Icons

    const env = <FontAwesomeIcon icon={faEnvelope} />

    
    // Email State Details 
    
    const [details, setDetails] = useState({
        your_name: "",
        your_email: "",
        subject: "",
        message: "",
    });

    // Email Status States

    const [disabled, setDisabled] = useState(false);
    const [emailSent, setEmailSent] = useState(false); 
    
    // On Click 
    
    const handleDetailsChange = (event) => {
        const { name, value } = event.target;
        
        setDetails((prevDetails) => {
            return {
                ...prevDetails,
                [name]: value,
            };
        });
    };

    // Click Handler
    
    const handleSendEmail = () => {    
        if ((!details.your_name) || (!details.your_email) || (!details.message)) {
            console.log("NOT VALID!");
            return;
        } else if (disabled === true) {
            return;
        } else {
            sendCustomEmail(details);
            setDisabled(true);
            setEmailSent(true); 
        }
    };
    
    // Message Counter

    const maxMessageLength = 500;
    const remainingCharacters = maxMessageLength - details.message.length;
    const characterLimitReached = remainingCharacters <= 50;
    
    return (
        <div className="email-container">
            <h1 className="contact-head">{env} Contact Me</h1>
            <div className="email-head">
                <div className="input-container">
                    <input
                        className="input-name"
                        name="your_name"
                        value={details.your_name}
                        onChange={handleDetailsChange}
                        type="text"
                        placeholder="Name *"
                        />
                </div>
                <div className="input-container">
                    <input
                        className="input-name"
                        name="your_email"
                        value={details.your_email}
                        onChange={handleDetailsChange}
                        type="email"
                        placeholder="Email *"
                    />
                </div>
            </div>
            <div className="email-body">
                <div className="subject-container">
                    <input
                        className="input-subject"
                        name="subject"
                        value={details.subject}
                        onChange={handleDetailsChange}
                        type="text"
                        placeholder="Subject (optional)"
                    />
                </div>
                <div className="message-container">
                    <textarea
                        className="input-content"
                        name="message"
                        value={details.message}
                        onChange={handleDetailsChange}
                        type="text"
                        maxLength={maxMessageLength}
                        placeholder="Message *"
                    />
                    <span className={characterLimitReached ? "character-limit reached" : "character-limit"}>
                        {remainingCharacters} characters {characterLimitReached}
                    </span>
                </div>
            </div>
            <button
                className="send-email"
                onClick={handleSendEmail}
            >
                <span className="email-btn-text">Send Email</span>
            </button>
            {emailSent && <div className="email-sent">Your email has been sent!</div>}
        </div>
    );
};

export default EmailForm;