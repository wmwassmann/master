import React from 'react';
import "../css/skillSets.css"

const Skillsets = () => {
  const languageSkills = ['C#', 'JavaScript', 'Python'];
  const webDevelopmentSkills = ['React', 'Node.js', 'HTML/CSS'];
  const databaseSkills = ['MySQL', 'MongoDB', 'Kusto'];
  const managementSkills = ['Git', 'Visual Studio', 'Agile'];

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
        <h2>Web Development</h2>
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