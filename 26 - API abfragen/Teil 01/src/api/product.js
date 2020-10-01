"use strict"

const axios = require("axios")

const auth = {
    username: "mNsLkfeN1lSZdWiAhsgPGs7WJkB6BWI8g7sYjq8t"
}

//=====================================================================================
// Produktsuche

module.exports.search = function search(term) {
    return axios
        .post("https://api.nal.usda.gov/fdc/v1/foods/search", {generalSearchInput: term}, {auth})
        .then((res) => {
            return res.data['foods']
        })
}

//=====================================================================================
// Nährwertangabe

module.exports.info = function info(id) {
    return axios
        .get("https://api.nal.usda.gov/fdc/v1/" + id, {auth: auth})
        .then((response) => response.data)
}






