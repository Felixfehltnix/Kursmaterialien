"use strict"

function StudentModule() {
  this.students = []
}

StudentModule.prototype.addStudent = function(name) {
  if (this.students.indexOf(name) === -1) {
    this.students.push(name)
  }
}

StudentModule.prototype.removeStudent = function(name) {
  const pos = this.students.indexOf(name)
  if (pos !== -1) {
    this.students.splice(pos, 1)
  }
}

module.exports = StudentModule