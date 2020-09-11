"use strict"

const axios = require("axios")

const url = "https://api.spacexdata.com/v3/launches/latest"
// const url = "https://downloads.codingcoursestv.eu/041%20-%20javascript/spacex.json"

const p = axios.get(url)

console.log(p)

p.then((response) => {
  // console.log(response.data)
})

p.then((response) => {
  console.log("Daten erfolgreich geladen!")
})