import { generatePassword } from "./utils/generatePassword.js";
import {
	handlePasswordLengthCounter,
	displayCopyTextAnimation,
	handleStrenghtValue,
	handleRangeInputUI,
} from "./utils/displayFunctions.js";

const passwordConfigForm = document.querySelector(".password-config-form");
const passwordRangeInput = document.querySelector(".password-length-input");
const passwordLength = document.querySelector(".password-length");

window.onload = () => {
	passwordLength.textContent = passwordRangeInput.value;

	(function main() {
		handlePasswordLengthCounter(passwordRangeInput, passwordLength);
		handleRangeInputUI();
		onCopyPasswordButton();
		onSubmitButton();
	})();
};

const onCopyPasswordButton = () => {
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

passwordConfigForm.addEventListener("change", () => handleStrenghtValue());

const onSubmitButton = () => {
	passwordConfigForm.addEventListener("submit", e => {
		e.preventDefault();
		generatePassword();
	});
};
