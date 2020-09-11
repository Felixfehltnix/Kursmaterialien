"use strict"

const axios = require("axios")

const url = "https://downloads.codingcoursestv.eu/041%20-%20javascript/budapest.php"

axios.get(url).then((response) => {
  console.log("Heute wird es:", response.data['temperature'])
  const tomorrowUrl = response.data['tomorrow']

  return axios.get(tomorrowUrl)
}).then((response2) => {
  console.log("Morgen wird es:", response2.data['temperature'])
})