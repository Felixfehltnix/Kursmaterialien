"use strict"

const axios = require("axios")

// CORS
module.exports.getLastMission = function() {
  return axios.get("http://downloads.codingcoursestv.eu/041%20-%20javascript/spacex-testing.php")
    .then((response) => {
      return response.data['mission_name']
    })
}