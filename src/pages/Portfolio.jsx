import React, { useState } from 'react';
import "../css/PageStyles/Portfolio/portfolioStyles.css"

const Portfolio = () => {
  const [projects, setProjects] = useState([
    { id: 1, title: 'Project 1', description: 'Description of Project 1' },
    { id: 2, title: 'Project 2', description: 'Description of Project 2' },
    { id: 3, title: 'Project 3', description: 'Description of Project 3' }
  ]);

  return (
    <div className='portfolio-outer-container'> 
      <div className='portfolio-title'>
        Work in progress
      </div>
      <div className='portfolio-inner-container'> 
        {projects.map(project => (
          <div key={project.id} className='project-card'>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
