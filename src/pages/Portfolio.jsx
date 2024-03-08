import React, { useState } from 'react';
import "../css/PageStyles/Portfolio/portfolioStyles.css";
import { Link } from "react-router-dom";
import calcThumb from "../assets/calculatronThumb.jpg";
import wordThumb from "../assets/WordGame.jpg"

const Portfolio = () => {
  

  const [projects, setProjects] = useState([
    { id: 1, title: 'Calculatron-5000', description: 'Calculate simple mathematical problems', path: '/calculatron', thumb: calcThumb },
    { id: 2, title: 'Word Game', description: 'Spell the word without making a mistake in 10 seconds', path: '/wordgame', thumb: wordThumb  },
    { id: 3, title: 'Project 3', description: 'Description of Project 3', path: '/project3/index.html' }
  ]);


  return (
    <div className='portfolio-outer-container'>
      <div className='portfolio-title'>
        <strong>.jsx projects</strong>
      </div>
      <div className='portfolio-inner-container'>
        {projects.map(project => (
          <Link key={project.id} to={project.path} className='project-card'>
            <div className='project-content'>
              <h3 className='project-name'>{project.title}</h3>
              <p className='project-description'>{project.description}</p>
              <img className='project-image' src={project.thumb} alt={`${project.title} Thumbnail`} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;