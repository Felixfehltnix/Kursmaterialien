"use strict"

const students = [
  {firstname: "Max"},
  {firstname: "Moritz"}
]

const exists = students.some(value => value.firstname === "Erik")

console.log("exists:", exists)