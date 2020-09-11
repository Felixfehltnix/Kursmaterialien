"use strict"

const studentActions = {
  getName: function() {
    return this.firstname + " " + this.lastname
  }
}

const student = Object.create(studentActions, {
  firstname: {
    value: "Max",
    enumerable: true
  },
  lastname: {
    value: "Müller",
    enumerable: true
  }
})

// Deprecated!
// console.log(student.__proto__)

console.log(Object.getPrototypeOf(student))

debugger

console.log(student.getName())