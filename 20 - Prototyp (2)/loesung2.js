"use strict"

function Student(firstname, lastname) {
  const student = {
    firstname: firstname,
    lastname: lastname,
  }
  Object.setPrototypeOf(student, Student.prototype)
  return student
}

Student.prototype.getName = function() {
  return this.firstname + " " + this.lastname
}

const student1 = Student("Max", "Müller")
console.log(student1.getName())

const student2 = Student("Erika", "Mustermann")
console.log(student2.getName())