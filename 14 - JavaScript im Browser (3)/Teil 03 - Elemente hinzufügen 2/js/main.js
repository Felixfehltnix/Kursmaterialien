"use strict"


document.addEventListener("DOMContentLoaded", () => {

    const addStudent = document.getElementById("add-student")

    let studentCounter = 0

    addStudent.addEventListener("click", () => {

        const liElement = document.createElement("li");
        liElement.innerText = "Student " + studentCounter.toString(10)
        liElement.classList.add("list-group-item")
        studentCounter++

        const strongElement = document.createElement("strong")
        strongElement.innerText = "BoldText"
        liElement.appendChild(strongElement)

        const ulElement = document.querySelector("ul.list-group")
        ulElement.appendChild(liElement)

    })
})