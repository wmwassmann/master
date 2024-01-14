import React, { useEffect, useState } from 'react';
import "../css/contactInfo.css"
import Download from './Contact/PdfHandler';

const ContactInfo = () => {  

  return (
    <div className="contacts-container">      
      <div className="contacts-info">
        <h2>Contacts</h2>
        {/* <ul> */}
          {/* {managementSkills.map((management, index) => (
            <li key={index}>{management}</li>
          ))} */}
        {/* </ul> */}
        <div>In progress</div>
      </div>
      <Download />
    </div>
  );
};

export default ContactInfo;