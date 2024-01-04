let passwordCopyTextTimeout;
export function displayCopyButtonAnimation(button) {
    button.classList.add("copied");
    clearTimeout(passwordCopyTextTimeout);
    passwordCopyTextTimeout = setTimeout(() => button.classList.remove("copied"), 3000);
}
export function handlePasswordLengthCounter(passwordRangeInput, passwordLength) {
    passwordLength.textContent = passwordRangeInput.value;
    passwordRangeInput.addEventListener("input", (e) => {
        const target = e.target;
        passwordLength.textContent = target.value;
    });
}
export function handleRangeInputUI() {
    const passwordRange = document.querySelector(".password-length-range"), passwordRangeValue = document.querySelector(".password-length-range-value"), passwordRangeThumb = document.querySelector(".password-length-range-thumb");
    passwordRange.addEventListener("input", e => {
        const target = e.target;
        const thumbPosition = +target.value / +target.max;
        const spacing = target.offsetWidth - passwordRangeThumb.offsetWidth;
        passwordRangeThumb.style.left = `${thumbPosition * spacing + 1}px`;
        passwordRangeValue.style.width = `${thumbPosition * 100}%`;
    });
}
export function displayStrenghtValue([indicatorText, strenghtValue]) {
    const strenghtValueText = document.querySelector(".strenght-value-text");
    const strenghtIndicators = [...document.querySelectorAll(".strenght-indicators span")];
    const indicatorColorClasses = ["weak-red", "weak-orange", "medium-yellow", "neon-green"];
    strenghtIndicators.forEach(indicator => indicator.classList.remove("weak-red", "weak-orange", "medium-yellow", "neon-green", "alight"));
    strenghtIndicators.slice(0, strenghtValue).forEach(indicator => {
        indicator.classList.add(indicatorColorClasses[strenghtValue - 1], "alight");
    });
    strenghtValueText.textContent = indicatorText;
}
//# sourceMappingURL=displayFunctions.js.map