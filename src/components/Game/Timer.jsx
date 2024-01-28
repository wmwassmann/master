import React, { useState, useEffect } from 'react';
import "../../css/ComponentStyles/Game/Timer.css"

 
const Timer = (props) => {
    const { resetGameSignal, resetGame, resetTimer, gameSignalToggle } = props;

    const [timer, setTimer] = useState(0);


    useEffect(() => {
      let intervalId;
  
      const decrementTimer = () => {
        if (timer > 0) {
          setTimer((prevTimer) => prevTimer - 1);
        } else {
          clearInterval(intervalId);
        }

        if (timer === 0) {
          resetGame();
          gameSignalToggle();
        }
      };
  
      intervalId = setInterval(decrementTimer, 1000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, [timer]);
  
    useEffect(() => {
      if (resetTimer || resetGameSignal === true) {
        setTimer(10);        
      }
    }, [resetTimer, resetGameSignal]);
  
    return (
      <div>
        <p className='timer-counter'>{timer === 0 ? 'GAME OVER (In progress)' : `Timer: ${timer}s`}</p>
      </div>
    );
  };
  
  export default Timer;