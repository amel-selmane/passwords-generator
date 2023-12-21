import { describe, it, expect } from 'vitest'

import { generatePassword } from "./"

describe("generatePassword Unit Test Suites", () => {
    it("should return something", () => {
        expect(generatePassword(true, true, true, true, 2)).toBeDefined()
    })
    
    it("should return a string", () => {
        expect(typeof generatePassword(true, true, true, true, 2)).toBe("string")
    })
    
    it("should return a 5 characters password", () => {
        expect(generatePassword(true, false, false, false, 5).length).toBe(5)
    })
    
    it("should return a password only in lowercase", () => {
        const generatedPassword = generatePassword(false, true, false, false, 2)
        const regex = /^[a-z]+$/;
        
        expect(regex.test(generatedPassword)).toBe(true)
    })
})


