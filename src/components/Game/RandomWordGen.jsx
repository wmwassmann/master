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
                fiveLetterWords = ['APPLE', 'AMBER', 'ADAPT', 'ALIVE', 'AMUSE', 'ACORN', 'AUDIO', 'ALOUD', 'ALIAS', 'ANGEL'];
                break;
            case 'B':
                fiveLetterWords = ['BEACH', 'BENTO', 'BADGE', 'BLOOM', 'BRAVE', 'BRAND', 'BLEND', 'BONUS', 'BLITZ', 'BLESS'];
                break;
            case 'C':
                fiveLetterWords = ['CANDY', 'CHAMP', 'CRISP', 'CROWN', 'CURSE', 'CHARM', 'CHILL', 'CLERK', 'CRANE', 'CRAWL'];
                break;
            case 'D':
                fiveLetterWords = ['DANCE', 'DROWN', 'DEALT', 'DREAM', 'DOUSE', 'DINER', 'DAISY', 'DWARF', 'DRAPE', 'DRAIN'];
                break;
            case 'E':
                fiveLetterWords = ['EAGER', 'ELBOW', 'EMOTE', 'EQUAL', 'ERROR', 'ENTRY', 'ELITE', 'ERASE', 'EXCEL', 'ESSAY'];
                break;
            case 'F':
                fiveLetterWords = ['FABLE', 'FROST', 'FROWN', 'FRAME', 'FLAME', 'FABLE', 'FLAIR', 'FLEET', 'FLUSH', 'FABLE'];
                break;
            case 'G':
                fiveLetterWords = ['GIANT', 'GLIDE', 'GRASP', 'GRAIN', 'GRIND', 'GLOBE', 'GLARE', 'GRAZE', 'GLINT', 'GLOSS'];
                break;
            case 'H':
                fiveLetterWords = ['HAPPY', 'HASTE', 'HEART', 'HEAVE', 'HONEY', 'HASTE', 'HATCH', 'HAUNT', 'HOVER', 'HUMOR'];
                break;
            case 'I':
                fiveLetterWords = ['IMAGE', 'INPUT', 'IDEAL', 'ISSUE', 'IMAGE', 'ITCHY', 'INLAY', 'IRATE', 'IVORY', 'INDEX'];
                break;
            case 'J':
                fiveLetterWords = ['JAZZY', 'JELLY', 'JUMBO', 'JOLTS', 'JUDGE', 'JOLLY', 'JOINT', 'JOUST', 'JADED', 'JUICY'];
                break;
            case 'K':
                fiveLetterWords = ['KAYAK', 'KEEPS', 'KIWI', 'KNEAD', 'KNOCK', 'KNIGHT', 'KNOTS', 'KNURL', 'KUDOS', 'KYRIE'];
                break;
            case 'L':
                fiveLetterWords = ['LABOR', 'LATCH', 'LIVER', 'LEMON', 'LUNAR', 'LABEL', 'LUCID', 'LILAC', 'LASER', 'LIMIT'];
                break;
            case 'M':
                fiveLetterWords = ['MANGO', 'MIRTH', 'MOTEL', 'MOOSE', 'MINTS', 'MIRTH', 'MODAL', 'MUCUS', 'MANGO', 'MAGIC'];
                break;
            case 'N':
                fiveLetterWords = ['NOBLE', 'NYMPH', 'NOVEL', 'NUDGE', 'NYLON', 'NOBLE', 'NERDY', 'NIECE', 'NOBLE', 'NIFTY'];
                break;
            case 'O':
                fiveLetterWords = ['OASIS', 'OVERT', 'OPERA', 'OUNCE', 'OCEAN', 'OLIVE', 'ONSET', 'OASIS', 'ORBIT', 'OFTEN'];
                break;
            case 'P':
                fiveLetterWords = ['PLUSH', 'PRIZE', 'POUCH', 'PIANO', 'PILOT', 'PLUSH', 'PROUD', 'PANDA', 'PEACH', 'PLUME'];
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
