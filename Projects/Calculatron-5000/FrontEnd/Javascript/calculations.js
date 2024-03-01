

// Starts as an open input
let lastEvaluatedSolved = false;

function clearIflastEvaluatedSolved(display) {
    if (lastEvaluatedSolved) {
        display.value = ''; 
        lastEvaluatedSolved = false; 
    }
}

function clearInput(display) {
    display.value = '';
}

function addNumber(display, number) {
    clearIflastEvaluatedSolved(display); 
    display.value += number; 
}


function addOperator(display, operator) {
    // clearIflastEvaluatedSolved(display); 

    if (lastEvaluatedSolved === true) {
        clearIflastEvaluatedSolved(display);
    }
    display.value += operator; 
}


// Evaluation
function evalInput(display) {
    lastEvaluatedSolved = true;
    return eval(display.value);
}

// Zeroes out the input
function removeLastCharacter(display) {
    return display.value.toString().slice(0, -1);
}