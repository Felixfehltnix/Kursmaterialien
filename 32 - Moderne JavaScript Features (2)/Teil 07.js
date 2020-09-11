"use strict"

const students = [
  {firstname: "Max", lastname: "Mustermann", age: 25},
  {firstname: "Erika", lastname: "Müller", age: 30},
  {firstname: "Tobias", lastname: "Lieb", age: 19},
  {firstname: "Laura", lastname: "Lieb", age: 20},
]

// Aufgabe: Alle Teilnehmer ausgeben, die in Amerika Alkohol 
// trinken dürfen!

const mayDrinkAlcohol = ({age}) => age >= 21
const formatName = ({lastname, firstname}) => `${lastname}, ${firstname}`

const s = students
  .filter(mayDrinkAlcohol)
  .map(formatName)
console.log("s:", s)

/*
const s = students
  .filter(student => student.age >= 21)
  .map(({lastname, firstname}) => `${lastname}, ${firstname}`)
console.log(s)
*/
