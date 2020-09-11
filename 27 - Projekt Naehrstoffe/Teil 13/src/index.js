"use strict"

require("../scss/index.scss")

const ProductSearch = require("./controllers/ProductSearch")
const ProductList = require("./controllers/ProductList")

const productSearch = new ProductSearch(
  document.getElementById("productSearchInput"),
  document.getElementById("productSearchButton"),
  document.getElementById("productSearchResults")
)
productSearch.init()

const productList = new ProductList(
  document.getElementById("productList")
)
productList.init()

productList.addProduct(362759)


productSearch.events.on("productSelected", (fdcId) => {
  productList.addProduct(fdcId)
})

