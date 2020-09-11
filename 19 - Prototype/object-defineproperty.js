"use strict"

// const student = {firstname: "Max", lastname: "Müller", subjects: []}

const student = {
  firstname: "Max", 
  lastname: "Müller"
}
Object.defineProperty(student, "id", {
  value: 4,
  writable: false,
  configurable: false,
  enumerable: true
})

/*
for (const key in student) {
  student[key] = "TEST"
}
*/

console.log(Object.getOwnPropertyDescriptor(student, "id"))
