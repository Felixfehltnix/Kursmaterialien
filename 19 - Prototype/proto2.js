"use strict"

const studentActions = {
  getName: function() {
    return this.firstname + " " + this.lastname
  }
}

const student = {
  firstname: "Max",
  lastname: "Müller"
}

// Deprecated!
// student.__proto__ = studentActions
Object.setPrototypeOf(student, studentActions)

console.log(student.getName())

debugger