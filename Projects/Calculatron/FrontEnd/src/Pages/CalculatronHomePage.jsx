import React, {useState } from 'react'
import "../Styles/calcStyles.css"

const CalculatronHomePage = () => {
    const [lastEvaluatedSolved, setLastEvaluatedSolved] = useState(false);

    const returnToPortfolio =()=> {
      window.location.href = '/master/#/portfolio';
    }
    
    const clearIfLastEvaluatedSolved = (display) => {
      if (lastEvaluatedSolved) {
        display.value = '';
        setLastEvaluatedSolved(false);
      }
    };
  
    const clearInput = (display) => {
      display.value = '';
    };
  
    const addNumber = (display, number) => {
      clearIfLastEvaluatedSolved(display);
      display.value += number;
    };
  
   
    const addOperator = (display, operator) => {
      if (lastEvaluatedSolved) {
        clearIfLastEvaluatedSolved(display);
      }
      display.value += operator;
    };
  
    const evalInput = (display) => {
      setLastEvaluatedSolved(true);
      return eval(display.value);
    };
  
    
    const removeLastCharacter = (display) => {
      return display.value.toString().slice(0, -1);
    };

    return (
        <div className="calculator-container">
          <div className="calculator">
            <form className="ops-container">
              <div className="calc-title">
                Calculatron-5000
              </div>
              <div className="int-container">
                <input className="int-field" type="text" name="display" onChange={(e) => e.target.value = e.target.value.replace(/[^0-9+,.=\\$%^()*\/-]/g, '')} />
              </div>
              <div>
                <input type="button" value="AC" onClick={clearInput} />
                <input type="button" value="DL" onClick={removeLastCharacter} />
                <input type="button" value="." onClick={() => addNumber('.')} />
                <input type="button" value="/" onClick={() => addOperator('/')} />
              </div>
              <div>
                <input type="button" value="7" onClick={() => addNumber('7')} />
                <input type="button" value="8" onClick={() => addNumber('8')} />
                <input type="button" value="9" onClick={() => addNumber('9')} />
                <input type="button" value="*" onClick={() => addOperator('*')} />
              </div>
              <div>
                <input type="button" value="4" onClick={() => addNumber('4')} />
                <input type="button" value="5" onClick={() => addNumber('5')} />
                <input type="button" value="6" onClick={() => addNumber('6')} />
                <input type="button" value="-" onClick={() => addOperator('-')} />
              </div>
              <div>
                <input type="button" value="1" onClick={() => addNumber('1')} />
                <input type="button" value="2" onClick={() => addNumber('2')} />
                <input type="button" value="3" onClick={() => addNumber('3')} />
                <input type="button" value="+" onClick={() => addOperator('+')} />
              </div>
              <div>
                <input type="button" value="00" onClick={() => addNumber('00')} />
                <input type="button" value="0" onClick={() => addNumber('0')} />
                <input className="equal-button" type="button" value="=" onClick={evalInput} />
              </div>
            </form>
          </div>
          <div className="return-button">
            <button onClick={returnToPortfolio}>
              Return to Portfolio
            </button>
          </div>
        </div>
      );
    }
    
    export default CalculatronHomePage;