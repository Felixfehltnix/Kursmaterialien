"use strict"

document.addEventListener("DOMContentLoaded", () => {

    const addStudentButton = document.getElementById("add-student")


    counter++

    addStudentButton.addEventListener("click", (event) => {
        event.preventDefault()
        const nameInput = document.getElementById("nameInput")

        const liElement = document.createElement("li")
        liElement.classList.add("list-group-item")
        liElement.style.backgroundColor = "grey"

        const strongElement = document.createElement("strong")
        strongElement.innerText = nameInput.value + counter
        counter++

        liElement.appendChild(strongElement)

        const ulElement = document.querySelector("ul.list-group")
        ulElement.appendChild(liElement)
    })

})
