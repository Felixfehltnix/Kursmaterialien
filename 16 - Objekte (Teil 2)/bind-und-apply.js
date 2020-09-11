"use strict"

const printStudentName = function() {
  console.log(this.lastname + ", " + this.firstname)
}

const students = [
  {firstname: "Max", lastname: "Mustermann"},
  {firstname: "Erika", lastname: "Mustermann"}
]

// .bind() erstellt eine neue Funktion, bei dem der Kontext "this" auf 
// den entsprechenden Parameter (hier: students[0]) gesetzt ist.
// 
// Diese können wir z.B. direkt danach ausführen.
printStudentName.bind(students[0])()

// .apply() führt eine Funktion aus, hierbei wird der Kontext "this" auf
// den ersten Parameter (hier: students[1]) gesetzt. 
// 
// Die Funktionsparameter werden als Array übergeben - hier rufen 
// wir dieFunktion ohne Parameter auf, daher übergeben wir eine leeres
// Array. 
printStudentName.apply(students[1], [])