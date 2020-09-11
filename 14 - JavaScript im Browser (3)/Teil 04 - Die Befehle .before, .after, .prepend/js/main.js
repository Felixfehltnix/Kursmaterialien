"use strict"

document.addEventListener("DOMContentLoaded", () => {

const addStudentButton = document.getElementById("add-student")


  addStudentButton.addEventListener("click",()=>{
    const liElement = document.createElement("li")
    liElement.classList.add("list-group-item")

    const strongElement = document.createElement("strong")
    strongElement.innerText = "Hallo Welt"

    liElement.appendChild(strongElement)

    const ulElement = document.querySelector("ul.list-group")
    ulElement.appendChild(liElement)



  })





})