import React, { useState, useEffect } from 'react';
import '../Styles/readOut.css';

const WordReadOut = (props) => {
  const { firstLetter, secondLetter, thirdLetter, fourthLetter, fifthLetter } = props;

  const letters = [firstLetter, secondLetter, thirdLetter, fourthLetter, fifthLetter];

  // State to store the highlighted status of each letter
  const [highlightedLetters, setHighlightedLetters] = useState(Array(letters.length).fill(false));

  // Update the highlighted status when a key is pressed
  const handleKeyPress = (event) => {
    const pressedKey = event.key.toLowerCase();
    const updatedHighlights = letters.map((letter) => letter.toLowerCase() === pressedKey);
    setHighlightedLetters(updatedHighlights);
  };

  // Attach and detach event listener when the component mounts/unmounts
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  // Render the component
  const spelledWord = letters.map((letter, index) => (
    <p key={index} className={highlightedLetters[index] ? 'highlighted-letter' : ''}>
      {letter}
    </p>
  ));

  return <div className="word-container">{spelledWord}</div>;
};

export default WordReadOut;