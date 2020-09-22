'use strict';
const KEY_ENTER = 13

document.addEventListener("DOMContentLoaded", () => {

    const TODOElement = document.querySelector(".new-todo")
    const TODOList = document.querySelector(".todo-list")
    const checkCount = document.querySelector(".todo-count").children[0]
    const footerElement = document.querySelector(".footer")
    const clearButton = document.querySelector(".clear-completed")
    const allButton = document.getElementById("all")
    const activeButton = document.getElementById("active")
    const completedButton = document.getElementById("completed")
    const checkAllButton = document.getElementById("toggle-all").nextElementSibling



//                             FUNCTIONS

// counts the unchecked entries and hides the Footer if there are none.

    function CountHideDel() {
        if (TODOList.children.length === 0) {
            footerElement.style.display = "none"
        } else {
            footerElement.style.display = ""
        }

        let counter = 0
        for (const TODOListItem of TODOList.children) {
            if (!TODOListItem.classList.contains("completed")) {
                counter++
            }
        }
        checkCount.innerText = counter.toString()

    }

// deletes the clicked entries and adds the "completed" Class to completed ones.

    function callBacksForLiElement(liElement) {
        const deleteButton = document.querySelector(".destroy")
        const checkBox = document.querySelector(".toggle")

        deleteButton.addEventListener("click", () => {
            liElement.remove()
            CountHideDel()
        })

        checkBox.addEventListener("change", () => {
            if (checkBox.checked === true) {
                liElement.classList.add("completed")
            } else {
                liElement.classList.remove("completed")
            }
            CountHideDel()
        })

    }

    CountHideDel()

//                                      EVENT LISTENER

// builds a new entry when enter is pressed and fills it with the Input value.

    TODOElement.addEventListener("keypress", (event) => {
        if (event.keyCode === KEY_ENTER && TODOElement.value !== "") {
            const text = TODOElement.value

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

            TODOList.prepend(liElement)

            callBacksForLiElement(liElement)
            CountHideDel()

            TODOElement.value = ""
        }
    })

// Deletes all checked entries when clear Button is clicked.

    clearButton.addEventListener("click", () => {
        const clearElements = TODOList.querySelectorAll(".completed")

        for (const clearElement of clearElements) {
            clearElement.remove()
        }
        CountHideDel()
    })

// Hides all entries but the completed ones.

    completedButton.addEventListener("click", () => {

        completedButton.classList.add("selected")
        allButton.classList.remove("selected")
        activeButton.classList.remove("selected")

        for (const TODOListItem of TODOList.children) {
            if (!TODOListItem.classList.contains("completed")) {
                TODOListItem.style.display = "none"
            } else {
                TODOListItem.style.display = ""
            }
        }
    })

// Hides all entries but the active ones.
    activeButton.addEventListener("click", () => {

        completedButton.classList.remove("selected")
        allButton.classList.remove("selected")
        activeButton.classList.add("selected")

        for (const TODOListItem of TODOList.children) {
            if (TODOListItem.classList.contains("completed")) {
                TODOListItem.style.display = "none"
            } else {
                TODOListItem.style.display = ""
            }
        }
    })

// shows all entries
    allButton.addEventListener("click", () => {

        completedButton.classList.remove("selected")
        allButton.classList.add("selected")
        activeButton.classList.remove("selected")

        for (const TODOListItem of TODOList.children) {
            TODOListItem.style.display = ""
        }
    })

})

