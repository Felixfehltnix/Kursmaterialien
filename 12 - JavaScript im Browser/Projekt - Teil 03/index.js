"use strict"

document.addEventListener("DOMContentLoaded", () => {
  


  /*
  // Lösungsansatz (1)

  const buttonIncrement = document.getElementById("button-increment")
  const buttonReset = document.getElementById("button-reset")

  const counterHeading = document.getElementById("counter-heading")
  buttonIncrement.addEventListener("click", () => {
    const currentCounter = parseInt(counterHeading.innerText.split(": ")[1], 10)
    counterHeading.innerText = "Anzahl Klicks: " + (currentCounter + 1)
  })

  buttonReset.addEventListener("click", () => {
    counterHeading.innerText = "Anzahl Klicks: 0"
  })
  */

  /* 
  // Lösungsansatz (2) 

  const buttonIncrement = document.getElementById("button-increment")
  const buttonReset = document.getElementById("button-reset")

  const counterNumber = document.getElementById("counter-number")
  buttonIncrement.addEventListener("click", () => {
    const currentCounter = parseInt(counterNumber.innerText, 10)
    counterNumber.innerText = currentCounter + 1
  })

  buttonReset.addEventListener("click", () => {
    counterNumber.innerText = "0"
  })
  */

  // Lösungsansatz 3
  const buttonIncrement = document.getElementById("button-increment")
  const buttonReset = document.getElementById("button-reset")
  const counterNumber = document.getElementById("counter-number")
  
  let currentCounter = parseInt(counterNumber.innerText, 10)
  
  buttonIncrement.addEventListener("click", () => {
    currentCounter++
    counterNumber.innerText = currentCounter
  })

  buttonReset.addEventListener("click", () => {
    currentCounter = 0
    counterNumber.innerText = currentCounter
  })

})