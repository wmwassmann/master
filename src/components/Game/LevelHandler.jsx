import React, { useState, useEffect } from 'react';
import "../../css/randomWord.css"

const LevelHandler = (props) => {
    
    const { nextLevel, resetTime, resetUpdater, updateLevel, handleGenerateWord } = props     
    
    const [updatedLevel, setUpdateLevel] = useState(updateLevel);   
    
    const levelByLetters = "ABCDEFGHIJ";
    const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
    const currentLetter = levelByLetters[currentLevelIndex];
    
    const handleNextLevel = () => {
        // Increment the level index, and loop back to the beginning if needed
        setCurrentLevelIndex((prevIndex) => (prevIndex + 1) % levelByLetters.length);
        // Update the state to prevent calling handleNextLevel again
        setUpdateLevel(false);
        
        // Use the updated currentLetter after incrementing the index
        const updatedCurrentLetter = levelByLetters[currentLevelIndex];
        nextLevel();
        resetUpdater();
        resetTime();
        handleGenerateWord();
    };
    
    useEffect(() => {
        if (updateLevel === true) {
            handleNextLevel();
        }
    }, [updateLevel]);    
    
    return (
        <div>
            <h2 className='tag'>Current Level: {currentLetter}</h2>
           
            <button className="random-word-output" onClick={handleNextLevel}>next</button>             
        </div>
    );
};

export default LevelHandler;