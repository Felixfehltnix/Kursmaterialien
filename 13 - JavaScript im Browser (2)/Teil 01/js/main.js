"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const cardHeaders = document.getElementsByClassName("card-header")
  console.log("cardHeaders", cardHeaders)

  for(const cardHeader of cardHeaders) {
    console.log("cardHeader", cardHeader)

    cardHeader.addEventListener("click", () => {
      alert("Card-Header wurde angeklickt!")
    })
  }

  const paragraphs = document.getElementsByTagName("p")
  console.log("paragraphs:", paragraphs)
}) 