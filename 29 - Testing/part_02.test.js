"use strict"

const generateGreeting = require("./part_02")
// https://jestjs.io/docs/en/using-matchers

test("It should generate a message", () => {
  const greeting = generateGreeting("Max Müller")
  expect(greeting.indexOf("Max Müller") !== -1).toBe(true)
})