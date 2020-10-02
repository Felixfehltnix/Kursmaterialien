"use strict"

const {info} = require("../api/product")
const addProductTemplate = require("../templates/productList/addProduct.ejs")
const {on} = require("../utilitys/dom")

// =====================================================================================================================

function ProductList(listElement) {
    this.listElement = listElement
    this.products = []                              // Array soll alle Produkte speichern die in die Liste hinzugefügt werden.
}

// =====================================================================================================================

ProductList.prototype.init = function () {
    on(".product_search_addProduct-remove", "click", (event) => {
        const fdcId = parseInt(event.handleObj.getAttribute("data-fdc"), 10)
        this.removeProduct(fdcId)
    })
}

// entfernt ein Product(anhand fdcId gefunden) aus der ElementList
ProductList.prototype.removeProduct = function (fdcId) {
    let index = null
    for (const i in this.products) {                               // geht den Index der Produkte im Array durch solange bis ein produkt gefunden wird welches als Eigenschaft fdcId die gleiche ID hat als die des geklickten products
        const product = this.products[i]
        if (product["fdcId"] === fdcId) {
            index = i
            break
        }
    }
    if (index !== null) {
        this.products.splice(index, 1)
        const trElement = document.querySelector(".product-tablerow-element[data-fdc='" + fdcId + "']")
        trElement.remove()
        }
    }

// läd daten von der api, speichert sie in 'product'.
ProductList.prototype.addProduct = function (fdcId) {
    info(fdcId)
        .then((product) => {
            this.products.push(product)                           // fügt das aufgerufene Produkt dem Array hinzu. Sorgt dafür das auf alle Eigenschaften des Produktes zugegriffen werden kann.
            console.log('this.products', this.products)
            const productHtml = addProductTemplate({              // gibt die Daten an die ejs Datei weiter und ändert den Title Wert auf "description" Der Inhalt der variable ist einfacher html text
                title: product['description'],
                fdcId: product['fdcId']
            })
            // this.listElement.innerHTML = this.listElement.innerHTML + productHtml    // !LANGSAM! schreibt den in der ejs Datei erzeugten html code in das listElement auf der DOM. Durch Innerhtml wird der text in die Html Baum struktur umgewandelt.
            this.listElement.insertAdjacentHTML("beforeend", productHtml)    // insertAdjacentHTML sorgt dafür das nur ein neues Element(tr) erstellt wird und nicht immer alle + 1

        })
}

module.exports = ProductList