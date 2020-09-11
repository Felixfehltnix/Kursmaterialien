"use strict"

const studentActions = {
  getName: function() {
    return this.firstname + " " + this.lastname
  }
}

const student = Object.create(studentActions, {
  firstname: {
    value: "Max",
    enumerable: true
  },
  lastname: {
    value: "Müller",
    enumerable: true
  }
})


const student2 = Object.create(studentActions, {
  firstname: {
    value: "Erika",
    enumerable: true
  },
  lastname: {
    value: "Mustermann",
    enumerable: true
  }
})


console.log(student.getName())