import React from 'react';
import '../css/PageStyles/AboutMe/aboutMe.css';
import headshot from '../assets/headshot.jpg'
import Download from '../components/Contact/PdfHandler';
import Skillsets from '../components/Skillset/Skillset';

const AboutMe = () => {
  return (
    <div className="readme-container">
        <div className='aboutme-body'>
          <div className="text-container">
            <p className='text-body'>
              I am a results-driven Software Engineer with over 2 years of experience in developing, maintaining, and testing stable, scalable, and secure automated financial systems. My expertise lies in UX/UI integrations, platform upgrades, and data retrieval and manipulations, ensuring seamless and efficient operations.
            </p>
            <p className='text-body'>
              In 2020, I completed The University of Washington's web development boot camp, enhancing my skills and staying current with the latest technologies in the ever-evolving field of software engineering.
            </p>
            <p className='text-body'>
              Prior to my transition to software engineering, I pursued a Bachelor's degree in Theatre Arts at the University of Washington and spent 15 years as a professional actor. This background has equipped me with strong communication skills, creativity, and the ability to adapt to diverse challenges.
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
              <Skillsets/>
            </div>     
          </div>
        </div>
    </div>
  );
};

export default AboutMe;