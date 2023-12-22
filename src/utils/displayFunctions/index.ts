let passwordCopyTextTimeout: ReturnType<typeof setTimeout>;
export function displayCopyButtonAnimation(button: HTMLElement): void {
	button.classList.add("copied");

	// Clear timeout (if the client click multiple times)
	clearTimeout(passwordCopyTextTimeout);

	// Store timeout in the passwordCopyTextTimeout variable and remove it after 3s
	passwordCopyTextTimeout = setTimeout(() => button.classList.remove("copied"), 3000);
}

export function handlePasswordLengthCounter(passwordRangeInput: HTMLInputElement, passwordLength: HTMLElement): void {
	passwordLength.textContent = passwordRangeInput.value;

	passwordRangeInput.addEventListener("input", (e) => {
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
		const spacing = target.offsetWidth - passwordRangeThumb.offsetWidth;

		passwordRangeThumb.style.left = `${thumbPosition * spacing + 1}px`;
		passwordRangeValue.style.width = `${thumbPosition * 100}%`;
	});
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