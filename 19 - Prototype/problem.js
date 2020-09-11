"use strict"

const studentsGetName = function() { return this.firstname + " " + this.lastname }

const students = [
  {
    firstname: "Max", 
    lastname: "Müller", 
    // getName: studentsGetName
  },
  {
    firstname: "Erika", 
    lastname: "Mustermann", 
    // getName: studentsGetName
  },
]

for (const student of students) {
  student.getName = studentsGetName
} 

for (const student of students) {
  console.log(student.getName())
}