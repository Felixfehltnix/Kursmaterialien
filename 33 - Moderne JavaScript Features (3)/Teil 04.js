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

const max = new Student("Max", "Mustermann")

setTimeout(max.getName, 1000)

/*
const element = document.getElementById("test")
element.addEventListener("click", max.getName)
*/