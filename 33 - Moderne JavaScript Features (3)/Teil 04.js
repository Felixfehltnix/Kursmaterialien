"use strict"

class Student {

  constructor(firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname

    this.getName = this.getName.bind(this)
  }

  getName() {
    console.log(`${this.lastname}, ${this.firstname}`)
  }
}

const felix = new Student("Felx", "Becker");

setInterval(() => felix.getName(), 1000)