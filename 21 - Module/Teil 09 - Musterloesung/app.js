"use strict"

const axios = require("axios")

axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(function (response) {
    const data = response.data
    console.log(data.disclaimer)
    console.log("Der aktuelle Bitcoin-Kurs ist: " + data.bpi.EUR.rate_float)
    // console.log(data)
  })
  .catch(function (error) {
    console.log(error)
  })