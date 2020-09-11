"use strict"

document.addEventListener("DOMContentLoaded", () => {

  const helpElements = document.querySelectorAll("[data-help]")
  for(const helpElement of helpElements) {
    helpElement.addEventListener("click", (event) => {
      event.preventDefault()

      const helpText = helpElement.attributes["data-help"].value
      alert(helpText)
    })
  }

  const cardElements = document.getElementsByClassName("card")
  for(const cardElement of cardElements) {
    if (cardElement instanceof HTMLElement) {
      if (cardElement.style.backgroundColor === "") {
        cardElement.style.backgroundColor = "darkblue"
      }

      cardElement.addEventListener("click", () => {
        cardElement.style.display = "none"
      })
    }
  }

}) 