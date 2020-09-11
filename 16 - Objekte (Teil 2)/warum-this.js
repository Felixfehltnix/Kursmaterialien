"use strict"

const printStudentName = function() {
  console.log(this.lastname + ", " + this.firstname)
}

const students = [
  {
    firstname: "Max", 
    lastname: "Mustermann",
    printName: printStudentName
  },
  {
    firstname: "Erika", 
    lastname: "Mustermann",
    printName: printStudentName
  }
]

students[0].printName()
students[1].printName()