"use strict"

function a(message = "Hallo Welt") {
  console.log(message)
}
a()

function printStudent({firstname, age = 25} = {age: 30}) {
  console.log(`Hallo ${firstname}, Alter: ${age}`)
}

// printStudent({firstname: "Moritz"})

printStudent()
printStudent({})
