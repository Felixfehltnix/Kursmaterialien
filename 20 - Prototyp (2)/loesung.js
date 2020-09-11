"use strict"

const studentMethods = {
  getName() {
    return this.firstname + " " + this.lastname
  }
}

function Student(firstname, lastname) {
  const student = {
    firstname: firstname,
    lastname: lastname,
  }
  Object.setPrototypeOf(student, studentMethods)
  return student
}

const student1 = Student("Max", "Müller")
console.log(student1.getName())

const student2 = Student("Erika", "Mustermann")
console.log(student2.getName())

const studentList = [
  Student("Max", "Müller"),
  Student("Erika", "Mustermann")
]
console.log(studentList)