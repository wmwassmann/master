import React, { useEffect, useState } from 'react';
import "../css/PageStyles/AboutMe/skillSets.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt } from '@fortawesome/free-regular-svg-icons'

const Skillsets = () => {
  const languageSkills = ['JavaScript', 'Python', 'C#'];
  const webDevelopmentSkills = ['HTML/CSS', 'Node.js', 'react'];
  const databaseSkills = [ 'MongoDB','MySQL', 'Kusto'];
  const managementSkills = ['Visual Studio', 'Agile', 'Git'];
  const [isHovered, setHovered] = useState(false);
  const [animationDelay, setAnimationDelay] = useState(0.2);
  const [revealIndex, setRevealIndex] = useState(-1);
  const [hoveredSkillset, setHoveredSkillset] = useState(null);
  const arw = <FontAwesomeIcon icon={faListAlt} />

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
        {/* <div className="skills-left"> */}
          <div className={`skillset lan ${hoveredSkillset === 'lan' ? 'revealed' : ''}`}>
            <h2 className="skill-head" onMouseEnter={() => handleHover('lan')} onMouseLeave={handleLeave}>
              <div className="head-name">                
                Languages {arw}
              </div>
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
            <h2 className="skill-head" onMouseEnter={() => handleHover('data')} onMouseLeave={handleLeave}>
              <div className="head-name">
              Databases {arw}
              </div>
            </h2>
              <ul>
                {databaseSkills.map((language, index) => (
                  <li className={`skill-li ${hoveredSkillset === 'data' && isHovered && index <= revealIndex ? 'data-reveal' : ''}`} key={index}>
                    {language}
                  </li>
                ))}
              </ul>
          </div>
        {/* </div> */}

        {/* <div className="skills-right"> */}
          <div className={`skillset dev ${hoveredSkillset === 'dev' ? 'revealed' : ''}`}>
              <h2 className="skill-head" onMouseEnter={() => handleHover('dev')} onMouseLeave={handleLeave}>
                <div className="head-name">
                  Development {arw}
                </div>
                </h2>
                <ul>
                  {webDevelopmentSkills.map((language, index) => (
                    <li className={`skill-li ${hoveredSkillset === 'dev' && isHovered && index <= revealIndex ? 'dev-reveal' : ''}`} key={index}>
                      {language}
                    </li>
                  ))}
                </ul>
          </div>
          <div className={`skillset man ${hoveredSkillset === 'man' ? 'revealed' : ''}`}>
              <h2 className="skill-head" onMouseEnter={() => handleHover('man')} onMouseLeave={handleLeave}>
                <div className="head-name">
                  Management {arw}
                </div>
              </h2>
                <ul>
                  {managementSkills.map((language, index) => (
                    <li className={`skill-li ${hoveredSkillset === 'man' && isHovered && index <= revealIndex ? 'man-reveal' : ''}`} key={index}>
                      {language}
                    </li>
                  ))}
                </ul>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Skillsets;

