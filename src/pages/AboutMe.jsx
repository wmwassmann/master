import React, { useState, useEffect } from 'react';
import '../css/PageStyles/AboutMe/aboutMe.css';
import headshot from '../assets/headshot.jpg';
import Download from '../components/Contact/PdfHandler';
import Skillsets from '../components/Skillset/Skillset';

const AboutMe = () => {
  const [typedText, setTypedText] = useState('');
  const [onLoad, setOnLoad] = useState(false);
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const paragraphs = [
    "Hello! I am a results-driven Software Engineer with over 2 years of experience in developing, maintaining, and testing stable, scalable, and secure automated financial systems. My expertise lies in UX/UI integrations, platform upgrades, and data retrieval ensuring seamless and efficient operations.",
    "In 2020, I completed The University of Washington's web development boot camp, enhancing my skills and staying current with the latest technologies in the ever-evolving field of software engineering.",
    "Prior to my transition to software engineering, I pursued a Bachelor's degree in Theatre Arts at the University of Washington and spent 15 years as a professional actor. This background has equipped me with strong communication skills, creativity, and the ability to adapt to diverse challenges."
  ];

  useEffect(() => {
    const startTyping = () => {    
      console.log(currentParagraphIndex) 
      typeText(paragraphs[currentParagraphIndex]);
    };

    if (onLoad === false) {
      startTyping()
      setCurrentParagraphIndex(prevIndex => (prevIndex + 1) % paragraphs.length);
      setOnLoad(true);
    }   

    const timer = setInterval(() => {
      setCurrentParagraphIndex(prevIndex => (prevIndex + 1) % paragraphs.length);    
      startTyping();
    }, 12000);    
    return () => clearInterval(timer);   
  }, [currentParagraphIndex]);
  
  const typeText = (text) => {
    console.log(text)
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setTypedText(text.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);
  };

  const [latestCommits, setLatestCommits] = useState([]);

  useEffect(() => {
    fetchLatestCommits();
  }, []);

  const fetchLatestCommits = async () => {
    try {
      const response = await fetch('https://api.github.com/repos/wmwassmann/master/commits');
      const data = await response.json();
      setLatestCommits(data.slice(0, 5).map(commit => {
        const regex = /^(\d{4}-\d{2}-\d{2})T/;
        const match = regex.exec(commit.commit.author.date);
        const date = match ? match[1] : "Unknown Date";
        return { ...commit, commitDate: date };
      }));
    } catch (error) {
      console.error('Error fetching latest commits:', error);
    }
  };

  return (
    <div className="readme-container">
      <div className='aboutme-body'>
        <div className="text-container">
          <div className='outer-bubble'>
          <div className="profile-container">
            <div className="cropped-image">
              <img src={headshot} className='headshot' alt="Me" />
            </div>
          </div>
            <p className='text-body'>
              {typedText}
            </p>
          </div>
            <div className="latest-commits">
              <h2>Latest Commits</h2>
              <ul>
                {latestCommits.map(commit => (
                  <li key={commit.sha}>
                    <strong>{commit.commitDate} </strong><strong>{commit.commit.author.name}</strong>: {commit.commit.message}
                  </li>
                ))}
              </ul>
            </div>
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
