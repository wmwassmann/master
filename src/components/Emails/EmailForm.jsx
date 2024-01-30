import { useState } from "react";
import { sendCustomEmail } from "./EmailHandler";


const EmailForm = () => {

    const [details, setDetails] = useState ({
        subject: '',
        message: '',
        to_email: ''
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
        <div>
            <div>
                <span>To:</span>
                <input
                    name="to_email"
                    value={details.to_email}
                    onChange={handleDetailsChange}
                    type="email"
                    placeholder="Required"
                    />
            </div>
            <div>
                <span>Subject:</span>
                <input
                    name="subject"
                    value={details.subject}
                    onChange={handleDetailsChange}
                    type="text"
                    placeholder="Required"
                    />
            </div>
            <div>
                <span>Message:</span>
                <input
                    name="message"
                    value={details.message}
                    onChange={handleDetailsChange}
                    type="text"
                    placeholder="Required"
                    />
            </div>
            <button 
                disabled={!details.to_email || !details.message || !details.subject}
                onClick={handleSendEmail}
                >
            <span>Send Email</span>
            </button>
        </div>
    )
}


export default EmailForm