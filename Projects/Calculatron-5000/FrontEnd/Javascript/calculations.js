

// Starts as an open input
let lastEvaluated = false;

function clearIfLastEvaluated(display) {
    if (lastEvaluated) {
        display.value = ''; 
        lastEvaluated = false; 
    }
}

function addNumber(display, number) {
    clearIfLastEvaluated(display); 
    display.value += number; 
}


function addOperator(display, operator) {
    clearIfLastEvaluated(display); 
    display.value += operator; 
}


// Evaluation
function evalInput(display) {
    lastEvaluated = true;
    return eval(display.value);
}

// Zeroes out the input
function removeLastCharacter(display) {
    return display.value.toString().slice(0, -1);
}