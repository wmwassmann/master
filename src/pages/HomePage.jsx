import React, { useState, useEffect } from "react";
import "../css/homePage.css"
import AboutMe from "./AboutMe";

const homePage =()=> {

    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const homeContainer = document.querySelector('.home-container');
  
        if (scrollY > homeContainer.offsetTop) {
          setScrolled(true);          
        } else {
          setScrolled(false);
        }
      };
  
      document.addEventListener('scroll', handleScroll);
  
      return () => {
        document.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div>
        <div className={`home-container${scrolled ? ' scrolled' : ''}`}>
          <div className="home-info left">
            <div className="home-title">software</div>
            <div className="home-article">
              Two years experience in developing, testing, and maintaining stable, scalable, and secure automated financial systems
            </div>
          </div>
          <div className="home-info right">
            <div className="home-title">design</div>
            <div className="home-article">
              Specializations in UX/UI integrations, platform upgrades, and data retrieval and manipulations
            </div>
          </div>
        </div>
        <div className={`about-container${scrolled ? ' scrolled' : ''}`}>
            <div className="about-translate">
                <AboutMe />
            </div>
        </div>
      </div>
    );
  };

export default homePage;