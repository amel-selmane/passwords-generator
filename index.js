import { generatePassword } from "./utils/generatePassword.js";
import {
	handlePasswordLengthCounter,
	displayCopyTextAnimation,
	handleStrenghtValue,
    handleRangeInputUI
} from "./utils/displayFunctions.js";

const passwordConfigForm = document.querySelector(".password-config-form");
const passwordRangeInput = document.querySelector(".password-length-input");
const passwordLength = document.querySelector(".password-length");

window.onload = () => {
	passwordLength.textContent = passwordRangeInput.value;

	(function main() {
		handlePasswordLengthCounter(passwordRangeInput, passwordLength);
        handleRangeInputUI();
		handleCopyPasswordButton();
		handleSubmitButton();
	})();
};

const handleCopyPasswordButton = () => {
	const copyPasswordButton = document.querySelector(".copy-password-button"),
		generatedPassword = document.querySelector(".generated-password");

	copyPasswordButton.addEventListener("click", () => {
		if (generatedPassword.classList.contains("generated")) {
			navigator.clipboard.writeText(generatedPassword.textContent);
			displayCopyTextAnimation(copyPasswordButton);
		} else {
			alert("Nothing to copy!");
		}
	});
};

const handleSubmitButton = () => {
	passwordConfigForm.addEventListener("submit", e => {
		e.preventDefault();

		handleStrenghtValue();
		generatePassword();
	});
};
