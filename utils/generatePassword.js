export const generatePassword = () => {
	const generatedPassword = document.querySelector(".generated-password");
	const passwordLength = document.querySelector(".password-length-input").value;

	const hasUppercase = document.querySelector("#uppercase").checked,
		hasLowercase = document.querySelector("#lowercase").checked,
		hasNumbers = document.querySelector("#numbers").checked,
		hasSymbols = document.querySelector("#symbols").checked;

	const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXZ",
		lowercaseChars = "abcdefghijklmnopqrstuvwxyz",
		symbolChars = '!@#$%^&*()+_-=}{[]|:;"/?.><,`~',
		numericChars = "0123456789";

	const characters =
		(hasUppercase ? uppercaseChars : "") +
		(hasLowercase ? lowercaseChars : "") +
		(hasNumbers ? numericChars : "") +
		(hasSymbols ? symbolChars : "");

	let password = "";

	for (let i = 0; i <= passwordLength - 1; i++) {
		let randomNumber = Math.floor(Math.random() * characters.length);
		password += characters.substring(randomNumber, randomNumber + 1);
	}

	generatedPassword.textContent = password;
	generatedPassword.classList.add('generated');
};
