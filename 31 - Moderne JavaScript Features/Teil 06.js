"use strict"

/*
const message = ["A", "B"]
const [var1, var2] = message
console.log("var1:", var1)
*/

console.log(
  Math.max(1, 2, 3, 4, 5, 6, -5)
)

/*
function max(...values) {
  let start = Number.MIN_SAFE_INTEGER
  for(const value of values) {
    if (value > start) {
      start = value
    }
  }
  return start
}

console.log(max(1, 2, 3))
*/

/*
function max(start, ...values) {
  for(const value of values) {
    if (value > start) {
      start = value
    }
  }
  return start
}

console.log(max(1, 2, 3))
*/

const n = [1, 2, 3, 4, 5, 6, 4]
console.log(Math.max(...n))