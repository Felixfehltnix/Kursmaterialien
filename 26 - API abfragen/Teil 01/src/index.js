"use strict"

// const productApi = require("./api/product")
//
// const search = productApi.search
// const info = productApi.info

const {search, info} = require("./api/product")

// search("Apple").then((response)=>{
//     console.log(response)
// })

info(169909).then((res)=>{
    console.log(res)
    })