import { describe, it, expect } from "vitest";

import { generatePassword } from "./";

describe("generatePassword Unit Test Suites", () => {
	it("should return something", () => {
		expect(generatePassword(true, true, true, true, 2)).toBeDefined();
	});

	it("should return a string", () => {
		expect(typeof generatePassword(true, true, true, true, 2)).toBe("string");
	});

	it("should return a 5 characters password", () => {
		expect(generatePassword(true, false, false, false, 5).length).toBe(5);
	});

	it("should return a password only in lowercase", () => {
		const generatedPassword = generatePassword(false, true, false, false, 5);
		const regex = /^[a-z]+$/;
		console.log("18", generatedPassword);
		expect(regex.test(generatedPassword)).toBe(true);
	});

	it("should return a password only in uppercase", () => {
		const generatedPassword = generatePassword(true, false, false, false, 5);
		const regex = /^[A-Z]+$/;
		console.log("25", generatedPassword);
		expect(regex.test(generatedPassword)).toBe(true);
	});

	it("should return a password only in numbers", () => {
		const generatedPassword = generatePassword(false, false, true, false, 5);
		const regex = /^[0-9]+$/;
		console.log("32", generatedPassword);
		expect(regex.test(generatedPassword)).toBe(true);
	});

	it("should return a password only in symbols", () => {
		const generatedPassword = generatePassword(false, false, false, true, 5);
		const regex = /[!@#$%^&*()+_\-=[\]{}|:;"/?.><,`~']+$/;
		console.log("39", generatedPassword);
		expect(regex.test(generatedPassword)).toBe(true);
	});

	it("should return a password with lowercases and uppercases", () => {
		const generatedPassword = generatePassword(true, true, false, false, 5);
		const regex = /^[a-zA-Z]+$/;
		console.log("46", generatedPassword);
		expect(regex.test(generatedPassword)).toBe(true);
	});

	it("should return a password with lowercases and numbers", () => {
		const generatedPassword = generatePassword(false, true, true, false, 5);
		const regex = /^[a-z0-9]+$/;
		console.log("53", generatedPassword);
		expect(regex.test(generatedPassword)).toBe(true);
	});

	it("should return a password with lowercases and symbols", () => {
		const generatedPassword = generatePassword(false, true, false, true, 5);
		const regex = /^[a-z!@#$%^&*()+_\-=[\]{}|:;"/?.><,`~']+$/;
		console.log("60", generatedPassword);
		expect(regex.test(generatedPassword)).toBe(true);
	});

	it("should return a password with uppercases and numbers", () => {
		const generatedPassword = generatePassword(true, false, true, false, 5);
		const regex = /^[A-Z0-9]+$/;
		console.log("67", generatedPassword);
		expect(regex.test(generatedPassword)).toBe(true);
	});

	it("should return a password with uppercases and symbols", () => {
		const generatedPassword = generatePassword(true, false, false, true, 5);
		const regex = /^[A-Z!@#$%^&*()+_\-=[\]{}|:;"/?.><,`~']+$/;
		console.log("74", generatedPassword);
		expect(regex.test(generatedPassword)).toBe(true);
	});

	it("should return a password with numbers and symbols", () => {
		const generatedPassword = generatePassword(false, false, true, true, 5);
		const regex = /^[0-9!@#$%^&*()+_\-=[\]{}|:;"/?.><,`~']+$/;
		console.log("81", generatedPassword);
		expect(regex.test(generatedPassword)).toBe(true);
	});
});
