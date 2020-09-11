"use strict"

/*
const max = {firstname: "Max"}
const students = [
  max,
  {firstname: "Moritz"}
]
console.log(students.indexOf(max))
*/
/*
const students = [
  {firstname: "Max"},
  {firstname: "Moritz"}
]

let exists = false
for(const student of students) {
  if (student.firstname === "Max") {
    exists = true
    break
  }
}

console.log(exists)
*/

const students = [
  {firstname: "Max"},
  {firstname: "Moritz"}
]
/*
const s = students.find((student) => {
  if (student.firstname === "Max") return true
  else return false
})
*/
const s = students.find(student => student.firstname === "Max")
console.log("s:", s)

const i = students.findIndex(student => student.firstname === "Max")
console.log("i:", i)
