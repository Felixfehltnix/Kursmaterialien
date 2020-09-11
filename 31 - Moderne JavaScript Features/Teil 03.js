"use strict"



/*
const student = {
  firstname: "Max",
  lastname: "Mustermann"
}

const firstname = student.firstname
const lastname = student.lastname

function printStudent({firstname, lastname}) {
  console.log(firstname, lastname)
}

printStudent(student)
*/

// https://github.com/axios/axios

const student = {
  firstname: "Max",
  lastname: "Mustermann"
}

function printStudent({firstname, lastname = "", age = 25}) {
  console.log(`Hallo ${firstname} ${lastname}, Alter: ${age}`)
}

printStudent({firstname: "Moritz"})