"use strict"

// const student = {firstname: "Max", lastname: "Müller", subjects: []}

const student = Object.create(Object.prototype, {
  firstname: {
    value: "Max",       // Der initialie Wert
    writable: true,     // Darf dieser Wert überschrieben werden?
                        // Beispiel: student.firstname = "Maximilian"
    configurable: true, // Darf diese Eigenschaft per "delete" gelöscht werden?
                        // Beispiel: delete student.firstname
    enumerable: true    // Taucht diese Eigenschaft in Schleifen auf?
                        // for (const key in student) { console.log(key) }
  },
  lastname: {
    value: "Müller",
    writable: true,
    configurable: true,
    enumerable: true
  },
  subjects: {
    value: [],
    writable: false,
    configurable: false,
    enumerable: true
  }
})



for (const key in student){
  console.log(key)
}

console.log(Object.getOwnPropertyDescriptor(student, "firstname"))