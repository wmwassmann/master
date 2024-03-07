import React, { useState, useEffect } from 'react';
import "../Styles/randomWord.css"

const LevelHandler = (props) => {
    
    const { nextLevel, gameSignalToggle, resetGameSignal, resetTime, resetUpdater, updateLevel, handleGenerateWord } = props     
    
    const [updatedLevel, setUpdateLevel] = useState(updateLevel);   
    
    const levelByLetters = "XABCDEFGHIJKLMNOP";
    const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
    const currentLetter = levelByLetters[currentLevelIndex];
    
    const handleNextLevel = () => {
        // Increment the level index, and loop back to the beginning if needed
        setCurrentLevelIndex((prevIndex) => (prevIndex + 1) % levelByLetters.length);
        // Update the state to prevent calling handleNextLevel again
        setUpdateLevel(false);
        nextLevel();
        
        // Use the updated currentLetter after incrementing the index
        //const updatedCurrentLetter = levelByLetters[currentLevelIndex];
        resetUpdater();
        resetTime();
        handleGenerateWord();
    };
    
    useEffect(() => {
        if (updateLevel === true) {
            handleNextLevel();
        }
    }, [updateLevel]);    


    useEffect(() => {
        // Reset the timer when the resetTimerProp becomes true
        if (resetGameSignal === true) {
            setCurrentLevelIndex(0); 
            gameSignalToggle();
        }
    }, [resetGameSignal]);

  

    
    return (
        <div>
            <h2 className='tag'>Highest Level: {currentLetter}</h2>          
        </div>
    );
};

export default LevelHandler;