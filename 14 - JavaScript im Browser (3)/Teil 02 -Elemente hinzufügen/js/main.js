"use strict"

document.addEventListener("DOMContentLoaded", () => {

    const addStudent = document.getElementById("add-student")

    let studentCounter = 0

    addStudent.addEventListener("click", () => {

        const liElement = document.createElement("li");
        liElement.innerText = "Schueler " + studentCounter.toString(10)
        liElement.classList.add("list-group-item")
        studentCounter++

        const ulElement = document.querySelector("ul.list-group")
        ulElement.appendChild(liElement)

    })
})                                  // TODO: warum wurde die letzte klammer nicht als Error angezeigt?
