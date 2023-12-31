import React, { useState, useEffect } from "react";
import "../css/homePage.css"
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
      <div>
      <div className="home-container">
        <div className="home-info left">
            <div className="home-title">
             software
            </div>
            <div className="home-article">
              Two years experience in developing, testing, and maintaining stable, scalable, and secure automated financial systems
            </div>
        </div>
            <div className="center-title">
              <div className="title-name">
                  William Wassmann                            
              </div>
              <div className="github">
                <Link className="link" to="https://github.com/wmwassmann/master" target="_blank" rel="noopener noreferrer">
                  &lt;a&gt;github&lt;/a&gt;
                </Link>
              </div>
            </div>
        <div className="home-info right">
          <div className="home-title">design</div>
          <div className="home-article">
            Specializations in UX/UI integrations, platform upgrades, and data retrieval and manipulations
          </div>
        </div>
      </div>
    </div>
    );
  };

export default homePage;