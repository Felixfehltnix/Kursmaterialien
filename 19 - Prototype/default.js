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

Object.setPrototypeOf(student, studentActions)

Object.prototype.print = function() {
  console.log("print():", this)
}
console.log(Object.prototype)

console.log(student.print())

debugger