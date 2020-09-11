"use strict"

// const student = {firstname: "Max", lastname: "Müller", subjects: []}

const student = Object.create(Object.prototype, {
  firstname: {
    value: "Max",       // Der initialie Wert
    writable: false,     // Darf dieser Wert überschrieben werden?
                        // Beispiel: student.firstname = "Maximilian"
    configurable: false, // Darf diese Eigenschaft per "delete" gelöscht werden?
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

// student.subjects = ["Deutsch", "Englisch"]
student.subjects.push("Deutsch")

for (const key in student) {
  console.log("key:", key)
}
// delete student.firstname
// student.firstname = "Maximilian"

console.log(student)