import React, { useState, useEffect } from 'react';
import '../css/PageStyles/AboutMe/aboutMe.css';
import headshot from '../assets/headshot.jpg';
import Download from '../components/Contact/PdfHandler';
import Skillsets from '../components/Skillset/Skillset';

const AboutMe = () => {
  const [typedText, setTypedText] = useState('');
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const paragraphs = [
    "Hello! I am a results-driven Software Engineer with over 2 years of experience in developing, maintaining, and testing stable, scalable, and secure automated financial systems. My expertise lies in UX/UI integrations, platform upgrades, and data retrieval ensuring seamless and efficient operations.",
    "In 2020, I completed The University of Washington's web development boot camp, enhancing my skills and staying current with the latest technologies in the ever-evolving field of software engineering.",
    "Prior to my transition to software engineering, I pursued a Bachelor's degree in Theatre Arts at the University of Washington and spent 15 years as a professional actor. This background has equipped me with strong communication skills, creativity, and the ability to adapt to diverse challenges."
  ];

  useEffect(() => {
    const startTyping = () => {    
      typeText(paragraphs[currentParagraphIndex]);
    };

    startTyping();


    const timer = setInterval(() => {
      // setCurrentParagraphIndex(prevIndex => (prevIndex + 1) % paragraphs.length); 
      // startTyping();
      console.log("Reset Time")
    }, 6000);    
    return () => clearInterval(timer);
   
  }, [currentParagraphIndex]);
  
  const typeText = (text) => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setTypedText(text.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 10);
  };

  return (
    <div className="readme-container">
      <div className='aboutme-body'>
        <div className="text-container">
          <p className='text-body'>
            {typedText}
          </p>
        </div>
        <div className="profile-container">
          <div className="cropped-image">
            <img src={headshot} className='headshot' alt="Me" />
          </div>
          <h1 className="my-name">
            William Wassmann
          </h1>
          <button className='pdf-button'>
            <Download />
          </button>
        </div>
        <div className='about-me-skills-container'>
          <div className="flank right">
            <Skillsets />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
