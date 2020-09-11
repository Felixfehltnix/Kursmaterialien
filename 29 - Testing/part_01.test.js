"use strict"


const {add} = require("./part_01")

test("It should calculate the sum of 5 + 8", () => {
  const result = add(5, 8)
  
  expect(result).toBe(13) 
})

/*
test("It should calculate the sum of 5 + 0", () => {
  const result = add(5, 0)
  
  expect(result).toBe(5)
})
*/

// https://github.com/jest-community/vscode-jest/blob/master/README.md#troubleshooting