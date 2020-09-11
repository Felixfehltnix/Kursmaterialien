"use strict"

const numbers = [5, 6, 3, 2, 8, 9, 3, 1, 4]

const i = numbers.reduce((prev, cur) => {
  if (cur >= 5) return prev + 1
  return prev
}, 0)
console.log("i:", i)

// Summe
const s = numbers.reduce((prev, cur) => prev + cur, 0)
console.log("s:", s)

// Minimum
const m = numbers.reduce((prev, cur) => {
  if (prev < cur) return prev
  else return cur
}, Number.MAX_SAFE_INTEGER)
console.log("m:", m)

const students = [
  {age: 25},
  {age: 30},
  {age: 35}
]
const m2 = students.reduce((prev, cur) => {
  if (cur.age < prev) return cur.age
  return prev
}, Number.MAX_SAFE_INTEGER)

const m3 = Math.min(...students.map((student) => student.age))