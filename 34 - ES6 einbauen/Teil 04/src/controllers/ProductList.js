"use strict"

import {info} from "../api/product"
import {on} from "../utils/dom"
import addProductTemplate from "../templates/ProductList/addProduct.ejs"
import EventEmitter from "eventemitter3"

export default class ProductList {
  /**
   * @param {HTMLTableElement} listElement 
   */
  constructor(listElement) {
    this.products = []
    this.listElement = listElement
    this.events = new EventEmitter()
  }

  init() {
    on(".product-search__remove-product", "click", (event) => {
      const fdcId = parseInt(event.handleObj.getAttribute("data-fdc"), 10)
      this.removeProduct("" + fdcId)
    })
  
    on(".product-search__amount", "change", (event) => {
      const fdcId = parseInt(event.handleObj.getAttribute("data-fdc"), 10)
      const value = parseInt(event.handleObj.value, 10)
      this.updateAmount("" + fdcId, value)
    })
  }

  emitNutrients() {
    const nutrients = this.getNutrients()
    this.events.emit("nutrientChange", nutrients)
  }

  getNutrientsForProduct(product) {

    const getAmount = (number) => {
      const nutrient = product.product.foodNutrients
        .find((foodNutrient) => ("" + foodNutrient.nutrient.number) === number)
      if (nutrient) {
        return nutrient.amount
      } else {
        return 0
      }
    }

    // https://github.com/tc39/proposal-optional-chaining
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
      .map(this.getNutrientsForProduct, this)
      .reduce((prev, cur) => {
        prev.carbs+=cur.carbs
        prev.protein+=cur.protein
        prev.fat+=cur.fat
        return prev
      }, {
        carbs: 0,
        protein: 0,
        fat: 0
      })
  }

  updateAmount(fdcId, value) {
    for(const product of this.products) {
      if (("" + product.product['fdcId']) === ("" + fdcId)) {
        product.amount = value
        break
      }
    }
    this.emitNutrients()
  }

  removeProduct(fdcId) {
    let index = this.products
      .findIndex(product => ("" + product.product['fdcId']) === ("" + fdcId))

    if (index !== null) {
      this.products.splice(index, 1)
  
      const trElement = document.querySelector(
        ".product-search__product-row[data-fdc='" + fdcId + "']"
      )
      if (trElement) trElement.remove()
    }
  
    this.emitNutrients()
  }

  async addProduct(fdcId) {
    const exists = this.products
      .find(product => ("" + product.product['fdcId']) === ("" + fdcId))

    if (exists) return

    try {
      const product = await info(fdcId)
      this.addFetchedProduct(product)
    } catch(e) {
      alert("Produkt konnte nicht hinzugefügt werden, bitte nochmal probieren!")
    }
  }

  addFetchedProduct(product) {
    this.products.push({
      amount: 100,
      product
    })
    console.log("this.products:", this.products)
  
    const productHtml = addProductTemplate({
      title: product['description'],
      fdcId: product['fdcId']
    })
  
    // this.listElement.innerHTML = this.listElement.innerHTML + productHtml
    this.listElement.insertAdjacentHTML("beforeend", productHtml)
    // console.log(productHtml)
  
    // this.getNutrients()
  
    this.emitNutrients()
  }
}
