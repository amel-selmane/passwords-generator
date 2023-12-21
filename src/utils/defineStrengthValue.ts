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
}
