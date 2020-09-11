"use strict"

const students = []

function addStudent(name) {
  if (students.indexOf(name) === -1) {
    students.push(name)
  }
}

module.exports.students = students
module.exports.addStudent = addStudent