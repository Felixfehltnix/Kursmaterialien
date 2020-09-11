"use strict"

const studentMethods = {
  getName() {
    return this.firstname + " " + this.lastname
  }
}

const student = {
  firstname: "Max",
  lastname: "Müller",
}

Object.setPrototypeOf(student, studentMethods)

console.log(student.getName())