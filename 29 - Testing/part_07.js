"use strict"

/**
 * @param {HTMLButtonElement} button 
 */
function makeCounter(button) {
  let counter = parseInt(button.textContent, 10)

  button.addEventListener("click", () => {
    counter++
    button.textContent = counter
  })
}

module.exports = makeCounter