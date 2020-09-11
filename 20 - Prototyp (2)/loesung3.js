"use strict"

function Student(firstname, lastname) {
  this.firstname = firstname
  this.lastname = lastname
}

Student.prototype.getName = function() {
  return this.firstname + " " + this.lastname
}

/*
 * New macht folgendes:
 *  - Neues Objekt wird erstellt
 *  - Wird mit dem entsprechenden Prototypen verknüpft (hier: Student.prototype)
 *  - Die entsprechende Konstruktor-Funktion (Zeile 3) wird aufgerufen, das neue
 *    Objekt wird dieser Funktion als "this" zur Verfügung gestellt
 *  - Das neu erstellte Objekt wird als Wert zurückgegeben (und landet hier 
 *    in der Variable "student1"):
*/
const student1 = new Student("Max", "Müller")
console.log(student1.getName())

const student2 = new Student("Erika", "Mustermann")
console.log(student2.getName())