"use strict"

function Student(firstname, lastname) {
  this.firstname = firstname
  this.lastname = lastname
}

Student.prototype.getName = function() {
  return this.firstname + " " + this.lastname
}

const student = new Student("Max", "Müller")

for (const key in student) {
  if (student.hasOwnProperty(key)) {
    console.log("key:", key)
  }
}
debugger