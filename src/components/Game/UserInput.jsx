import React, { useState } from 'react';
import "../../css/randomWord.css"
import Timer from './Timer';
import LevelHandler from './LevelHandler';

const UserInput = (props) => {

    // handles the keyboard functionality. We want the state from 
    // RandomWordGen.jsx to pop in here.
    const firstLetter = props.firstLetter.toUpperCase();
    const secondLetter = props.secondLetter.toUpperCase();
    const thirdLetter = props.thirdLetter.toUpperCase();
    const fourthLetter = props.fourthLetter.toUpperCase();
    const fifthLetter = props.fifthLetter.toUpperCase();

    const [resetTimer, setResetTimer] = useState(false);
    const [updateLevel, setUpdatedLevel] = useState(false);
    
    const alphabet = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    const maxClicks = 5;

    const [totalClicks, setTotalClicks] = useState(0);


    const handleKeyClick = (letter) => {
        if (totalClicks < maxClicks) {        
            localStorage.setItem('currentLetter', letter);

            setTotalClicks((prevClicks) => prevClicks + 1);

            console.log(`Clicked on letter: ${letter}`);
        } 
            else 
        {
            console.log('Maximum clicks reached. The keyboard is now disabled.');
        }

        switch (true) {
            case firstLetter === `${letter}`:
            case secondLetter === `${letter}`:
            case thirdLetter === `${letter}`:
            case fourthLetter === `${letter}`:
            case fifthLetter === `${letter}`:
            break;        
        }
        if (fifthLetter === `${letter}`) {
            setResetTimer(true);
            setUpdatedLevel(true);
        }
    };

    return (
        <div>
            <h2 className="random-word-output">Keyboard</h2>

            <p className="random-word-output">Total Clicks: {totalClicks}</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: '5px' }}>
                {alphabet.split('').map((letter) => (
                <button key={letter} onClick={() => handleKeyClick(letter)}>
                    {letter}
                </button>
                ))}
            </div>    
            <Timer resetTimer={resetTimer}/>
            <LevelHandler updateLevel={updateLevel}/>
        </div>
    );   
  };

  export default UserInput;
