import React, { useState } from 'react';
import "../css/PageStyles/Portfolio/portfolioStyles.css";
import { Link } from "react-router-dom";
import calcThumb from "../assets/calculatronThumb.jpg";

const Portfolio = () => {
  

  const [projects, setProjects] = useState([
    { id: 1, title: 'Calculatron-5000', description: 'Calculator App', path: '/calculatron', thumb: calcThumb },
    { id: 2, title: 'Project 2', description: 'Description of Project 2', path: '/project2/index.html' },
    { id: 3, title: 'Project 3', description: 'Description of Project 3', path: '/project3/index.html' }
  ]);


  return (
    <div className='portfolio-outer-container'>
      <div className='portfolio-title'>
        Work in progress
      </div>
      <div className='portfolio-inner-container'>
        {projects.map(project => (
          <Link key={project.id} to={project.path} className='project-card'>
            <div className='project-content'>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <img className='project-image' src={project.thumb} alt={`${project.title} Thumbnail`} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;