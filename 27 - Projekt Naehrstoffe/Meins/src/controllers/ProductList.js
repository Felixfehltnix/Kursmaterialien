"use strict"

import {info} from "../api/product"
import {on} from "../utilitys/dom"
import addProductTemplate from "../templates/productList/addProduct.ejs"
import loader from "../templates/productList/loader.ejs"
import EventEmitter from "eventemitter3"


// =====================================================================================================================

export default class ProductList {

    constructor(listElement) {
        this.listElement = listElement
        this.products = []                                               // Array soll alle Produkte speichern die in die Liste hinzugefügt werden.
        this.events = new EventEmitter()
    }

// =====================================================================================================================

    init() {
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

// Holt sich meine Nährstoffangaben und packt sie als Ereignis in meinen EventEmitter.
// =====================================================================================================================

    emitNutrients() {
        const nutrients = this.getNutrients()
        this.events.emit("nutrientChange", nutrients)
    }

// =====================================================================================================================

    getNutrientsPerProduct(product) {
        const getAmount = (number) => {
            const nutrient = product.product.foodNutrients
                .find(foodNutrient => foodNutrient.nutrient.number === number)
            if (nutrient) {
                return nutrient.amount
            } else {
                return 0
            }
        }
        const nutrients = {
            carbs: getAmount("205"),
            protein: getAmount("203"),
            fat: getAmount("204")
        }
        return {
            carbs: (nutrients.carbs / 100) * product.amount,
            protein: (nutrients.protein / 100) * product.amount,
            fat: (nutrients.fat / 100) * product.amount
        }
    }

    getNutrients() {
        return this.products
            .map(this.getNutrientsPerProduct, this)
            .reduce((prev, cur) => {
                prev.carbs += cur.carbs
                prev.protein += cur.protein
                prev.fat += cur.fat
                return prev
            }, {
                carbs: 0,
                protein: 0,
                fat: 0
            })
    }

// =====================================================================================================================

    updateAmount(fdcId, value) {
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
    removeProduct(fdcId) {
        let index = this.products
            .findIndex(product => product.product["fdcId"] === fdcId)          // geht den Index der Produkte im Array durch solange bis ein produkt gefunden wird welches als Eigenschaft fdcId die gleiche ID hat als die des geklickten products

        if (index !== null) {
            this.products.splice(index, 1)
            const trElement = document.querySelector(".product-tablerow-element[data-fdc='" + fdcId + "']")
            trElement.remove()
        }
        this.emitNutrients()
    }

// =====================================================================================================================

// läd Daten von der api, speichert sie in 'product'.
    async addProduct(fdcId) {
        const exists = this.products
            .find(product => product.product["fdcId"].toString() === fdcId.toString())
        if (exists) return alert("Produkte sollen nicht doppelt in die Liste aufgenommen werden.")

        this.listElement.insertAdjacentHTML("beforeend", loader())

        try {
            const product = await info(fdcId)
            this.addFetchedProduct(product)
            document.querySelector(".loader").remove()
        } catch (err) {
            document.querySelector(".loader").remove()
            alert("produkt konnte nicht hinzugefügt werden, bitte noch einmal versuchen.")
        }
    }


// =====================================================================================================================

    addFetchedProduct(product) {
        this.products.push({
            product: product,
            amount: 100
        })                                                                      // fügt das aufgerufene Produkt dem Array hinzu. Sorgt dafür das auf alle Eigenschaften des Produktes zugegriffen werden kann.
        const productHtml = addProductTemplate({                                // gibt die Daten an die ejs Datei weiter und ändert den Title Wert auf "description" Der Inhalt der variable ist einfacher html text
            title: product['description'],
            fdcId: product['fdcId']
        })
        // this.listElement.innerHTML = this.listElement.innerHTML + productHtml // !LANGSAM! schreibt den in der ejs Datei erzeugten html code in das listElement auf der DOM. Durch Innerhtml wird der text in die Html Baum struktur umgewandelt.
        this.listElement.insertAdjacentHTML("beforeend", productHtml)     // insertAdjacentHTML sorgt dafür das nur ein neues Element(tr) erstellt wird und nicht immer alle + 1

        this.emitNutrients()
    }
}