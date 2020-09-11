"use strict"

// import {search, info} from "./api/product"

/*
const productApi = require("./api/product")
const search = productApi.search
const info = productApi.info
*/

const {search, info} = require("./api/product")

/*
search("Apple")
  .then((res) => {
    console.log(res)
  })
  */

info(171689).then((res) => console.log(res))