import { describe, it, expect } from "vitest";

import { generatePassword } from "./";

describe("generatePassword Unit Test Suites", () => {
	it("should return something", () => {
		expect(generatePassword(true, true, true, true, 2)).toBeDefined();
	});

	it("should return a string", () => {
		expect(generatePassword(true, true, true, true, 8)).toBeTypeOf("string");
	});

	it("should return a 5 characters password", () => {
		expect(generatePassword(true, false, false, false, 5)).toHaveLength(5);
	});

	it("should return a 20 characters password", () => {
		expect(generatePassword(true, false, true, false, 20)).toHaveLength(20);
	});

	it("should the password have the length we pass as argument", () => {
		const passwordLength = 10;

		expect(generatePassword(true, false, true, false, passwordLength)).toHaveLength(passwordLength);
	});

	it("should have a password less or equal than 20", () => {
		const numberLessOrEqualThan20 = Math.floor(Math.random() * 21);
		const generatedPassword = generatePassword(true, false, true, false, numberLessOrEqualThan20);

		expect(generatedPassword.length).toBeLessThanOrEqual(20);
	});

	it("should return a password only in lowercase", () => {
		const generatedPassword = generatePassword(false, true, false, false, 5);
		const regex = /^[a-z]+$/;

		expect(generatedPassword).toMatch(regex);
	});

	it("should return a password only in uppercase", () => {
		const generatedPassword = generatePassword(true, false, false, false, 5);
		const regex = /^[A-Z]+$/;

		expect(regex.test(generatedPassword)).toBe(true);
	});

	it("should return a password only in numbers", () => {
		const generatedPassword = generatePassword(false, false, true, false, 5);
		const regex = /^[0-9]+$/;

		expect(regex.test(generatedPassword)).toBe(true);
	});

	it("should return a password only in symbols", () => {
		const generatedPassword = generatePassword(false, false, false, true, 5);
		const regex = /[!@#$%^&*()+_\-=[\]{}|:;"/?.><,`~']+$/;

		expect(regex.test(generatedPassword)).toBe(true);
	});

	it("should return a password with lowercases and uppercases", () => {
		const generatedPassword = generatePassword(true, true, false, false, 5);
		const regex = /^[a-zA-Z]+$/;

		expect(regex.test(generatedPassword)).toBe(true);
	});

	it("should return a password with lowercases and numbers", () => {
		const generatedPassword = generatePassword(false, true, true, false, 5);
		const regex = /^[a-z0-9]+$/;

		expect(regex.test(generatedPassword)).toBe(true);
	});

	it("should return a password with lowercases and symbols", () => {
		const generatedPassword = generatePassword(false, true, false, true, 5);
		const regex = /^[a-z!@#$%^&*()+_\-=[\]{}|:;"/?.><,`~']+$/;

		expect(regex.test(generatedPassword)).toBe(true);
	});

	it("should return a password with uppercases and numbers", () => {
		const generatedPassword = generatePassword(true, false, true, false, 5);
		const regex = /^[A-Z0-9]+$/;

		expect(regex.test(generatedPassword)).toBe(true);
	});

	it("should return a password with uppercases and symbols", () => {
		const generatedPassword = generatePassword(true, false, false, true, 5);
		const regex = /^[A-Z!@#$%^&*()+_\-=[\]{}|:;"/?.><,`~']+$/;

		expect(regex.test(generatedPassword)).toBe(true);
	});

	it("should return a password with numbers and symbols", () => {
		const generatedPassword = generatePassword(false, false, true, true, 5);
		const regex = /^[0-9!@#$%^&*()+_\-=[\]{}|:;"/?.><,`~']+$/;

		expect(regex.test(generatedPassword)).toBe(true);
	});
});
