"use strict"

require("../scss/index.scss")

const {search, info} = require("./api/product")

const testTemplate = require("./templates/test.ejs")
console.log(testTemplate({name: "TEST!"}))

search("Apple").then((res) => console.log(res))
info(171689).then((res) => console.log(res))