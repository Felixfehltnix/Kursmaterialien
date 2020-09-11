"use strict"

function StudentModule() {
  this.students = []
}

StudentModule.prototype.addStudent = function(name) {
  if (this.students.indexOf(name) === -1) {
    this.students.push(name)
  }
}

module.exports = StudentModule