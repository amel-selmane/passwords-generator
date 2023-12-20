let passwordCopyTextTimeout: ReturnType<typeof setTimeout>;
export function displayCopyButtonAnimation(button: HTMLElement) {
	button.classList.add("copied");

	// Clear timeout (if the client click multiple times)
	clearTimeout(passwordCopyTextTimeout);

	// Store timeout in the passwordCopyTextTimeout variable and remove it after 3s
	passwordCopyTextTimeout = setTimeout(() => button.classList.remove("copied"), 3000);
}

export function handlePasswordLengthCounter(passwordRangeInput: HTMLInputElement, passwordLength: HTMLElement): void {
	passwordLength!.textContent = passwordRangeInput.value;
	passwordRangeInput.addEventListener("input", e => {
		const target = e.target as HTMLInputElement;
		passwordLength.textContent = target.value;
	});
}

export function handleRangeInputUI(): void {
	const passwordRange: HTMLElement = document.querySelector(".password-length-range")!,
		passwordRangeValue: HTMLElement = document.querySelector(".password-length-range-value")!,
		passwordRangeThumb: HTMLElement = document.querySelector(".password-length-range-thumb")!;

	passwordRange.addEventListener("input", e => {
		const target = e.target as HTMLInputElement;
		const thumbPosition = +target.value / +target.max;
		const spacing = target.offsetWidth - passwordRangeThumb!.offsetWidth;

		passwordRangeThumb.style.left = `${thumbPosition * spacing + 1}px`;
		passwordRangeValue.style.width = `${thumbPosition * 100}%`;
	});
}

export function defineStrenghtValue(numberOfCheckedCheckboxes: number, passwordRangeInput: HTMLInputElement): [string, number] {
	if (numberOfCheckedCheckboxes === 0 || +passwordRangeInput.value === 0) {
		return ["", 0];
	} else if (numberOfCheckedCheckboxes === 2 && +passwordRangeInput.value >= 6) {
		return ["Weak", 2];
	} else if (numberOfCheckedCheckboxes === 3 && +passwordRangeInput.value >= 6) {
		return ["Medium", 3];
	} else if (numberOfCheckedCheckboxes === 4 && +passwordRangeInput.value >= 6) {
		return ["Strong", 4];
	} else {
		return ["Too weak!", 1];
	}

	/* Ternary version but it's more difficult to read and maintain */
	// return (numberOfCheckedCheckboxes === 0 || +passwordRangeInput.value === 0) ? ["", 0]
	// 	: (numberOfCheckedCheckboxes === 2 && +passwordRangeInput.value >= 6) ? ["Weak", 2]
	// 	: (numberOfCheckedCheckboxes === 3 && +passwordRangeInput.value >= 6) ? ["Medium", 3]
	// 	: (numberOfCheckedCheckboxes === 4 && +passwordRangeInput.value >= 6) ? ["Strong", 4]
	// 	: ["Too weak!", 1];

	/* Switch Case version doesn't works with 2 switch expressions ? */
	// switch(numberOfCheckedCheckboxes | +passwordRangeInput.value) {
	// 	case (0 | 0):
	// 		displayStrenghtIndicator("", 0);
	// 		break;
	// 	case (1 ):
	// 		displayStrenghtIndicator("Too weak!", 1);
	// 		break;
	// 	case (numberOfCheckedCheckboxes === 2 && +passwordRangeInput.value >= 6):
	// 		displayStrenghtIndicator("Weak", 2);
	// 		break;
	// 	case (numberOfCheckedCheckboxes === 3 && +passwordRangeInput.value >= 6):
	// 		displayStrenghtIndicator("Medium", 3);
	// 		break;
	// 	case (numberOfCheckedCheckboxes === 4 && +passwordRangeInput.value >= 6):
	// 		displayStrenghtIndicator("Strong", 4);
	// 		break;
	// 	default:
	// 		displayStrenghtIndicator("Too weak!", 1);
	// }
}

export function displayStrenghtValue([indicatorText, strenghtValue]: [string, number]): void {
	const strenghtValueText = document.querySelector(".strenght-value-text")!;
	const strenghtIndicators = [...document.querySelectorAll(".strenght-indicators span")];
	const indicatorColorClasses = ["weak-red", "weak-orange", "medium-yellow", "neon-green"];

	strenghtIndicators.forEach(indicator =>
		indicator.classList.remove("weak-red", "weak-orange", "medium-yellow", "neon-green", "alight"),
	);

	strenghtIndicators.slice(0, strenghtValue).forEach(indicator => {
		indicator.classList.add(indicatorColorClasses[strenghtValue - 1], "alight");
	});

	strenghtValueText.textContent = indicatorText;
}