
import React, { useState, useEffect } from 'react';
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

        const [firstLetter, setFirstLetter] = useState('');
        const [secondLetter, setSecondLetter] = useState('');
        const [thirdLetter, setThirdLetter] = useState('');
        const [fourthLetter, setFourthLetter] = useState('');
        const [fifthLetter, setFifthLetter] = useState('');
        
        useEffect(() => {
            const charArray = randomWord.split('');
        
            setFirstLetter(charArray[0]);
            setSecondLetter(charArray[1]);
            setThirdLetter(charArray[2]);
            setFourthLetter(charArray[3]);
            setFifthLetter(charArray[4]);
          }, [randomWord]);
        
        //   useEffect(() => {
        //     console.log("First Letter:", firstLetter);
        //   }, [firstLetter]);
        
        //   useEffect(() => {
        //     console.log("Second Letter:", secondLetter);
        //   }, [secondLetter]);
        
        //   useEffect(() => {
        //     console.log("Third Letter:", thirdLetter);
        //   }, [thirdLetter]);
        
        //   useEffect(() => {
        //     console.log("Fourth Letter:", fourthLetter);
        //   }, [fourthLetter]);
        
        //   useEffect(() => {
        //     console.log("Fifth Letter:", fifthLetter);
        //   }, [fifthLetter]);     
     
      
      

        return (
            <div>
                <button className="random-word-btn" onClick={handleGenerateWord}>Generate Word</button>
                {randomWord && <p className="random-word-output">Random Word: {randomWord}</p>}
                
            </div>
        )        
    }