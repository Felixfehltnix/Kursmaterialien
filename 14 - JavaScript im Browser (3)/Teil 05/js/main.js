"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const addStudentButton = document.getElementById("add-student")
  const nameInput = document.getElementById("nameInput")

  addStudentButton.addEventListener("click", (event) => {
    event.preventDefault()
    console.log(nameInput.value)
  })

  nameInput.addEventListener("change", (event) => {
    console.log("change:", nameInput.value)
  })

  nameInput.addEventListener("keyup", (event) => {
    console.log("keyup:", nameInput.value)
  })
}) 