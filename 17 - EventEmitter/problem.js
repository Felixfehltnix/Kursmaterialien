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

const dsgvoModule = {
    shipLetterToStudent(name) {
        console.log("Datenschutzbrief wird geschickt für:" + name)
    }
}

// Es wird ein Teilnehmer hinzugefügt!

// button.addEventListener("click", () => {
const name = "Max Müller"
studentModule.addStudent(name)
bankModule.chargeForStudent(name)
dsgvoModule.shipLetterToStudent(name)
// })


// button.addEventListener("click", () => {
const name2 = "Max Müller"
studentModule.addStudent(name2)
bankModule.chargeForStudent(name2)
dsgvoModule.shipLetterToStudent(name2)
// })