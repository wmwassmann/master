import React, { useState, useEffect } from 'react';
import "../../css/ComponentStyles/Game/userInput.css";
import Timer from './Timer';
import LevelHandler from './LevelHandler';
import WordReadOut from './WordReadOut';

const UserInput = (props) => {
    const { 
        nextLevel, 
        level,
        gameSignalToggle, 
        resetGame, 
        resetGameSignal, 
        handleGenerateWord, 
        firstLetter, 
        secondLetter, 
        thirdLetter, 
        fourthLetter, 
        fifthLetter 
    } = props;

    const [resetTimer, setResetTimer] = useState(false);
    const [updateLevel, setUpdatedLevel] = useState(false);
    const [totalClicks, setTotalClicks] = useState(0);
    const [result, setResult] = useState("");
    const maxClicks = 5;
    const alphabet = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    
    useEffect(() => {
        const handleKeyDown = (event) => {
            const pressedKey = event.key.toUpperCase();
            // const pressedKey = event.key;
            if (totalClicks < maxClicks && alphabet.includes(pressedKey)) {
                localStorage.setItem('currentLetter', pressedKey);
                setTotalClicks((prevClicks) => prevClicks + 1);
            } else {
                console.log('Maximum clicks reached. The keyboard is now disabled.');
            }
            
            const isLetterClicked =
                (firstLetter === pressedKey && totalClicks === 0) ||
                (secondLetter === pressedKey && totalClicks === 1) ||
                (thirdLetter === pressedKey && totalClicks === 2) ||
                (fourthLetter === pressedKey && totalClicks === 3) ||
                (fifthLetter === pressedKey && totalClicks === 4);
            
            console.log("Click = " + pressedKey + " and word = " + firstLetter + secondLetter + thirdLetter + fourthLetter + fifthLetter )
            
            
            
            if (!isLetterClicked) {
                resetClicks();
                setResetTimer(true);
                setResult("FAILED!");
            }
            
            if (fifthLetter === pressedKey && totalClicks === 4) {
                resetClicks();
                setResetTimer(true);
                setUpdatedLevel(true);
                setResult("Passed!");
            }
        };
        
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [totalClicks, firstLetter, secondLetter, thirdLetter, fourthLetter, fifthLetter]);
    
    const pressedKey = localStorage.getItem("currentLetter");

    const resetTime = () => {
        setResetTimer(false);
    };

    const resetUpdater = () => {
        setUpdatedLevel(false);
    };

    const resetClicks = () => {
        setTotalClicks(0);
    };

    useEffect(() => {
        // Reset the timer when the resetTimerProp becomes true
        if (resetGameSignal === true) {            
            gameSignalToggle();
            setResult("")
        }
    }, [resetGameSignal]);   
    

    return (
        <div>   
                <WordReadOut
                    firstLetter={firstLetter}
                    secondLetter={secondLetter}
                    thirdLetter={thirdLetter}
                    fourthLetter={fourthLetter}
                    fifthLetter={fifthLetter}
                    pressedKey={pressedKey}
                />         
            <div className="timer-container">
                <Timer 
                    resetTimer={resetTimer}
                    resetGameSignal={resetGameSignal} 
                    gameSignalToggle={gameSignalToggle}
                    resetGame={resetGame}
                />
            </div>
            <p className="game-status">Game Status: Level {level} {result}</p>               

            <LevelHandler
                updateLevel={updateLevel}
                nextLevel={nextLevel}
                resetGameSignal={resetGameSignal}
                handleGenerateWord={handleGenerateWord}
                gameSignalToggle={gameSignalToggle}
                resetUpdater={resetUpdater}
                resetTime={resetTime}
            />
            
        </div>
    );
};

export default UserInput;