import React, { useState, useEffect } from 'react';
import "../../css/randomWord.css"

export default function UserInput() {

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
        </div>
    );
    // const [userInput, setUserInput] = useState('');
    // const [isMatch, setIsMatch] = useState(false);
    
    // const handleChange = (e) => {
    //     const input = e.target.value;
    //     setUserInput(input);
    //     checkChar
    // };
  
    // const checkChar = () => {
    //     const currentChar = localStorage.getItem('one');
    //     setIsMatch(userInput === currentChar);
    // };
  
    // return (
    //   <div className="input-container">        
    //     <input
    //         type="text"
    //         id="userInput"
    //         value={userInput}
    //         onChange={handleChange}
    //         placeholder="Enter a word"
    //     />      
    //     <p className="random-word-output">{isMatch ? 'true' : 'false'}</p>
    //   </div>
    // );
  };
