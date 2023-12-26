import { describe, it, expect } from "vitest";
import { defineStrenghtValue } from "./";

describe("defineStrenghtValue Unit Tests Suites", () => {
	it("should return something", () => {
		expect(defineStrenghtValue(1, 6)).toBeDefined();
	});

	it("should return an array type", () => {
		expect(Array.isArray(defineStrenghtValue(1, 6))).toBe(true);
	});

	it("should the returning array contains a string and a number", () => {
		const returningValue = defineStrenghtValue(1, 6);

		expect(returningValue[0]).toBeTypeOf("string");
		expect(returningValue[1]).toBeTypeOf("number");
	});

	it("should the returning array returns an empty string and 0 if the two arguments are 0", () => {
		expect(defineStrenghtValue(0, 0)).toStrictEqual(["", 0]);
	});

	it("should the returning array returns ['Too weak!', 1] if the passwordLength < 6 no matter what the number of checked checkbox is", () => {
		expect(defineStrenghtValue(2, 5)).toStrictEqual(["Too weak!", 1]);
	});

	it("should the returning array returns ['Weak', 2] if the passwordLength >= 6 and the number of checked checkbox equals 2", () => {
		expect(defineStrenghtValue(2, 8)).toStrictEqual(["Weak", 2]);
	});

	it("should the returning array returns ['Medium', 3] if the passwordLength >= 6 and the number of checked checkbox equals 3", () => {
		expect(defineStrenghtValue(3, 15)).toStrictEqual(["Medium", 3]);
	});

	it("should the returning array returns ['Strong', 4] if the passwordLength >= 6 and the number of checked checkbox equals 4", () => {
		expect(defineStrenghtValue(4, 7)).toStrictEqual(["Strong", 4]);
	});
});
