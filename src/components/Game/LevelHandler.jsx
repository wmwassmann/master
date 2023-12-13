import React, { useState, useEffect } from 'react';
import "../../css/randomWord.css"
import UserInput from './UserInput';

const LevelHandler = (props) => {
    
    const nextLevel = props.nextLevel;
    const handleGenerateWord = props.handleGenerateWord;
    const resetUpdater = props.resetUpdater;
    const updateLevel =  props.updateLevel;
    
    console.log("Level props " + updateLevel)

    const [updatedLevel, setUpdateLevel] = useState(updateLevel);
    
    console.log("Updated Level " + updatedLevel)

    const wordsByLetter = {
        A: ['apple', 'amber', 'adapt', 'alive', 'amuse', /* add more words */],
        B: ['beach', 'baker', 'badge', 'bloom', 'brave', /* add more words */],
        C: ['candy', 'champ', 'crisp', 'crown', 'curse', /* add more words */],
        D: ['dance', 'drown', 'dealt', 'dream', 'douse', /* add more words */],
        E: ['eager', 'elbow', 'emote', 'equal', 'error', /* add more words */],
        F: ['fable', 'frost', 'frown', 'frame', 'flame', /* add more words */],
    };
    
    const levelByLetters = "ABCDEF";
    const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
    const currentLetter = levelByLetters[currentLevelIndex];
    const currentWordList = wordsByLetter[currentLetter] || [];
    
    const handleNextLevel = () => {
        // Increment the level index, and loop back to the beginning if needed
        setCurrentLevelIndex((prevIndex) => (prevIndex + 1) % levelByLetters.length);
        // Update the state to prevent calling handleNextLevel again
        setUpdateLevel(false);
        
        // Use the updated currentLetter after incrementing the index
        const updatedCurrentLetter = levelByLetters[currentLevelIndex];
        nextLevel();
        resetUpdater();
        handleGenerateWord();
        console.log(" === In Handler " + updatedCurrentLetter + " " + currentLevelIndex)
    };
    
    useEffect(() => {
        if (updateLevel === true) {
            handleNextLevel();
        }
    }, [updateLevel]);    
    
    return (
        <div>
            <h2 className='tag'>Current Level: {currentLetter}</h2>
            <div>
                {currentWordList.map((word, index) => (
                    <div className='tag' key={index}>{word}</div>
                    ))}
            </div>
            <button className="random-word-output" onClick={handleNextLevel}>next</button>             
        </div>
    );
};

export default LevelHandler;