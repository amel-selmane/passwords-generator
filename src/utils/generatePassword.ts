export function generatePassword(
	hasUppercase: boolean, 
	hasLowercase: boolean, 
	hasNumbers: boolean, 
	hasSymbols: boolean, 
	passwordLength: number
) {
	const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
	const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
	const symbolChars = '!@#$%^&*()+_-=}{[]|:;"/?.><,`~';
	const numericChars = "0123456789";

	const characters =
		(hasUppercase ? uppercaseChars : "") +
		(hasLowercase ? lowercaseChars : "") +
		(hasNumbers ? numericChars : "") +
		(hasSymbols ? symbolChars : "");

	let password = "";

	for (let i = 0; i <= passwordLength - 1; i++) {
		const randomNumber = Math.floor(Math.random() * characters.length);
		password += characters.substring(randomNumber, randomNumber + 1);
	}

	return password;
}
