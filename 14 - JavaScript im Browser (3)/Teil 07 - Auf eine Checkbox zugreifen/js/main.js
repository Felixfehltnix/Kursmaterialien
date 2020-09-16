"use strict"

document.addEventListener("DOMContentLoaded", () => {
    const addStudentButton = document.getElementById("add-student")
    const StudentsList = document.getElementById("students-list")
    const inputElement = document.getElementById("nameInput")
    const agbInput = document.getElementById("agbInput")

    // const liElements = document.getElementsByTagName("li")           // TODO: warum werden die neuen Elemente nicht entfernt?
    // for (const liElement of liElements) {
    //     liElement.addEventListener("click", () => {
    //         liElement.remove()
    //     })
    // }



    let counter = 0
    addStudentButton.addEventListener("click", (event) => {
        event.preventDefault()

        if (agbInput.checked === false){
            alert("bitte AGB lesen!")
            return
        }


        const text = inputElement.value

        if (text === "") {
            return
        }

        const strongElement = document.createElement("strong")
        strongElement.appendChild(document.createTextNode(text))

        const liElement = document.createElement("li")
        liElement.classList.add("list-group-item")
        counter++
        if (counter % 2 === 0) {
            liElement.style.backgroundColor = "grey"
        }

        liElement.appendChild(strongElement)

        StudentsList.appendChild(liElement)

        inputElement.value = ""

        const liElements = document.getElementsByTagName("li")           // TODO: warum werden die alten Elemente "nicht" entfernt?
        for (const liElement of liElements) {
            liElement.addEventListener("click", () => {
                liElement.remove()
            })
        }
    })



})