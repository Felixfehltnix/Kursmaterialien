"use strict"

document.addEventListener("DOMContentLoaded", () => {

  const helpElements = document.querySelectorAll("[data-help]")
  
  for(const helpElement of helpElements) {
    /*
    if (!helpElement.attributes["data-help"]) {
      continue
    }
    */
    helpElement.addEventListener("click", (event) => {
      event.preventDefault()

      const helpText = helpElement.attributes["data-help"].value
      alert(helpText)
    })
  }
}) 