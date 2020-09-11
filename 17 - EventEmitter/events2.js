"use strict"

const studentModule = {
  students: ["Max Müller"],

  /*
  onAddStudent: [
    function(name) {
      console.log("studentModule: " + name)
    }
  ],
  */
  onAddStudent: [],

  addStudent(name) {
    this.students.push(name)

    for(const f of this.onAddStudent) {
      f(name)
    }
  }
}

const bankModule = {
  chargeForStudent(name) {
    console.log("Beitrag wird abgebucht für: " + name)
  }
}
studentModule.onAddStudent.push((name) => {
  bankModule.chargeForStudent(name)
})

studentModule.addStudent("Max Mustermann!")