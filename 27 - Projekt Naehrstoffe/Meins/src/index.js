"use strict"

require("../scss/index.scss")

const ProductSearch = require("./controllers/ProductSearch")
const ProductList = require("./controllers/ProductList")

// =====================================================================================================================

const productSearch = new ProductSearch(
    document.getElementById("productSearchInput"),
    document.getElementById("productSearchButton"),
    document.getElementById("productSearchResults")
)
productSearch.init()

// =====================================================================================================================

const productList = new ProductList(
    document.getElementById("productList")
)
productList.init()

// Wenn die Seite geladen wird, wird direkt ein produkt in der liste angelegt. ??
productList.addProduct(362759)

// Produktsuche Modul wird mit Produktlisten Modul verknüpft, fdcId wird an Funktion addProduct weitergegeben.
productSearch.events.on("productSelected", (fdcId) =>{
    productList.addProduct(fdcId)
})