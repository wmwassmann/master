import React, { useState, useEffect } from 'react';
import "../../css/randomWord.css";
import Timer from './Timer';
import LevelHandler from './LevelHandler';

const UserInput = (props) => {
    const { nextLevel, level, timeSignalToggle, resetGameSignal, handleGenerateWord, firstLetter, secondLetter, thirdLetter, fourthLetter, fifthLetter } = props;

    const [resetTimer, setResetTimer] = useState(false);
    const [updateLevel, setUpdatedLevel] = useState(false);
    const [result, setResult] = useState("");
    const alphabet = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    const maxClicks = 5;
    
    const [totalClicks, setTotalClicks] = useState(0);

    useEffect(() => {
        const handleKeyDown = (event) => {
            const pressedKey = event.key.toUpperCase();
            if (totalClicks < maxClicks && alphabet.includes(pressedKey)) {
                localStorage.setItem('currentLetter', pressedKey);
                setTotalClicks((prevClicks) => prevClicks + 1);
                console.log(`Pressed key: ${pressedKey}`);
            } else {
                console.log('Maximum clicks reached. The keyboard is now disabled.');
            }

            const isLetterClicked =
                firstLetter.toUpperCase() === pressedKey ||
                secondLetter.toUpperCase() === pressedKey ||
                thirdLetter.toUpperCase() === pressedKey ||
                fourthLetter.toUpperCase() === pressedKey ||
                fifthLetter.toUpperCase() === pressedKey;

            if (!isLetterClicked) {
                console.log("GAMEOVER");
                resetClicks();
                setResetTimer(true);
                setResult("FAILED!")
            }

            if (fifthLetter.toUpperCase() === pressedKey) {
                resetClicks();
                setResetTimer(true);
                setUpdatedLevel(true);
                setResult("Passed!")
            }
            console.log("pressedKey:", pressedKey);
        };
        console.log("firstLetter:", firstLetter);
        console.log("secondLetter:", secondLetter);
        console.log("thirdLetter:", thirdLetter);
        console.log("fourthLetter:", fourthLetter);
        console.log("fifthLetter:", fifthLetter);

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [totalClicks, firstLetter, secondLetter, thirdLetter, fourthLetter, fifthLetter]);

    const resetTime = () => {
        setResetTimer(false);
    };

    const resetUpdater = () => {
        setUpdatedLevel(false);
    };

    const resetClicks = () => {
        setTotalClicks(0);
    };

    return (
        <div>
            <p className="random-word-output">Total Clicks: {totalClicks}</p>           

            <Timer 
                resetTimer={resetTimer}
                resetGameSignal={resetGameSignal} 
                timeSignalToggle={timeSignalToggle}
            />
            <LevelHandler
                updateLevel={updateLevel}
                nextLevel={nextLevel}
                handleGenerateWord={handleGenerateWord}
                resetUpdater={resetUpdater}
                resetTime={resetTime}
            />
            <p className="random-word-output">Game Status: Level {level} {result}</p>
        </div>
    );
};

export default UserInput;