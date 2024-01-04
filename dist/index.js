import { generatePassword } from "./utils/generatePassword/index.js";
import { handlePasswordLengthCounter, displayCopyButtonAnimation, displayStrenghtValue, handleRangeInputUI, } from "./utils/displayFunctions/index.js";
import { defineStrenghtValue } from "./utils/defineStrenghtValue/index.js";
const passwordConfigForm = document.querySelector(".password-config-form");
const passwordRangeInput = document.querySelector(".password-length-input");
const passwordLengthElement = document.querySelector(".password-length");
function onPushCopyPasswordButton() {
    const copyPasswordButton = document.querySelector(".copy-password-button");
    const generatedPassword = document.querySelector(".generated-password");
    copyPasswordButton.addEventListener("click", () => {
        if (generatedPassword.classList.contains("generated") && generatedPassword.textContent) {
            navigator.clipboard.writeText(generatedPassword.textContent);
            displayCopyButtonAnimation(copyPasswordButton);
        }
        else {
            alert("Nothing to copy!");
        }
    });
}
passwordConfigForm.addEventListener("change", () => {
    const numberOfCheckedCheckboxes = passwordConfigForm.querySelectorAll("input:checked").length;
    const strenghtValue = defineStrenghtValue(numberOfCheckedCheckboxes, +passwordRangeInput.value);
    displayStrenghtValue(strenghtValue);
});
function onSubmitButton() {
    passwordConfigForm.addEventListener("submit", e => {
        e.preventDefault();
        const passwordElement = document.querySelector(".generated-password");
        const hasUppercase = document.querySelector("#uppercase").checked;
        const hasLowercase = document.querySelector("#lowercase").checked;
        const hasNumbers = document.querySelector("#numbers").checked;
        const hasSymbols = document.querySelector("#symbols").checked;
        passwordElement.textContent = generatePassword(hasUppercase, hasLowercase, hasNumbers, hasSymbols, +passwordRangeInput.value);
        passwordElement.classList.add("generated");
    });
}
function main() {
    passwordLengthElement.textContent = passwordRangeInput.value;
    handlePasswordLengthCounter(passwordRangeInput, passwordLengthElement);
    handleRangeInputUI();
    onPushCopyPasswordButton();
    onSubmitButton();
}
main();
//# sourceMappingURL=index.js.map