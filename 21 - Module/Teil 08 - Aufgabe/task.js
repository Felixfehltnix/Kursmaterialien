"use strict"

const axios = require("axios");



axios.get('https://sv443.net/jokeapi/v2/joke/Any')

    .then(function (response) {
        const data = response.data
        if (data.setup && data.delivery) {
            console.log(data.setup + "\n" + data.delivery);
        } else {
            console.log(data.joke)
        }
    })

    .catch(function (error) {
        console.log(error);
    })