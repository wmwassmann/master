
import React, { useState } from 'react';
import "../../css/randomWord.css"

    export default function RandomWordGenerator() {
        const fiveLetterWordsA = ['apple', 'amber', 'adapt', 'alive', 'amuse', /* add more words */];
        
        const generateRandomWord = () => {
            const randomIndex = Math.floor(Math.random() * fiveLetterWordsA.length);
            return fiveLetterWordsA[randomIndex];
        };
        
        const [randomWord, setRandomWord] = useState(generateRandomWord);
        
        const handleGenerateWord = () => {
            const word = generateRandomWord();
            setRandomWord(word);
        };

        const charArray = randomWord.split('');

        localStorage.setItem('currentWord', (randomWord))  
        localStorage.setItem('one', (charArray[0]))
        localStorage.setItem('two', (charArray[1]))
        localStorage.setItem('three', (charArray[2]))
        localStorage.setItem('four', (charArray[3]))
        localStorage.setItem('five', (charArray[4]))



        return (
            <div>
                <button className="random-word-btn" onClick={handleGenerateWord}>Generate Word</button>
                {randomWord && <p className="random-word-output">Random Word: {randomWord}</p>}
            </div>
        )        
    }