"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const addStudentButton = document.getElementById("add-student")

  addStudentButton.addEventListener("click", () => {
    const liElement = document.createElement("li")
    liElement.innerText = "Hallo Welt"
    liElement.classList.add("list-group-item")

    const ulElement = document.querySelector("ul.list-group")
    ulElement.appendChild(liElement)
  })
}) 