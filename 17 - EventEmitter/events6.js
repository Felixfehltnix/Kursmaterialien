"use strict"

const studentModule = {
  students: ["Max Müller"],

  events: {},

  /**
   * Fügt einen neuen Teilnehmer hinzu
   * 
   * @param {string} name 
   */
  addStudent(name) {
    this.students.push(name)
    
    this.emit("add", name)
  },

  /**
   * Löst ein Ereignis aus. Dieser Funktion dürfen beliebig viele
   * params übergeben werden, diese werden 1:1 an die Event-Listener
   * durchgereicht. 
   * 
   * @param {string} eventName 
   * @param {*=} params 
   */
  emit(eventName, param) {
    if (eventName in this.events) {
      for(const f of this.events[eventName]) {
        f(param)
      }
    }
  },

  /**
   * Registriert einen Event-Listener für das Event eventName.
   * 
   * @param {string} eventName 
   * @param {Function} cb 
   */
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