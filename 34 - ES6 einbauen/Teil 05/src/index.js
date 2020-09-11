"use strict"

import "../scss/index.scss"

import ProductSearch from "./controllers/ProductSearch"
import ProductList from "./controllers/ProductList"
import ProductNutrients from "./controllers/ProductNutrients"

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

const productNutrients = new ProductNutrients(
  document.getElementById("productNutrient--carbs"),
  document.getElementById("productNutrient--protein"),
  document.getElementById("productNutrient--fat")
)
productNutrients.init()



productSearch.events.on("productSelected", (fdcId) => {
  productList.addProduct(fdcId)
})

productList.events.on("nutrientChange", (nutrients) => {
  productNutrients.setNutrients(nutrients)
})