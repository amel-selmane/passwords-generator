import { generatePassword } from "./utils/generatePassword.js";

const passwordElement = document.querySelector('.password-container p');
const copyPasswordButtonElement = document.querySelector('.password-container button');
const configFormElement = document.querySelector('form.config-container');
const inputRangeElement = document.querySelector('input[type="range"]#passwordLength');
const lengthValueElement = document.querySelector('.length-value');

window.onload = () => {
    lengthValueElement.textContent = inputRangeElement.value;
};

inputRangeElement.addEventListener('input', e => {
    lengthValueElement.textContent = e.target.value;
});

configFormElement.addEventListener('submit', e => {
    e.preventDefault();
    
    generatePassword(passwordElement);
});

let timeout;

copyPasswordButtonElement.addEventListener('click', () => {
    copyPasswordButtonElement.classList.add('copied');
    
    // Clear timeout (if the client click multiple times)
    clearTimeout(timeout);

    // Assign timeout in the timeout variable
    timeout = setTimeout(() => copyPasswordButtonElement.classList.remove('copied'), 3000);
});