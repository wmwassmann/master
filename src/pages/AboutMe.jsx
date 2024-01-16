import React from 'react';
import '../css/PageStyles/AboutMe/aboutMe.css';
import headshot from '../assets/headshot.jpg'
import Download from '../components/Contact/PdfHandler';

const AboutMe = () => {
  return (
    <div className="readme-container">
      <div className='header-container'>
        <h1>
          William Wassmann
          <h3 className='sub-header'>
            README.md
          </h3>
        </h1>      
      </div>
      <div className='headshot-container'>
        <img src={headshot} className='headshot' alt="Me" />
        <p>
          I am a results-driven Software Engineer with over 2 years of experience in developing, testing, and maintaining stable, scalable, and secure automated financial systems. My expertise lies in UX/UI integrations, platform upgrades, and data retrieval and manipulations, ensuring seamless and efficient operations.
        </p>
      </div>
      <p className='text-body'>
        In 2020, I successfully completed The University of Washington's web development boot camp, enhancing my skills and staying current with the latest technologies in the ever-evolving field of software engineering.
      </p>
      <p className='text-body'>
        Prior to my transition to software engineering, I pursued a Bachelor's degree in Theatre Arts at the University of Washington and spent 15 years as a professional actor. This background has equipped me with strong communication skills, creativity, and the ability to adapt to diverse challenges.
      </p>
      <p className='text-body'>
        I am passionate about leveraging technology to solve complex problems, and I am committed to continuous learning and professional growth to stay at the forefront of the rapidly advancing tech industry.
      </p>
        <button className='pdf-button'>
          <Download />
        </button>
    </div>
  );
};

export default AboutMe;