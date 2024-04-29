let display = document.getElementById('display');
let input = '';

function appendToDisplay(value) {
    input += value;
    display.textContent = input;
}

function clearDisplay() {
    input = '';
    display.textContent = '';
}

function backspace() {
    input = input.slice(0, -1);
    display.textContent = input;
}

function calculateResult() {
    try {
        input = eval(input).toString();
        display.textContent = input;
    } catch (error) {
        display.textContent = 'Error';
    }
}
