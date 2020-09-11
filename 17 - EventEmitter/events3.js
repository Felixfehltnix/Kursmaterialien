"use strict"

const studentModule = {
  students: ["Max Müller"],

  events: {
    add: []
  },

  addStudent(name) {
    this.students.push(name)

    for(const f of this.events.add) {
      f(name)
    }
  },

  addEventsAddCallback(cb) {
    this.events.add.push(cb)
  }
}

const bankModule = {
  chargeForStudent(name) {
    console.log("Beitrag wird abgebucht für: " + name)
  }
}
studentModule.addEventsAddCallback((name) => {
  bankModule.chargeForStudent(name)
})
/*
studentModule.events.add.push((name) => {
  bankModule.chargeForStudent(name)
})
*/


studentModule.addStudent("Max Mustermann!")