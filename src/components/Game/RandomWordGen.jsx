import React, { useState, useEffect } from 'react';
import "../../css/randomWord.css"
import UserInput from './UserInput';

const RandomWordGenerator = () => {
    const [level, setLevel] = useState('A');
    const levelByLetters = "ABCDEFGHIJKLMNOP";
    const [currentLevelIndex, setCurrentLevelIndex] = useState(1);


    const handleStart = () => {
        resetGame()
        generateRandomWord()
    }

    const nextLevel = () => {
        setCurrentLevelIndex((prevIndex) => (prevIndex + 1) % levelByLetters.length);
        const updatedCurrentLetter = levelByLetters[currentLevelIndex];
        setLevel(updatedCurrentLetter);
    };    

    const [resetGameSignal, setResetGameSignal] = useState(false);

    const resetGame = () => {
        setLevel("A");
        setCurrentLevelIndex(1)
        setResetGameSignal(true);
    }

    const gameSignalToggle = () => {
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
        setDisplayedScrambledWord(word)
        // Convert the array back to a string
        return wordArray.join('');
    };  
    
    
    const generateRandomWord = () => {
        let fiveLetterWords;
        switch (level) {
            case 'A':
                fiveLetterWords = ['apple', 'amber', 'adapt', 'alive', 'amuse', 'acorn', 'audio', 'aloud', 'alias', 'angel'];
                break;
            case 'B':
                fiveLetterWords = ['beach', 'bento', 'badge', 'bloom', 'brave', 'brand', 'blend', 'bonus', 'blitz', 'bless'];
                break;
            case 'C':
                fiveLetterWords = ['candy', 'champ', 'crisp', 'crown', 'curse', 'charm', 'chill', 'clerk', 'crane', 'crawl'];
                break;
            case 'D':
                fiveLetterWords = ['dance', 'drown', 'dealt', 'dream', 'douse', 'diner', 'daisy', 'dwarf', 'drape', 'drain'];
                break;
            case 'E':
                fiveLetterWords = ['eager', 'elbow', 'emote', 'equal', 'error', 'entry', 'elite', 'erase', 'excel', 'essay'];
                break;
            case 'F':
                fiveLetterWords = ['fable', 'frost', 'frown', 'frame', 'flame', 'fable', 'flair', 'fleet', 'flush', 'fable'];
                break;
            case 'G':
                fiveLetterWords = ['giant', 'glide', 'grasp', 'grain', 'grind', 'globe', 'glare', 'graze', 'glint', 'gloss'];
                break;
            case 'H':
                fiveLetterWords = ['happy', 'haste', 'heart', 'heave', 'honey', 'haste', 'hatch', 'haunt', 'hover', 'humor'];
                break;
            case 'I':
                fiveLetterWords = ['image', 'input', 'ideal', 'issue', 'image', 'itchy', 'inlay', 'irate', 'ivory', 'index'];
                break;
            case 'J':
                fiveLetterWords = ['jazzy', 'jelly', 'jumbo', 'jolts', 'judge', 'jolly', 'joint', 'joust', 'jaded', 'juicy'];
                break;
            case 'K':
                fiveLetterWords = ['kayak', 'keeps', 'kiwi', 'knead', 'knock', 'knight', 'knots', 'knurl', 'kudos', 'kyrie'];
                break;
            case 'L':
                fiveLetterWords = ['labor', 'latch', 'liver', 'lemon', 'lunar', 'label', 'lucid', 'lilac', 'laser', 'limit'];
                break;
            case 'M':
                fiveLetterWords = ['mango', 'mirth', 'motel', 'moose', 'mints', 'mirth', 'modal', 'mucus', 'mango', 'magic'];
                break;
            case 'N':
                fiveLetterWords = ['noble', 'nymph', 'novel', 'nudge', 'nylon', 'noble', 'nerdy', 'niece', 'noble', 'nifty'];
                break;
            case 'O':
                fiveLetterWords = ['oasis', 'overt', 'opera', 'ounce', 'ocean', 'olive', 'onset', 'oasis', 'orbit', 'often'];
                break;
            case 'P':
                fiveLetterWords = ['plush', 'prize', 'pouch', 'piano', 'pilot', 'plush', 'proud', 'panda', 'peach', 'plume'];
                break;
            default:
                fiveLetterWords = [];
        }
        const randomIndex = Math.floor(Math.random() * fiveLetterWords.length);
        
        return fiveLetterWords[randomIndex];
    };
    
    const [randomWord, setRandomWord] = useState(generateRandomWord);
    const [displayedScrambledWord, setDisplayedScrambledWord] = useState(randomWord)
    
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

    const [scrambledFirstLetter, setScrambledFirstLetter] = useState('');
    const [scrambledSecondLetter, setScrambledSecondLetter] = useState('');
    const [scrambledThirdLetter, setScrambledThirdLetter] = useState('');
    const [scrambledFourthLetter, setScrambledFourthLetter] = useState('');
    const [scrambledFifthLetter, setScrambledFifthLetter] = useState('');

    
    useEffect(() => {
        const scrambledArray = shuffleWord(randomWord).split('');
        setScrambledFirstLetter(scrambledArray[0]);
        setScrambledSecondLetter(scrambledArray[1]);
        setScrambledThirdLetter(scrambledArray[2]);
        setScrambledFourthLetter(scrambledArray[3]);
        setScrambledFifthLetter(scrambledArray[4]);
    }, [randomWord]);    

    useEffect(() => {
        // When the level changes, generate a new random word
        setRandomWord(generateRandomWord());
    }, [level]);
    
    return (
        <div>
            <div className="display-container">
                <div className="pie-container">
                    <div className="pie-slice top">
                        <div className="pie-letter top-letter">
                            {scrambledFirstLetter}
                        </div>
                    </div>
                    <div className="pie-slice middle">
                        <div className="pie-letter middle-left">
                            {scrambledSecondLetter} 
                        </div>
                    <button className="start-btn" onClick={handleStart}>
                        <div className='start-btn-text'>
                            START
                        </div>
                    </button>
                        <div className="pie-letter middle-right">
                            {scrambledThirdLetter}
                        </div>
                        </div>
                    <div className="pie-slice bottom">
                        <div className="pie-letter bottom-left">
                            {scrambledFourthLetter} 
                        </div>
                        <div className="pie-letter bottom-right">
                            {scrambledFifthLetter}
                        </div>
                    </div>    
                </div>
                <div className="full-word">{}</div>
            </div>
            
            <UserInput
                firstLetter={firstLetter}
                secondLetter={secondLetter}
                thirdLetter={thirdLetter}
                fourthLetter={fourthLetter}
                fifthLetter={fifthLetter}
                resetGameSignal={resetGameSignal}
                level={currentLevelIndex - 1}
                gameSignalToggle={gameSignalToggle}
                resetGame={resetGame}
                nextLevel={nextLevel}
                handleGenerateWord={handleGenerateWord}
            />
            <button className='random-word-output' onClick={nextLevel}>Level = {level}</button>
            
        </div>
    );
};

export default RandomWordGenerator;
