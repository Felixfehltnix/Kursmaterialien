"use strict"

const makeCounter = require("./part_07")

test("It should increment the button", () => {
  const button = document.createElement("button")
  button.textContent = 0

  makeCounter(button)

  button.click()

  expect(button.textContent).toBe("1")
})