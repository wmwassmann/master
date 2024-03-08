import React, { useState, useEffect } from "react";
import "../css/PageStyles/HomePage/homePage.css"
import { Link } from 'react-router-dom';

const HomePage =()=> {

  const [animationDelay, setAnimationDelay] = useState(1);

  useEffect(() => {
    const titles = document.querySelectorAll('.center-title');
    titles.forEach(title => {
      title.style.animationDelay = `${animationDelay}s`;
    });
  }, [animationDelay]);
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
          <div className="latest-commits">
            <h2>Latest Commits</h2>
            <ul>
              {latestCommits.map(commit => (
                <li key={commit.sha}>
                  <strong>{commit.commitDate}</strong> - <strong>{commit.commit.author.name}</strong>: <br />
                  {commit.commit.message}
                </li>
              ))}
            </ul>
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

export default HomePage;