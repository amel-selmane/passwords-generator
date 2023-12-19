let passwordCopyTextTimeout;
export const displayCopyTextAnimation = button => {
	button.classList.add("copied");

	// Clear timeout (if the client click multiple times)
	clearTimeout(passwordCopyTextTimeout);

	// Store timeout in the passwordCopyTextTimeout variable and remove it after 3s
	passwordCopyTextTimeout = setTimeout(() => button.classList.remove("copied"), 3000);
};

/**
 * Updates the password length counter and adds an event listener to the password range input.
 *
 * @param {HTMLElement} passwordRangeInput - The password range input element.
 * @param {HTMLElement} passwordLength - The password length element.
 *
 * @return {void}
 */
export const handlePasswordLengthCounter = (passwordRangeInput, passwordLength) => {
	passwordLength.textContent = passwordRangeInput.value;
	passwordRangeInput.addEventListener("input", e => (passwordLength.textContent = e.target.value));
};

/**
 * To get the green line on range input UI
 *
 * @return {void}
 */
export const handleRangeInputUI = () => {
	const passwordRange = document.querySelector(".password-length-range"),
		passwordRangeValue = document.querySelector(".password-length-range-value"),
		passwordRangeThumb = document.querySelector(".password-length-range-thumb");

	passwordRange.addEventListener("input", e => {
		let thumbPosition = e.target.value / e.target.max;
		const spacing = e.target.offsetWidth - passwordRangeThumb.offsetWidth;

		passwordRangeThumb.style.left = `${thumbPosition * spacing + 1}px`;
		passwordRangeValue.style.width = `${thumbPosition * 100}%`;
	});
};

const displayStrenghtIndicator = (indicatorText, strenghtValue) => {
	const strenghtValueText = document.querySelector(".strenght-value-text"),
		strenghtIndicators = [...document.querySelectorAll(".strenght-indicators span")],
		indicatorColorClasses = ["weak-red", "weak-orange", "medium-yellow", "neon-green"];

	// Reset the strenght indicators
	strenghtIndicators.forEach(indicator =>
		indicator.classList.remove("weak-red", "weak-orange", "medium-yellow", "neon-green", "alight"),
	);

	// Add a classes on each indicator following the strenght value
	strenghtIndicators.slice(0, strenghtValue).forEach(indicator => {
		indicator.classList.add(indicatorColorClasses[strenghtValue - 1], "alight");
	});

	// Display the strenght value text
	strenghtValueText.textContent = indicatorText;
};

/**
 * Defines the strength value of the password and updates the UI accordingly.
 *
 * @return {void}
 */
export const handleStrenghtValue = () => {
	const numberOfCheckedCheckboxes = document.querySelectorAll(".checkbox-option:checked").length,
		passwordRangeInput = document.querySelector(".password-length-input");

	// Update the UI based on strenght value
	if (numberOfCheckedCheckboxes === 0 || +passwordRangeInput.value === 0) {
		displayStrenghtIndicator("", 0);
	} else if (numberOfCheckedCheckboxes === 1) {
		displayStrenghtIndicator("Too weak!", 1);
	} else if (numberOfCheckedCheckboxes === 2 && +passwordRangeInput.value >= 6) {
		displayStrenghtIndicator("Weak", 2);
	} else if (numberOfCheckedCheckboxes === 3 && +passwordRangeInput.value >= 6) {
		displayStrenghtIndicator("Medium", 3);
	} else if (numberOfCheckedCheckboxes === 4 && +passwordRangeInput.value >= 6) {
		displayStrenghtIndicator("Strong", 4);
	} else {
		displayStrenghtIndicator("Too weak!", 1);
	}
};
