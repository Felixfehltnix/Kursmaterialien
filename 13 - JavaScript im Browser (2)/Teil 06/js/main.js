"use strict"

document.addEventListener("DOMContentLoaded", ()=> {

  const cardElements = document.getElementsByClassName("card")

  for (const cardElement of cardElements){

    // console.log(cardElement.attributes["style"].value)

    if (cardElement.style["background-color"] === "") {
      cardElement.style["background-color"] = "grey"
    }

    console.log(cardElement.style["background-color"])

cardElement.addEventListener("click", ()=>{
  cardElement.style["display"]="none";
})


  }




})