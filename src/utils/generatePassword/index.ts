export function generatePassword(
	hasUppercase: boolean,
	hasLowercase: boolean,
	hasNumbers: boolean,
	hasSymbols: boolean,
	passwordLength: number,
): string {
	const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
	const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
	const numericChars = "0123456789";
	const symbolChars = '!@#$%^&*()+_-=}{[]|:;"/?.><,`~';

	const characters =
		(hasUppercase ? uppercaseChars : "") +
		(hasLowercase ? lowercaseChars : "") +
		(hasNumbers ? numericChars : "") +
		(hasSymbols ? symbolChars : "");

	let password = "";

	// To get at least one character when any of the checkboxes are selected
	for (let i = 0; i <= passwordLength - 1; i++) {
		const randomNumber = Math.floor(Math.random() * characters.length);
		const randomUppercaseChars = Math.floor(Math.random() * uppercaseChars.length);
		const randomLowercaseChars = Math.floor(Math.random() * lowercaseChars.length);
		const randomNumericChars = Math.floor(Math.random() * numericChars.length);
		const randomSymbolChars = Math.floor(Math.random() * symbolChars.length);

		if (i === 0) {
			if (hasUppercase && password.length < passwordLength) {
				const ramdomIndex = Math.floor(Math.random() * password.length);
				const passwordArray = password.split("");
				passwordArray.splice(
					ramdomIndex,
					0,
					uppercaseChars.substring(randomUppercaseChars, randomUppercaseChars + 1),
				);
				password = passwordArray.join("");
			}

			if (hasLowercase && password.length < passwordLength) {
				const ramdomIndex = Math.floor(Math.random() * password.length);
				const passwordArray = password.split("");
				passwordArray.splice(
					ramdomIndex,
					0,
					lowercaseChars.substring(randomLowercaseChars, randomLowercaseChars + 1),
				);
				password = passwordArray.join("");
			}

			if (hasNumbers && password.length < passwordLength) {
				const ramdomIndex = Math.floor(Math.random() * password.length);
				const passwordArray = password.split("");
				passwordArray.splice(
					ramdomIndex,
					0,
					numericChars.substring(randomNumericChars, randomNumericChars + 1),
				);
				password = passwordArray.join("");
			}

			if (hasSymbols && password.length < passwordLength) {
				const ramdomIndex = Math.floor(Math.random() * password.length);
				const passwordArray = password.split("");
				passwordArray.splice(ramdomIndex, 0, symbolChars.substring(randomSymbolChars, randomSymbolChars + 1));
				password = passwordArray.join("");
			}
		}

		if (password.length !== passwordLength) {
			password += characters.substring(randomNumber, randomNumber + 1);
		}
	}

	return password;
}
