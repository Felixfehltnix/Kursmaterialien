"use strict"

document.addEventListener("DOMContentLoaded", () => {

    const cardHeaders = document.getElementsByClassName("card-header")


    for (const cardHeader of cardHeaders) {                // TODO: warum funktioniert die autocompletion nicht???
        const cardBody = cardHeader.nextElementSibling
        const icon = cardHeader.children[0].children[0]


        cardHeader.addEventListener("click", (event) => {
          event.preventDefault()                           // wenn JS nicht installiert ist dann zeige die aufgeklappte Seite.
          cardBody.classList.toggle("d-none")
            if(icon.classList.contains("fa-angle-double-down")){
              icon.classList.remove("fa-angle-double-down")
              icon.classList.add("fa-angle-double-right")
            } else {
              icon.classList.remove("fa-angle-double-right")
              icon.classList.add("fa-angle-double-down")
            }


        })
    }


})