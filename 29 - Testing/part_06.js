"use strict"

const button = document.getElementById("counter")
let counter = parseInt(button.textContent, 10)

button.addEventListener("click", () => {
  counter++
  button.textContent = counter
})