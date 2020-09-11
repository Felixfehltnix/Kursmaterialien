"use strict"

const studentModule = {
  students: ["Max Müller"],

  onAddStudent: function(name) {},

  addStudent(name) {
    this.students.push(name)

    this.onAddStudent(name)
  }
}


const bankModule = {
  chargeForStudent(name) {
    console.log("Beitrag wird abgebucht für: " + name)
  }
}
studentModule.onAddStudent = (name) => {
  bankModule.chargeForStudent(name)
}

const dsgvoModule = {}
studentModule.onAddStudent = (name) => {
  // dsgvoModule.irgendwas()
}



studentModule.addStudent("Max Mustermann")