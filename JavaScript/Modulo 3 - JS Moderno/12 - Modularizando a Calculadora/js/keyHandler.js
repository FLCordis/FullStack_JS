import calculate from "./calculate.js";

const input = document.querySelector("#input")

export function handleButtonPress(ev) {
    const value = ev.currentTarget.dataset.value;
    input.value += value;
}

export function handleClearButton() {
    input.value = '';
    input.focus();
}

export function handleTyping(e) {
    e.preventDefault();
    const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];
    if (allowedKeys.includes(e.key)){
        input.value += e.key
        return;
    }
    if (e.key === 'Backspace'){
        input.value = input.value.slice(0, -1);
    }
    if (e.key === 'Enter'){
        calculate();
    }
}