"use strict"

const axios = require("axios")

// Produktsuche!
/*
axios
  .post("https://api.nal.usda.gov/fdc/v1/search", {
    generalSearchInput: "Cheddar Cheese"
  }, {
    auth: {
      username: "f30b8Dr9qFteNLSfCtaOIQX1SHHJSxOIrwfb87Vo"
    }
  })
  .then((response) => {
    console.log(response.data)
  })
*/

const fdcId = 380925

axios
  .get("https://api.nal.usda.gov/fdc/v1/" + fdcId, {
    auth: {
      username: "f30b8Dr9qFteNLSfCtaOIQX1SHHJSxOIrwfb87Vo"
    }
  })
  .then((response) => {
    console.log(response.data)
  })