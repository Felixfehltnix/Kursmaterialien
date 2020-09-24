"use strict"

const studentModule = {
  students: ["Max Müller"],

  onAddStudent: [],

  addStudents(name){
    this.studentModule.push(name)

    for (const f of this.onAddStudent){
      f(name)
    }
  }
}

const bankModule = {
  chargeForStudent(name){
    console.log("Beitrag für " + name + " wird abgebucht.")
  }
}

studentModule.onAddStudent.push((name)=>{
  bankModule.chargeForStudent(name)
})

studentModule.addStudent("Ina Müller")