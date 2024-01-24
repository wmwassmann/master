import React, { useEffect, useState } from 'react';
import "../css/PageStyles/AboutMe/skillSets.css";
import "../css/PageStyles/AboutMe/liskew.css";

const Skillsets = () => {
  const languageSkills = ['JavaScript', 'Python', 'C#'];
  const webDevelopmentSkills = ['React', 'Node.js', 'HTML/CSS'];
  const databaseSkills = ['MySQL', 'MongoDB', 'Kusto'];
  const managementSkills = ['Git', 'Visual Studio', 'Agile'];
  const [isHovered, setHovered] = useState(false);
  const [animationDelay, setAnimationDelay] = useState(0.2); // Adjust the delay time (in seconds) between each skillset

  useEffect(() => {
    const skillsets = document.querySelectorAll('.skillset');
    skillsets.forEach((skillset, index) => {
      skillset.style.animationDelay = `${index * animationDelay}s`;
    });
  }, [animationDelay]);

  return (
    <div>
      <div className="skillsets-container">
        <div className="skillset lan">
        <h2 onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            Languages
          </h2>
          <ul>
            {languageSkills.map((language, index) => (
              <li className={`lan-li ${isHovered ? 'reveal' : ''}`} key={index}>
                {language}
              </li>
            ))}
          </ul>
        </div>

        <div className="skillset data">
          <h2>Databases</h2>
          {/* <ul>
            {databaseSkills.map((database, index) => (
              <li key={index}>{database}</li>
            ))}
          </ul> */}
        </div>
      </div>
      <div className="skillsets-container">
        <div className="skillset dev">
          <h2>Development</h2>
          {/* <ul>
            {webDevelopmentSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul> */}
        </div>

        <div className="skillset man">
          <h2>Management</h2>
          {/* <ul>
            {managementSkills.map((management, index) => (
              <li key={index}>{management}</li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Skillsets;