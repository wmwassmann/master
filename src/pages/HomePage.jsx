import React, { useState, useEffect } from "react";
import "../css/PageStyles/HomePage/homePage.css"
import { Link } from 'react-router-dom';

const homePage =()=> {

  const [animationDelay, setAnimationDelay] = useState(1);

  useEffect(() => {
    const titles = document.querySelectorAll('.center-title');
    titles.forEach(title => {
      title.style.animationDelay = `${animationDelay}s`;
    });
  }, [animationDelay]);
  
    return (
      <div className="home-container">

        <div className="flank-left-container">
          <div className="flank left">
              <div className="home-title skew-correct">
              design
              </div>
              <div className="home-article skew-correct">
              Specializations in UX/UI integrations, platform upgrades, and data retrieval and manipulations
              </div>
          </div>
        </div>

        <div className="center-title">             
          <div className="github">
            <Link className="link" to="https://github.com/wmwassmann/master" target="_blank" rel="noopener noreferrer">
              <div className="link-title skew-correct">
                GitHub
              </div>
            </Link>
          </div>
        </div>
          
        <div className="flank-right-container">
          <div className="flank right">
            <div className="home-title skew-correct">
              software
              </div>
            <div className="home-article skew-correct">
              Two years experience in developing, testing, and maintaining stable, scalable, and secure automated financial systems            
            </div>
          </div>
        </div>
      </div>
    );
  };

export default homePage;