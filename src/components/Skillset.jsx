import React, { useEffect, useState } from 'react';
import "../css/skillSets.css";

const Skillsets = () => {
  const languageSkills = ['C#', 'JavaScript', 'Python'];
  const webDevelopmentSkills = ['React', 'Node.js', 'HTML/CSS'];
  const databaseSkills = ['MySQL', 'MongoDB', 'Kusto'];
  const managementSkills = ['Git', 'Visual Studio', 'Agile'];

  const [animationDelay, setAnimationDelay] = useState(0.2); // Adjust the delay time (in seconds) between each skillset

  useEffect(() => {
    const skillsets = document.querySelectorAll('.skillset');
    skillsets.forEach((skillset, index) => {
      skillset.style.animationDelay = `${index * animationDelay}s`;
    });
  }, [animationDelay]);

  return (
    <div className="skillsets-container">
      <div className="skillset">
        <h2>Languages</h2>
        <ul>
          {languageSkills.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </div>

      <div className="skillset">
        <h2>Development</h2>
        <ul>
          {webDevelopmentSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="skillset">
        <h2>Databases</h2>
        <ul>
          {databaseSkills.map((database, index) => (
            <li key={index}>{database}</li>
          ))}
        </ul>
      </div>

      <div className="skillset">
        <h2>Management</h2>
        <ul>
          {managementSkills.map((management, index) => (
            <li key={index}>{management}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skillsets;