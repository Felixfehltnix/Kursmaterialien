"use strict"

require("./other.js")

console.log(2 ** 10)

const students = ["Max", "Monika"]

for (const student of students) {
  setTimeout(() => {
    console.log(student)
  }, 1000)
}