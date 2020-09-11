"use strict"

document.addEventListener("DOMContentLoaded", () => {

  const contactButton = document.getElementById("contact-me")

  /*
  const onClick = (event) => {
    console.log(event)
    alert("Kontakt wurde geklickt!")
  }
  contactButton.addEventListener("click", onClick)
  */

  contactButton.addEventListener("click", (event) => {
    event.preventDefault()
    alert("Kontakt wurde geklickt!")
  })
  
})
