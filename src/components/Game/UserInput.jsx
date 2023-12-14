import React, { useState } from 'react';
import "../../css/randomWord.css";
import Timer from './Timer';
import LevelHandler from './LevelHandler';

const UserInput = (props) => {
    const { nextLevel, level, handleGenerateWord, firstLetter, secondLetter, thirdLetter, fourthLetter, fifthLetter } = props;

    const [resetTimer, setResetTimer] = useState(false);
    const [updateLevel, setUpdatedLevel] = useState(false);

    const [result, setResult] = useState("")

    

    const alphabet = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    const maxClicks = 5;

    const [totalClicks, setTotalClicks] = useState(0);

    const handleKeyClick = (letter) => {
        if (totalClicks < maxClicks) {
            localStorage.setItem('currentLetter', letter);

            setTotalClicks((prevClicks) => prevClicks + 1);

            console.log(`Clicked on letter: ${letter}`);
        } else {
            console.log('Maximum clicks reached. The keyboard is now disabled.');
        }

        const isLetterClicked =
            firstLetter.toUpperCase() === `${letter}` ||
            secondLetter.toUpperCase() === `${letter}` ||
            thirdLetter.toUpperCase() === `${letter}` ||
            fourthLetter.toUpperCase() === `${letter}` ||
            fifthLetter.toUpperCase() === `${letter}`;

        if (!isLetterClicked) {
            console.log("GAMEOVER");
            resetClicks();
            setResetTimer(true);
            setResult("FAILED!")
        }

        if (fifthLetter.toUpperCase() === `${letter}`) {
            resetClicks();
            setResetTimer(true);
            setUpdatedLevel(true);
            setResult("Passed!")

        }
    };

    const resetTime = () => {
        setResetTimer(false);
    }

    const resetUpdater = () => {
        setUpdatedLevel(false);
    };

    const resetClicks = () => {
        setTotalClicks(0);
    };

    return (
        <div>
            <h2 className="random-word-output">Keyboard</h2>

            <p className="random-word-output">Total Clicks: {totalClicks}</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: '5px' }}>
                {alphabet.split('').map((letter) => (
                    <button
                        key={letter}
                        onClick={() => handleKeyClick(letter)}
                    >
                        {letter}
                    </button>
                ))}

            </div>
            <Timer resetTimer={resetTimer} />
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
