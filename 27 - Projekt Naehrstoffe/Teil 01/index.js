"use strict"

const ejs = require("ejs")

const products = [
  {
    id: 12345,
    title: "Apple, raw"
  },
  {
    id: 54321,
    title: "Cherry, packaged"
  }
]

ejs
  .renderFile("./templates/products.ejs", {
    title: "Obst",
    products
  })
  .then((out) => console.log(out))