import React, { useState, useEffect } from 'react';
import "../../css/randomWord.css"
import UserInput from './UserInput';
import LevelHandler from './LevelHandler';

const RandomWordGenerator = () => {
    const [level, setLevel] = useState('A');
    const levelByLetters = "ABCDEF";
    const [currentLevelIndex, setCurrentLevelIndex] = useState(1);

    const nextLevel = () => {
        setCurrentLevelIndex((prevIndex) => (prevIndex + 1) % levelByLetters.length);
        const updatedCurrentLetter = levelByLetters[currentLevelIndex];
        setLevel(updatedCurrentLetter);
    };

    const generateRandomWord = () => {
        let fiveLetterWords;
        switch (level) {
            case 'A':
                fiveLetterWords = ['apple', 'amber', 'adapt', 'alive', 'amuse', /* add more words */];
                break;
            case 'B':
                fiveLetterWords = ['beach', 'baker', 'badge', 'bloom', 'brave', /* add more words */];
                break;
            case 'C':
                fiveLetterWords = ['candy', 'champ', 'crisp', 'crown', 'curse', /* add more words */];
                break;
            // Add cases for other levels as needed
            default:
                fiveLetterWords = [];
        }
        const randomIndex = Math.floor(Math.random() * fiveLetterWords.length);
        return fiveLetterWords[randomIndex];
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

    useEffect(() => {
        // When the level changes, generate a new random word
        setRandomWord(generateRandomWord());
    }, [level]);

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
                handleGenerateWord={handleGenerateWord}
            />
            <p className='random-word-output'>Level = {level}</p>
        </div>
    );
};

export default RandomWordGenerator;
