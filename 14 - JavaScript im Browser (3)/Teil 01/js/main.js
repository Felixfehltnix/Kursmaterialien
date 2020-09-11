"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const closeButtons = document.querySelectorAll("[data-dismiss='alert']")

  for (const closeButton of closeButtons) {
    closeButton.addEventListener("click", () => {

      closeButton.parentElement.remove()
    })
  }
}) 