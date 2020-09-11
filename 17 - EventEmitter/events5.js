"use strict"

const studentModule = {
  students: ["Max Müller"],

  events: {},

  addStudent(name) {
    this.students.push(name)
    
    this.emit("add", name)
  },

  emit(eventName, param) {
    if (eventName in this.events) {
      for(const f of this.events[eventName]) {
        f(param)
      }
    }
  },

  on(eventName, cb) {
    // Hier ist die Klammersetzung ganz wichtig!
    if (!(eventName in this.events)) {
      this.events[eventName] = []
    }
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