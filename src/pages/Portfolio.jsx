import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5173/projects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching project data:', error);
      });
  }, []);

  return (
    <div className='portfolio-outer-container'> 
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
