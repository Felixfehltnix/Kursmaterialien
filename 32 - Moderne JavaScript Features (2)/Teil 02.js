"use strict"

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
/*
const number2 = numbers.filter((value) => {
  if (value % 2 === 0) return true
  else return false
})
*/

const number2 = numbers
  .filter(v => v % 2 === 0)
  .map(v => v * 10)


console.log(number2)
