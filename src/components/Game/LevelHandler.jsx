import React, { useState, useEffect } from 'react';
import "../../css/randomWord.css"
import UserInput from './UserInput';

const LevelHandler = (props) => {
    
    const nextLevel = props.nextLevel
    const updateLevel =  props.updateLevel
    console.log("Are we " + updateLevel)

    const [updatedLevel, setUpdateLevel] = useState(updateLevel);

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

    console.log("This is " + updateLevel)
    const handleNextLevel = () => {
        // Increment the level index, and loop back to the beginning if needed
        setCurrentLevelIndex((prevIndex) => (prevIndex + 1) % levelByLetters.length);
        levelHandler(currentLetter)

        // Update the state to prevent calling handleNextLevel again
        setUpdateLevel(false);
    };

    useEffect(() => {
        if (updateLevel === true) {
            handleNextLevel();
            console.log("TRUE");
        }
    }, [updateLevel]);

    console.log("Updated Level is " + updatedLevel)





    return (
        <div>
            <h2 className='tag'>Current Level: {currentLetter}</h2>
            <div>
                {currentWordList.map((word, index) => (
                    <div className='tag' key={index}>{word}</div>
                ))}
            </div>
        </div>
    );
};

export default LevelHandler;