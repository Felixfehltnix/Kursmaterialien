"use strict"

class Student {

  constructor(firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
  }

  getName() {
    console.log(`${this.lastname}, ${this.firstname}`)
  }
}

const max = new Student("Max", "Mustermann")
max.getName()

/*
function Student(firstname, lastname) {
  this.firstname = firstname
  this.lastname = lastname
}

Student.prototype.getName = function() {
  console.log(`${this.lastname}, ${this.firstname}`)
}

const max = new Student("Max", "Mustermann")
max.getName()
*/

