import React, { useState, useEffect } from 'react';
import "../../css/randomWord.css"

const LevelHandler = (props) => {
    const updateLevel =  props.updateLevel
    console.log("Are we " + updateLevel)

    const [updatedLevel, setUpdateLevel] = useState(updateLevel);

    const wordsByLetter = {
        A: ['apple', 'amber', 'adapt', 'alive', 'amuse', /* add more words */],
        B: ['beach', 'baker', 'badge', 'bloom', 'brave', /* add more words */],
        C: ['candy', 'champ', 'crisp', 'crown', 'curse', /* add more words */],
        D: ['dance', 'drown', 'dealt', 'dream', 'douse', /* add more words */],
        E: ['eager', 'elbow', 'emote', 'equal', 'error', /* add more words */],
        F: ['fable', 'frost', 'frown', 'frame', 'flame', /* add more words */],
    };

    const levelByLetters = "ABCDEF";
    const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
    const currentLetter = levelByLetters[currentLevelIndex];
    const currentWordList = wordsByLetter[currentLetter] || [];

    console.log("This is " + updateLevel)
    const handleNextLevel = () => {
        // Increment the level index, and loop back to the beginning if needed
        setCurrentLevelIndex((prevIndex) => (prevIndex + 1) % levelByLetters.length);

        // Update the state to prevent calling handleNextLevel again
        setUpdateLevel(false);
    };

    useEffect(() => {
        if (updateLevel === true) {
            handleNextLevel();
            console.log("TRUE");
        }
    }, [updateLevel]);

    return (
        <div>
            <h2 className='tag'>Current Level: {currentLetter}</h2>
            <button className='tag' onClick={handleNextLevel}>Next Level</button>

            <div>
            {currentWordList.map((word, index) => (
                <div className='tag' key={index}>{word}</div>
            ))}
            </div>
    </div>
    );
};

export default LevelHandler;

// import React, { useState } from 'react';
// import "../../css/randomWord.css"

// const LevelHandler = (props) => {

//     let updateLevel = props.updateLevel;

//     const wordsByLetter = {
//       A: ['apple', 'amber', 'adapt', 'alive', 'amuse', /* add more words */],
//       B: ['beach', 'baker', 'badge', 'bloom', 'brave', /* add more words */],
//       C: ['candy', 'champ', 'crisp', 'crown', 'curse', /* add more words */],
//       D: ['dance', 'drown', 'dealt', 'dream', 'douse', /* add more words */],
//       E: ['eager', 'elbow', 'emote', 'equal', 'error', /* add more words */],
//       F: ['fable', 'frost', 'frown', 'frame', 'flame', /* add more words */],
//     };
  
//     const levelByLetters = "ABCDEF";
    
//     const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  
//     const currentLetter = levelByLetters[currentLevelIndex];
//     const currentWordList = wordsByLetter[currentLetter] || [];
    
//       const handleNextLevel = () => {
//         // Increment the level index, and loop back to the beginning if needed
//         setCurrentLevelIndex((prevIndex) => (prevIndex + 1) % levelByLetters.length);

//         updateLevel = false;
//       };
//       console.log("this is " + updateLevel)
//     if (updateLevel === true) {
//         handleNextLevel();
//         console.log("TRUE");
//     }
  
//     return (
//       <div>
//         <h2 className='tag'>Current Level: {currentLetter}</h2>
//         <button className='tag' onClick={handleNextLevel}>Next Level</button>

//         <div>
//             {currentWordList.map((word, index) => (
//             <div className='tag' key={index}>{word}</div>
//             ))}
//       </div>
//       </div>
//     );
//   };
  
//   export default LevelHandler;


// import React from 'react';

// const LevelHandler = (props) => {
//   // Create an object to hold arrays of five-letter words for each letter

//   const currentLevel = props.currentLevel


//   const wordsByLetter = {
//     A: ['apple', 'amber', 'adapt', 'alive', 'amuse', /* add more words */],
//     B: ['beach', 'baker', 'badge', 'bloom', 'brave', /* add more words */],
//     C: ['candy', 'champ', 'crisp', 'crown', 'curse', /* add more words */],
//     D: ['dance', 'drown', 'dealt', 'dream', 'douse', /* add more words */],
//     E: ['eager', 'elbow', 'emote', 'equal', 'error', /* add more words */],
//     F: ['fable', 'frost', 'frown', 'frame', 'flame', /* add more words */],
//   };

//   // Retrieve the array of five-letter words based on the current letter
//   const currentWordList = wordsByLetter[currentLetter] || [];

//   return (
//     <div>
//       <h2>Words for Letter {currentLetter}</h2>
//       <ul>
//         {currentWordList.map((word) => (
//           <li key={word}>{word}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default LevelHandler;