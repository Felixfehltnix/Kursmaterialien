"use strict"

document.addEventListener("DOMContentLoaded", () => {
  
  const buttonIncrement = document.getElementById("button-increment")
  const buttonReset = document.getElementById("button-reset")

  /*
  const counterHeading = document.getElementById("counter-heading")
  buttonIncrement.addEventListener("click", () => {
    const currentCounter = parseInt(counterHeading.innerText.split(": ")[1], 10)
    counterHeading.innerText = "Anzahl Klicks: " + (currentCounter + 1)
  })

  buttonReset.addEventListener("click", () => {
    counterHeading.innerText = "Anzahl Klicks: 0"
  })
  */

  const counterNumber = document.getElementById("counter-number")

  buttonIncrement.addEventListener("click", () => {
    const currentCounter = parseInt(counterNumber.innerText, 10)
    counterNumber.innerText = currentCounter + 1
  })

  buttonReset.addEventListener("click", () => {
    counterNumber.innerText = "0"
  })
})