"use strict"

function Student(firstname, lastname) {
  this.firstname = firstname
  this.lastname = lastname
  this.subjects = []
}

// Student.prototype.subjects = []

Student.prototype.getName = function() {
  return this.firstname + " " + this.lastname
}

const student = new Student("Max", "Müller")
student.subjects.push("Bulgarisch")
console.log("student.subjects:", student.subjects)

const student2 = new Student("Erika", "Mustermann")
student2.subjects.push("Ungarisch")
console.log("student2.subjects:", student2.subjects)

debugger