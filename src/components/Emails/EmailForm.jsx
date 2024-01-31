import { useState } from "react";
import { sendCustomEmail } from "./EmailHandler";
import "../../css/ComponentStyles/Contact/email.css"


const EmailForm = () => {

    const [details, setDetails] = useState ({
        your_name: '',
        your_email: '',
        subject: '',
        message: '',
    })
    

    const handleDetailsChange = (event) => {
        const { name, value } = event.target;

        setDetails((prevDetails) => {
            return {
                ...prevDetails,
                [name]: value,
            };
        });
    };

    const handleSendEmail = () => {
        sendCustomEmail(details);
    }
    
    return (
        <div className="email-container">
            <h1 className="contact-head">
                Contact Me
            </h1>
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
                        // maxLength={500}
                        placeholder="Message *"
                        />
                </div>
            </div>
            <button 
                className="send-email"
                disabled={!details.your_name || !details.your_email || !details.message || !details.subject}
                onClick={handleSendEmail}
                >
                <span className="email-btn-text">Send Email</span>
            </button>
        </div>
    )
}


export default EmailForm