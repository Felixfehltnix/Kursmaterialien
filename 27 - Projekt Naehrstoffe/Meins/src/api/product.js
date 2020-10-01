"use strict"

const axios = require("axios")

const auth = {
  username: "mNsLkfeN1lSZdWiAhsgPGs7WJkB6BWI8g7sYjq8t"
}

module.exports.search = function search(term) {
  return axios
    .post("https://api.nal.usda.gov/fdc/v1/search", {
      generalSearchInput: term
    }, {auth})
    .then((response) => response.data['foods'])
}

module.exports.info = function info(fdcId) {
  return axios
    .get("https://api.nal.usda.gov/fdc/v1/" + fdcId, {auth})
    .then((response) => response.data)
}

