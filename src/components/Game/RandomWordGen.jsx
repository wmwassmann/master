
import React, { useState, useEffect } from 'react';
import "../../css/randomWord.css"
import UserInput from './UserInput';
import LevelHandler from './LevelHandler';

const RandomWordGenerator = () => {  

    const [level, setLevel] = useState("Current Level is ");

    const nextLevel = (lvl) => {
        setLevel(lvl)
    }
    const fiveLetterWordsA = ['apple', 'amber', 'adapt', 'alive', 'amuse', /* add more words */];
    const fiveLetterWordsB = ['beach', 'baker', 'badge', 'bloom', 'brave', /* add more words */];
    const fiveLetterWordsC = ['candy', 'champ', 'crisp', 'crown', 'curse', /* add more words */];
    const fiveLetterWordsD = ['dance', 'drown', 'dealt', 'dream', 'douse', /* add more words */];
    const fiveLetterWordsE = ['eager', 'elbow', 'emote', 'equal', 'error', /* add more words */];
    const fiveLetterWordsF = ['fable', 'frost', 'frown', 'frame', 'flame', /* add more words */];

        
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
    
    return (
        <div>
            <button className="random-word-btn" onClick={handleGenerateWord}>Generate Word</button>
            {randomWord && <p className="random-word-output">Random Word: {randomWord}</p>}                
            <UserInput 
                firstLetter={firstLetter} 
                secondLetter={secondLetter}
                thirdLetter={thirdLetter}
                fourthLetter={fourthLetter}
                fifthLetter={fifthLetter}
                nextLevel={nextLevel}
            />
            <p className='random-word-output'>{level}</p>
        </div>
    )        
}

    export default RandomWordGenerator;