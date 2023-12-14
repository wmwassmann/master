import React, { useState, useEffect } from 'react';
import "../../css/randomWord.css"
import UserInput from './UserInput';

const RandomWordGenerator = () => {
    const [level, setLevel] = useState('A');
    const levelByLetters = "ABCDEFGHIJ";
    const [currentLevelIndex, setCurrentLevelIndex] = useState(1);

    const nextLevel = () => {
        setCurrentLevelIndex((prevIndex) => (prevIndex + 1) % levelByLetters.length);
        const updatedCurrentLetter = levelByLetters[currentLevelIndex];
        setLevel(updatedCurrentLetter);
    };    

    const [resetGameSignal, setResetGameSignal] = useState(false);

    const resetGame = () => {
        setResetGameSignal(true);
        setLevel("A");
    }

    const timeSignalToggle = () => {
        console.log("In Randomizer " + resetGameSignal)
        setResetGameSignal(false);
    }
    
    const shuffleWord = (word) => {
        // Convert the word to an array of characters
        const wordArray = word.split('');
        
        // Shuffle the array using Fisher-Yates algorithm
        for (let i = wordArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
        }
        
        // Convert the array back to a string
        return wordArray.join('');
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
            case 'D':
                fiveLetterWords = ['dance', 'drown', 'dealt', 'dream', 'douse', /* add more words */];
                break;
            case 'E':
                fiveLetterWords = ['eager', 'elbow', 'emote', 'equal', 'error', /* add more words */];
                break;
            case 'F':
                fiveLetterWords = ['fable', 'frost', 'frown', 'frame', 'flame', /* add more words */];
                break;
            case 'G':
                fiveLetterWords = ['giant', 'glide', 'grasp', 'grain', 'grind', /* add more words */];
                break;
            case 'H':
                fiveLetterWords = ['happy', 'haste', 'heart', 'heave', 'honey', /* add more words */];
                break;
            case 'I':
                fiveLetterWords = ['image', 'invent', 'input', 'ideal', 'issue', /* add more words */];
                break;
            case 'J':
                fiveLetterWords = ['jazzy', 'jelly', 'jumbo', 'jolts', 'judge', /* add more words */];
                break;
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
        resetGame();
    };
    
    const [firstLetter, setFirstLetter] = useState('');
    const [secondLetter, setSecondLetter] = useState('');
    const [thirdLetter, setThirdLetter] = useState('');
    const [fourthLetter, setFourthLetter] = useState('');
    const [fifthLetter, setFifthLetter] = useState('');
    
    useEffect(() => {
        const charArray = shuffleWord(randomWord).split('');
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
            <div className="display-container">
                <div className="pie-container">
                    <div className="pie-slice top" style={{ '--rotation': '0deg' }}>
                        <div className="pie-letter top-letter">
                            {firstLetter}
                        </div>
                    </div>
                    <div className="pie-slice middle" style={{ '--rotation': '72deg' }}>
                        <div className="pie-letter middle-left">
                            {secondLetter} 
                        </div>
                        <div className="pie-letter middle-right">
                            {thirdLetter}
                        </div>
                        </div>
                    <div className="pie-slice bottom" style={{ '--rotation': '216deg' }}>
                        <div className="pie-letter bottom-left">
                            {fourthLetter} 
                        </div>
                        <div className="pie-letter bottom-right">
                            {fifthLetter}
                        </div>
                    </div>    
                </div>
                <div className="full-word">{randomWord}</div>
            </div>
            <button className="random-word-btn" onClick={handleGenerateWord}>Generate Word</button>
            
            <UserInput
                firstLetter={firstLetter}
                secondLetter={secondLetter}
                thirdLetter={thirdLetter}
                fourthLetter={fourthLetter}
                fifthLetter={fifthLetter}
                resetGameSignal={resetGameSignal}
                level={currentLevelIndex - 1}
                timeSignalToggle={timeSignalToggle}
                nextLevel={nextLevel}
                handleGenerateWord={handleGenerateWord}
            />
            <p className='random-word-output'>Level = {level}</p>
            
        </div>
    );
};

export default RandomWordGenerator;
