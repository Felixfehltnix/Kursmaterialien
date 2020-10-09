"use strict"

import "../scss/index.scss"

import ProductSearch from "./controllers/ProductSearch"
import ProductList from "./controllers/ProductList"
import ProductNutrients from "./controllers/ProductNutrients"


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

// =====================================================================================================================

const productNutrients = new ProductNutrients(
    document.getElementById("productNutrient--carbs"),
    document.getElementById("productNutrient--protein"),
    document.getElementById("productNutrient--fat")
)
productNutrients.init()



// =====================================================================================================================


// Wenn die Seite geladen wird, wird direkt ein produkt in der liste angelegt. (Besser zum testen)
productList.addProduct(362759)

// Produktsuche Modul wird mit Produktlisten Modul verknüpft, fdcId wird an Funktion addProduct weitergegeben.
productSearch.events.on("productSelected", (fdcId) =>{
    productList.addProduct(fdcId)
})

productList.events.on("nutrientChange", (nutrients) =>{
    productNutrients.setNutrients(nutrients)
})