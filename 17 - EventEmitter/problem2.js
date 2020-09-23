"use strict"

const studentModule = {
  students: ["Max Müller"],
  addStudent(name) {
    this.students.push(name)

    bankModule.chargeForStudent(name)
    dsgvoModule.shipLetterToStudent(name)
  }
}

const bankModule = {
  chargeForStudent(name) {
    console.log("Beitrag wird abgebucht für: " + name)
  }
}

const dsgvoModule = {
  shipLetterToStudent(name) {
    console.log("Datenschutzbrief wird geschickt für: " + name)
  }
}

// Es wird ein Teilnehmer hinzugefügt!

// button.addEventListener("click", () => {
  const name = "Max Mustermann"
  studentModule.addStudent(name)  
// })



// button.addEventListener("click", () => {
  const name2 = "Max Mustermann"
  studentModule.addStudent(name2)  
// })

