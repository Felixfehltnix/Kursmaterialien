"use strict"


function printStudent({lastname, firstname, age = 25}) {
  console.log(`Hallo ${firstname}, Alter: ${age}`)
}

printStudent({firstname: "Moritz", age: 30, lastname: "Mustermann"})


function printStudent2(firstname, lastname, age = 25) {
  console.log(`Hallo ${firstname}, Alter: ${age}`)
}
printStudent2("Moritz", 30)