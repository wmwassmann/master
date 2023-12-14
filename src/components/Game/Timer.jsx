import React, { useState, useEffect } from 'react';
import "../../css/Timer.css"

 
const Timer = (props) => {
    const [timer, setTimer] = useState(0);
    const { resetGameSignal, resetTime, timeSignalToggle } = props;
  
    useEffect(() => {
      let intervalId;
  
      const decrementTimer = () => {
        // Check if the timer is already at zero
        if (timer > 0) {
          setTimer((prevTimer) => prevTimer - 1);
        } else {
          clearInterval(intervalId); // Stop the timer if already at zero
        }

        if (timer === 0) {
          timeSignalToggle();
        }
      };
  
      intervalId = setInterval(decrementTimer, 1000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, [timer]);
  
    useEffect(() => {
      // Reset the timer when the resetTimerProp becomes true
      if (resetTime || resetGameSignal === true) {
        setTimer(10);        
      }
    }, [resetTime, resetGameSignal]);
  
    return (
      <div>
        <p className='timer-counter'>{timer === 0 ? 'GAME OVER' : `Timer: ${timer}s`}</p>
        {/* Additional UI or functionality of your component */}
      </div>
    );
  };
  
  export default Timer;