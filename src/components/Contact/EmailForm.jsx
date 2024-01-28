// EmailForm.jsx
import React, { useState } from 'react';
import "../../css/PageStyles/ContactMe/contactInfo.css"
import axios from 'axios';

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/master/contact', formData);
      // await axios.post('/send-email', formData);
      alert('CLIENT Email sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('CLaIENT Error sending email:', error);
      alert('CLIENT Failed to send email. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Subject:</label>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default EmailForm;
