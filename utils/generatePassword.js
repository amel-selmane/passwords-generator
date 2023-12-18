export const generatePassword = () => {
	const generatedPassword = document.querySelector(".generated-password");

	const hasUppercase = document.querySelector("#uppercase").checked,
		hasLowercase = document.querySelector("#lowercase").checked,
		hasNumbers = document.querySelector("#numbers").checked,
		hasSymbols = document.querySelector("#symbols").checked;

	const uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
	const lowercaseABC = "abcdefghijklmnopqrstuvwxyz";
	const specialSymbols = "!@#$%^&*()+_-=}{[]|:;\"/?.><,`~";
	const numeric = "0123456789";

    

    let password = "";

};
