"use strict"

const studentModule = {
  students: ["Max Müller"],
  addStudent(name) {
    this.students.push(name)
  }
}

const bankModule = {
  chargeForStudent(name) {
    console.log("Beitrag wird abgebucht für: " + name)
  }
}

const dsvgoModule = {
  shipLetterToStudent(name) {
    console.log("Datenschutzbrief wird geschickt für: " + name)
  }
}

// Es wird ein Teilnehmer hinzugefügt!

// button.addEventListener("click", () => {
  const name = "Max Mustermann"
  studentModule.addStudent(name)  
  bankModule.chargeForStudent(name)
  dsvgoModule.shipLetterToStudent(name)
// })



// button.addEventListener("click", () => {
  const name2 = "Max Mustermann"
  studentModule.addStudent(name2)  
  bankModule.chargeForStudent(name2)
  dsvgoModule.shipLetterToStudent(name)
// })

