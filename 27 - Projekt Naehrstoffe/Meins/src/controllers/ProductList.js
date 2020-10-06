"use strict"

const {info} = require("../api/product")
const addProductTemplate = require("../templates/productList/addProduct.ejs")
const {on} = require("../utilitys/dom")
const EventEmitter = require("eventemitter3")

// =====================================================================================================================

function ProductList(listElement) {
    this.listElement = listElement
    this.products = []                              // Array soll alle Produkte speichern die in die Liste hinzugefügt werden.

    this.events = new EventEmitter()
}

// =====================================================================================================================

ProductList.prototype.init = function () {
    on(".product_search_addProduct-remove", "click", (event) => {
        const fdcId = parseInt(event.handleObj.getAttribute("data-fdc"), 10)
        this.removeProduct(fdcId)
    })

    on(".product-search_amount", "change", (event) => {
        const fdcId = parseInt(event.handleObj.getAttribute("data-fdc"), 10)
        const value = parseInt(event.handleObj.value, 10)
        this.updateAmount(fdcId, value)
        this.getNutrients()
    })
}

// Holt sich meine Nährstoffangaben und packe sie als Ereigniss in meinen EventEmitter.
// =====================================================================================================================

ProductList.prototype.emitNutrients = function () {
    const nutrients = this.getNutrients()
    this.events.emit("nutrientChange", nutrients)
}

// =====================================================================================================================


ProductList.prototype.getNutrientsPerProduct = function (product) {
    const nutrients = {
        carbs: 0,
        protein: 0,
        fat: 0
    }

    for (const foodNutrient of product.product.foodNutrients) {
        const number = foodNutrient.nutrient.number

        if (number === "205") {
            nutrients.carbs = foodNutrient.amount
        }
        if (number === "204") {
            nutrients.fat = foodNutrient.amount
        }
        if (number === "203") {
            nutrients.protein = foodNutrient.amount
        }
    }
    return {
        carbs: (nutrients.carbs / 100) * product.amount,
        protein: (nutrients.protein / 100) * product.amount,
        fat: (nutrients.fat / 100) * product.amount
    }
}

ProductList.prototype.getNutrients = function () {
    const nutrients = {
        carbs: 0,
        protein: 0,
        fat: 0
    }
    for (const product of this.products) {
        const productNutrients = this.getNutrientsPerProduct(product)
        nutrients.carbs += productNutrients.carbs
        nutrients.protein += productNutrients.protein
        nutrients.fat += productNutrients.fat
    }
    return nutrients
}

// =====================================================================================================================


ProductList.prototype.updateAmount = function (fdcId, value) {
    for (const product of this.products) {
        if (product.product["fdcId"] === fdcId) {
            product.amount = value
            break
        }
    }
    this.emitNutrients()
}

// =====================================================================================================================
// entfernt ein Product(anhand fdcId gefunden) aus der ElementList
ProductList.prototype.removeProduct = function (fdcId) {
    let index = null
    for (const i in this.products) {                               // geht den Index der Produkte im Array durch solange bis ein produkt gefunden wird welches als Eigenschaft fdcId die gleiche ID hat als die des geklickten products
        const product = this.products[i]
        if (product.product["fdcId"] === fdcId) {
            index = i
            break
        }
    }
    if (index !== null) {
        this.products.splice(index, 1)
        const trElement = document.querySelector(".product-tablerow-element[data-fdc='" + fdcId + "']")
        trElement.remove()
    }
    this.emitNutrients()
}

// =====================================================================================================================

// läd daten von der api, speichert sie in 'product'.
ProductList.prototype.addProduct = function (fdcId) {
    // produkte sollen nicht doppelt hinzugefügt werden.
    for(const product of this.products){
        if (product.product["fdcId"].toString() === fdcId.toString()){
            return alert("Produkte sollen nicht doppelt in die Liste aufgenommen werden.")
        }
    }
//========================================================
    info(fdcId)
        .then((product) => {
            this.products.push({
                product: product,
                amount: 100
            })                           // fügt das aufgerufene Produkt dem Array hinzu. Sorgt dafür das auf alle Eigenschaften des Produktes zugegriffen werden kann.
            const productHtml = addProductTemplate({              // gibt die Daten an die ejs Datei weiter und ändert den Title Wert auf "description" Der Inhalt der variable ist einfacher html text
                title: product['description'],
                fdcId: product['fdcId']
            })
            // this.listElement.innerHTML = this.listElement.innerHTML + productHtml    // !LANGSAM! schreibt den in der ejs Datei erzeugten html code in das listElement auf der DOM. Durch Innerhtml wird der text in die Html Baum struktur umgewandelt.
            this.listElement.insertAdjacentHTML("beforeend", productHtml)    // insertAdjacentHTML sorgt dafür das nur ein neues Element(tr) erstellt wird und nicht immer alle + 1

            // this.getNutrients()
            this.emitNutrients()
        })
}

module.exports = ProductList