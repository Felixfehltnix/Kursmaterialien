"use strict"

document.addEventListener("DOMContentLoaded", () => {

  const dateElement = document.getElementById("date-countdown")

  const onClickDateElement = () => {
    dateElement.innerText = "24.07.2021"
    console.log("dateElement wurde geklickt!")
  }

  dateElement.addEventListener("click", onClickDateElement)

  dateElement.addEventListener("mouseenter", () => {
    dateElement.innerText = "24.07.2020"
  })

  dateElement.addEventListener("mouseleave", () => {
    dateElement.innerText = "24.07.2019"
  })
  

  
})
