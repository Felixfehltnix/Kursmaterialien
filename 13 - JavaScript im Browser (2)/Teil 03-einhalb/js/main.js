"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const firstCardHeader = document.getElementsByClassName("card-header")[0]

  /*
  console.log(firstCardHeader.attributes[0])
  console.log(firstCardHeader.attributes[1])
  */

 /*
  console.log(firstCardHeader.attributes["class"])
  console.log(firstCardHeader.attributes.class)
  console.log(firstCardHeader.attributes["data-extra"])
  */


  const dataExtraAtrribute = firstCardHeader.attributes["data-extra"].value
  console.dir(dataExtraAtrribute)
}) 