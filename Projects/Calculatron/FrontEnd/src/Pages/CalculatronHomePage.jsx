import React, { useState } from 'react';
import "../Styles/calcStyles.css";

const CalculatronHomePage = () => {
    const [displayValue, setDisplayValue] = useState('');

    const returnToPortfolio = () => {
        window.location.href = '/master/#/portfolio';
    };

    const clearInput = () => {
        setDisplayValue('');
    };

    const addNumber = (number) => {
        setDisplayValue(prevValue => prevValue + number);
    };

    const addOperator = (operator) => {
        setDisplayValue(prevValue => prevValue + operator);
    };

    const evalInput = () => {
        try {
            const result = eval(displayValue);
            setDisplayValue(result.toString());
        } catch (error) {
            setDisplayValue('Error');
        }
    };

    const removeLastCharacter = () => {
        setDisplayValue(prevValue => prevValue.slice(0, -1));
    };

    return (
        <div className="calculator-container">
            <div className="calculator">
                <form className="ops-container">
                    <div className="calc-title">
                        Calculatron-5000
                    </div>
                    <div className="int-container">
                        <input
                            className="int-field"
                            type="text"
                            name="display"
                            value={displayValue}
                            readOnly
                        />
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
};

export default CalculatronHomePage;
