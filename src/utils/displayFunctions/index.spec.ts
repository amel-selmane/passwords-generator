import { describe, it, expect } from "vitest";
import {
	displayCopyButtonAnimation,
	defineStrenghtValue,
	handlePasswordLengthCounter,
	handleRangeInputUI,
	displayStrenghtValue,
} from "../displayFunctions";

describe("displayCopyButtonAnimation Unit Test Suites", () => {
	it("should add the 'copied' class on the button", () => {
		const button = document.createElement("button");

		displayCopyButtonAnimation(button);
		expect(button.classList.contains("copied")).toBe(true);
	});
	
	// it("should remove the 'copied' class on the button after 3s", async () => { 
	// 	const button = document.createElement("button");

	// 	displayCopyButtonAnimation(button);
	// 	expect(button.classList.contains("copied")).toBe(false);
	// });
});


describe("handlePasswordLengthCounter Unit Test Suites", () => {
	it("should add the password range input value in the password length element", () => {
		// TODO: Write test
	});
});

describe("handleRangeInputUI Unit Test Suites", () => {
	it("should ", () => {
		// TODO: Write test
	});
});

describe("displayStrenghtValue Unit Test Suites", () => {
	it("should remove all classes on indicators", () => {
		// TODO: Write test
	});

	it("should add 'alight' class on active indicators", () => {
		// TODO: Write test
	});
});
