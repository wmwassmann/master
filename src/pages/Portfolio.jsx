import React, { useState } from 'react';
import "../css/PageStyles/Portfolio/portfolioStyles.css";
import calcThumb from "../assets/calculatronThumb.jpg";

const Portfolio = () => {
  const baseURL = "https://wmwassmann.github.io/master/";


  const [projects, setProjects] = useState([
    { id: 1, title: 'Calculatron-5000', description: 'Calculator App', path: 'Projects/Calculatron-5000/FrontEnd/calculatron.html', thumb: calcThumb },
    { id: 2, title: 'Project 2', description: 'Description of Project 2', path: '/project2/index.html' },
    { id: 3, title: 'Project 3', description: 'Description of Project 3', path: '/project3/index.html' }
  ]);
  
  const constructFullURL = (relativePath) => {
    return new URL(relativePath, baseURL).href;
  };

  return (
    <div className='portfolio-outer-container'>
      <div className='portfolio-title'>
        Work in progress
      </div>
      <div className='portfolio-inner-container'>
        {projects.map(project => (
          <a key={project.id} href={constructFullURL(project.path)} className='project-card'>
            <div className='project-content'>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <img className='project-image' src={project.thumb} alt={`${project.title} Thumbnail`} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
