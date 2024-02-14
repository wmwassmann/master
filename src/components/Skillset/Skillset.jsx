import React, { useEffect, useState } from 'react';
import "../../css/PageStyles/AboutMe/skillSets.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt } from '@fortawesome/free-regular-svg-icons'

const Skillsets = () => {
  // Icon
  const arw = <FontAwesomeIcon icon={faListAlt} />

  // SKill Compartments 
  const languageSkills = ['JavaScript', 'Python', 'C#'];
  const webDevelopmentSkills = ['HTML/CSS', 'Node.js', 'React'];
  const databaseSkills = [ 'MongoDB','MySQL', 'Kusto'];
  const managementSkills = ['Visual Studio', 'Agile', 'Git'];

  // States
  const [isHovered, setHovered] = useState(false);
  const [animationDelay, setAnimationDelay] = useState(0.2);
  const [revealIndex, setRevealIndex] = useState(-1);
  const [hoveredSkillset, setHoveredSkillset] = useState(null);

  // Animation Handlers
  useEffect(() => {
    const skillsets = document.querySelectorAll('.skill-compartment' || '.li');
    skillsets.forEach((skill, index) => {
      skill.style.animationDelay = `${index * animationDelay}s`;
    });
  }, [animationDelay]); 

  useEffect(() => {
    const revealInterval = setInterval(() => {
      if (revealIndex < languageSkills.length - 1) {
        setRevealIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(revealInterval);
      }
    }, 50); 

    return () => clearInterval(revealInterval);
  }, [revealIndex]);

  // On Clicks

  const handleHover = (skill) => {
    setHovered(true);
    setRevealIndex(0);
    setHoveredSkillset(skill);
  };

  const handleLeave = () => {
    setHovered(false);
    setRevealIndex(-1);
  };

  return (
    <div>
      <div className="skillsets-container">
          <div className={`skill-compartment lan ${hoveredSkillset === 'lan' ? 'revealed' : ''}`}>
            <h2 className="skill-head" onMouseEnter={() => handleHover('lan')} onMouseLeave={handleLeave}>
              <div className="head-name skew-correct">                
                Languages {arw}
              </div>
            </h2>
              <ul>
                {languageSkills.map((language, index) => (
                  <li className={`skill-item ${hoveredSkillset === 'lan' && isHovered && index <= revealIndex ? 'lan-reveal' : ''}`} key={index}>
                    <div className='skew-correct'>
                      {language}
                    </div>
                  </li>
                ))}
              </ul>
          </div>
          <div className={`skill-compartment data ${hoveredSkillset === 'data' ? 'revealed' : ''}`}>
            <h2 className="skill-head" onMouseEnter={() => handleHover('data')} onMouseLeave={handleLeave}>
              <div className="head-name skew-correct">
              Databases {arw}
              </div>
            </h2>
              <ul>
                {databaseSkills.map((language, index) => (
                  <li className={`skill-item ${hoveredSkillset === 'data' && isHovered && index <= revealIndex ? 'data-reveal' : ''}`} key={index}>
                    <div className='skew-correct'>
                      {language}
                    </div>
                  </li>
                ))}
              </ul>
          </div>
          <div className={`skill-compartment dev ${hoveredSkillset === 'dev' ? 'revealed' : ''}`}>
              <h2 className="skill-head" onMouseEnter={() => handleHover('dev')} onMouseLeave={handleLeave}>
                <div className="head-name skew-correct">
                  Development {arw}
                </div>
                </h2>
                <ul>
                  {webDevelopmentSkills.map((language, index) => (
                    <li className={`skill-item ${hoveredSkillset === 'dev' && isHovered && index <= revealIndex ? 'dev-reveal' : ''}`} key={index}>
                      <div className='skew-correct'>
                        {language}
                      </div>
                    </li>
                  ))}
                </ul>
          </div>
          <div className={`skill-compartment man ${hoveredSkillset === 'man' ? 'revealed' : ''}`}>
              <h2 className="skill-head" onMouseEnter={() => handleHover('man')} onMouseLeave={handleLeave}>
                <div className="head-name skew-correct">
                  Management {arw}
                </div>
              </h2>
                <ul>
                  {managementSkills.map((language, index) => (
                    <li className={`skill-item ${hoveredSkillset === 'man' && isHovered && index <= revealIndex ? 'man-reveal' : ''}`} key={index}>
                      <div className='skew-correct'>
                        {language}
                      </div>
                    </li>
                  ))}
                </ul>
          </div>
      </div>
    </div>
  );
};

export default Skillsets;

