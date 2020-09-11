"use strict"

function on(selector, eventType, cb) {
  document.addEventListener(eventType, (event) => {
    let element = event.target

    while (element) {
      if (element.matches(selector)) {
        return cb({
          handleObj: element, 
          originalEvent: event
        })
      }
      element = element.parentElement
    }
  })
}


window.addEventListener('DOMContentLoaded', () => {

  on(".close", "click", (event) => {
    console.log("event:", event)
  })

  /*
  document.addEventListener("click", (event) => {
    let isButtonClicked = false

    let element = event.target
    while(element) {
      if (element.matches(".close")) {
        isButtonClicked = true
        break
      }
      element = element.parentElement
    }

    /*
    if (event.target.matches(".close")) {
      isButtonClicked = true
    } else {
      if (event.target.parentElement.matches(".close")) {
        isButtonClicked = true
      }
    }
    

    console.log("isButtonClicked:", isButtonClicked)
    console.log("event:", event)
  })
  */

  /*
  const buttons = document.getElementsByClassName("close")

  for(const button of buttons) {
    button.addEventListener("click", () => {
      alert("Button wurde geklickt!")
    })
  }
  */
})

