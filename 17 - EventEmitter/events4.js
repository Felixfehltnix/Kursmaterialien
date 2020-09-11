"use strict"

const studentModule = {
  students: ["Max Müller"],

  events: {
    add: []
  },

  addStudent(name) {
    this.students.push(name)
    
    this.trigger("add", name)
  },

  trigger(eventName, name) {
    for(const f of this.events[eventName]) {
      f(name)
    }
  },

  on(eventName, cb) {
    this.events[eventName].push(cb)
  }
}

const bankModule = {
  chargeForStudent(name) {
    console.log("Beitrag wird abgebucht für: " + name)
  }
}
studentModule.on("add", (name) => {
  bankModule.chargeForStudent(name)
})

studentModule.addStudent("Max Mustermann!")