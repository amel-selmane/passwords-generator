import { generatePassword } from "./utils/generatePassword/index.js";
import {
	handlePasswordLengthCounter,
	displayCopyButtonAnimation,	displayStrenghtValue,
	handleRangeInputUI,
} from "./utils/displayFunctions.js";

import {
	defineStrenghtValue
} from "./utils/defineStrengthValue.js"

const passwordConfigForm: HTMLFormElement = document.querySelector(".password-config-form")!;
const passwordRangeInput: HTMLInputElement = document.querySelector(".password-length-input")!;
const passwordLengthElement: HTMLElement = document.querySelector(".password-length")!;

function onPushCopyPasswordButton() {
	const copyPasswordButton: HTMLButtonElement = document.querySelector(".copy-password-button")!;
	const generatedPassword: HTMLElement = document.querySelector(".generated-password")!;

	copyPasswordButton.addEventListener("click", () => {
		if (generatedPassword.classList.contains("generated") && generatedPassword.textContent) {
			navigator.clipboard.writeText(generatedPassword.textContent);
			displayCopyButtonAnimation(copyPasswordButton);
		} else {
			alert("Nothing to copy!");
		}
	});
}

passwordConfigForm!.addEventListener("change", () => {
	const numberOfCheckedCheckboxes = passwordConfigForm.querySelectorAll("input:checked").length;

	const strenghtValue = defineStrenghtValue(numberOfCheckedCheckboxes, passwordRangeInput);
	displayStrenghtValue(strenghtValue);
});

function onSubmitButton() {
	passwordConfigForm.addEventListener("submit", e => {
		e.preventDefault();

		const passwordElement: HTMLElement = document.querySelector(".generated-password")!;
		const hasUppercase = (<HTMLInputElement>document.querySelector("#uppercase")).checked;
		const hasLowercase = (<HTMLInputElement>document.querySelector("#lowercase")).checked;
		const hasNumbers = (<HTMLInputElement>document.querySelector("#numbers")).checked;
		const hasSymbols = (<HTMLInputElement>document.querySelector("#symbols")).checked;

		passwordElement.textContent = generatePassword(
			hasUppercase,
			hasLowercase,
			hasNumbers,
			hasSymbols,
			+passwordRangeInput.value,
		);
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
