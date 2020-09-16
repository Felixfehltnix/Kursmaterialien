'use strict';

const KEY_ENTER = 13

document.addEventListener("DOMContentLoaded", () => {

    const inputElement = document.querySelector(".new-todo")
    const TODOList = document.querySelector(".todo-list")
    const TODOCount = document.querySelector(".todo-count").children[0]

    let counter = 0


    // Function builds a list Element
    const addNewTODO = () => {
        const text = inputElement.value

        const labelElement = document.createElement("label")
        labelElement.appendChild(document.createTextNode(text))
        const checkBox = document.createElement("input")
        checkBox.classList.add("toggle")
        checkBox.setAttribute("type", "checkbox")
        const destroyButton = document.createElement("button")
        destroyButton.classList.add("destroy")

        const divElement = document.createElement("div")
        divElement.classList.add("view")
        divElement.appendChild(checkBox)
        divElement.appendChild(labelElement)
        divElement.appendChild(destroyButton)

        const liElement = document.createElement("li")
        liElement.appendChild(divElement)

        TODOList.appendChild(liElement)
    }


// Waits for Enter and adds ListElement
    inputElement.addEventListener("keydown", (event) => {
        if (event.keyCode === KEY_ENTER) {
            addNewTODO()
            counter++
            inputElement.value = ""
        }
        // Counts the Enter Inputs and outputs the amount.
        TODOCount.innerText = counter
    })




});
