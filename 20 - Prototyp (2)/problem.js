"use strict"

// const studentMethods = {
//   getName() {
//     return this.firstname + " " + this.lastname
//   }
// }
//
// const student = {
//   firstname: "Max",
//   lastname: "Müller",
// }
//
// Object.setPrototypeOf(student, studentMethods)
//
// console.log(student.getName())
//


// Lösungsansatz 1:


function Student(firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
}

Student.prototype.getName = function () {
    return this.firstname + " " + this.lastname;
}

const student1 = new Student("Max", "Müller");
console.log(student1.getName());

const student2 = new Student("Erika", "Wurst");
console.log(student2.getName());


// console.log(studentList)