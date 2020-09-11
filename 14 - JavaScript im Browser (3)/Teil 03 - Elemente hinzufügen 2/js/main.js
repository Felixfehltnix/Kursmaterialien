"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const addStudentButton = document.getElementById("add-student")

  addStudentButton.addEventListener("click", () => {
    const liElement = document.createElement("li")
    liElement.classList.add("list-group-item")

    const strongElement = document.createElement("strong")

    /*
    const textNode = document.createTextNode("Hallo Welt")
    strongElement.appendChild(textNode)
    */
    strongElement.appendChild(document.createTextNode("Hallo Welt"))

    liElement.appendChild(strongElement)

    const ulElement = document.querySelector("ul.list-group")
    ulElement.appendChild(liElement)
  })
}) 