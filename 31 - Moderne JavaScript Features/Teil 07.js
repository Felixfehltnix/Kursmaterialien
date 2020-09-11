"use strict"

const n = [5, 6, 7]

const n2 = [4, ...n, 9, ...n]
console.log(n2)

n.unshift(4)
console.log("n:", n)

const obj1 = {lastname: "Mustermann"}

const max = {
  ...obj1,
  firstname: "Max"
}

console.log("max:", max)