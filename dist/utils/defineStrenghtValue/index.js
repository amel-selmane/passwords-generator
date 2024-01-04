export function defineStrenghtValue(numberOfCheckedCheckboxes, passwordLength) {
    if (numberOfCheckedCheckboxes === 0 || passwordLength === 0) {
        return ["", 0];
    }
    else if (numberOfCheckedCheckboxes === 2 && passwordLength >= 6) {
        return ["Weak", 2];
    }
    else if (numberOfCheckedCheckboxes === 3 && passwordLength >= 6) {
        return ["Medium", 3];
    }
    else if (numberOfCheckedCheckboxes === 4 && passwordLength >= 6) {
        return ["Strong", 4];
    }
    else {
        return ["Too weak!", 1];
    }
}
//# sourceMappingURL=index.js.map