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

  const cardHeaders = document.getElementsByClassName("card-header")

  for(const cardHeader of cardHeaders) {
    cardHeader.style.cursor = "pointer"

    cardHeader.addEventListener("click", (event) => {
      const cardBody = cardHeader.nextElementSibling
      // const cardIcon = cardHeader.children[0].children[0]
      const cardIcon = cardHeader.querySelector(".card-toggle-icon")

      cardBody.classList.toggle("d-none")

      if (cardBody.classList.contains("d-none")) {
        cardIcon.classList.remove("fa-angle-double-down")
        cardIcon.classList.add("fa-angle-double-right")
      } else {
        cardIcon.classList.remove("fa-angle-double-right")
        cardIcon.classList.add("fa-angle-double-down")
      }

      console.log("Card Header wurde geklickt", cardBody)
    })
  }
}) 