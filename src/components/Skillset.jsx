import React, { useEffect, useState } from 'react';
import "../css/PageStyles/AboutMe/skillSets.css";
import "../css/PageStyles/AboutMe/liskew.css";

const Skillsets = () => {
  const languageSkills = ['JavaScript', 'Python', 'C#'];
  const webDevelopmentSkills = ['HTML/CSS', 'Node.js', 'react'];
  const databaseSkills = [ 'MongoDB','MySQL', 'Kusto'];
  const managementSkills = ['Visual Studio', 'Agile', 'Git'];
  const [isHovered, setHovered] = useState(false);
  const [animationDelay, setAnimationDelay] = useState(0.2);
  const [revealIndex, setRevealIndex] = useState(-1);
  const [hoveredSkillset, setHoveredSkillset] = useState(null);

  useEffect(() => {
    const skillsets = document.querySelectorAll('.skillset' || '.li');
    skillsets.forEach((skillset, index) => {
      skillset.style.animationDelay = `${index * animationDelay}s`;
    });
  }, [animationDelay]); 

  useEffect(() => {
        
    const revealInterval = setInterval(() => {
      if (revealIndex < languageSkills.length - 1) {
        setRevealIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(revealInterval);
      }
    }, 200); // Adjust the delay (in milliseconds) as needed

    return () => clearInterval(revealInterval);
  }, [revealIndex]);

  const handleHover = (skillset) => {
    setHovered(true);
    setRevealIndex(0);
    setHoveredSkillset(skillset);
    console.log(skillset)
  };

  const handleLeave = () => {
    setHovered(false);
    setRevealIndex(-1);
  };

  return (
    <div>
      <div className="skillsets-container">
        <div className={`skillset lan ${hoveredSkillset === 'lan' ? 'revealed' : ''}`}>
          <h2 onMouseEnter={() => handleHover('lan')} onMouseLeave={handleLeave}>
            Languages
          </h2>
            <ul>
              {languageSkills.map((language, index) => (
                <li className={`skill-li ${hoveredSkillset === 'lan' && isHovered && index <= revealIndex ? 'lan-reveal' : ''}`} key={index}>
                  {language}
                </li>
              ))}
            </ul>
        </div>

        <div className={`skillset data ${hoveredSkillset === 'data' ? 'revealed' : ''}`}>
          <h2 onMouseEnter={() => handleHover('data')} onMouseLeave={handleLeave}>
            Databases
          </h2>
            <ul>
              {databaseSkills.map((language, index) => (
                <li className={`skill-li ${hoveredSkillset === 'data' && isHovered && index <= revealIndex ? 'data-reveal' : ''}`} key={index}>
                  {language}
                </li>
              ))}
            </ul>
        </div>
      </div>
      <div className={`skillset dev ${hoveredSkillset === 'dev' ? 'revealed' : ''}`}>
          <h2 onMouseEnter={() => handleHover('dev')} onMouseLeave={handleLeave}>
              Development
            </h2>
            <ul>
              {webDevelopmentSkills.map((language, index) => (
                <li className={`skill-li ${hoveredSkillset === 'dev' && isHovered && index <= revealIndex ? 'dev-reveal' : ''}`} key={index}>
                  {language}
                </li>
              ))}
            </ul>
            <div className={`skillset man ${hoveredSkillset === 'man' ? 'revealed' : ''}`}>
          <h2 onMouseEnter={() => handleHover('man')} onMouseLeave={handleLeave}>
              Management
            </h2>
            <ul>
              {managementSkills.map((language, index) => (
                <li className={`skill-li ${hoveredSkillset === 'man' && isHovered && index <= revealIndex ? 'man-reveal' : ''}`} key={index}>
                  {language}
                </li>
              ))}
            </ul>
      </div>
    </div>
    </div>
  );
};

export default Skillsets;

