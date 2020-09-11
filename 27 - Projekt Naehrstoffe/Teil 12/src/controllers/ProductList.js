"use strict"

const {info} = require("../api/product")
const {on} = require("../utils/dom")
const addProductTemplate = require("../templates/ProductList/addProduct.ejs")

/**
 * 
 * @param {HTMLTableElement} listElement 
 */
function ProductList(listElement) {
  this.products = []
  
  this.listElement = listElement

}

ProductList.prototype.init = function() {
  on(".product-search__remove-product", "click", (event) => {
    const fdcId = parseInt(event.handleObj.getAttribute("data-fdc"), 10)
    this.removeProduct(fdcId)
  })

  on(".product-search__amount", "change", (event) => {
    const fdcId = parseInt(event.handleObj.getAttribute("data-fdc"), 10)
    const value = parseInt(event.handleObj.value, 10)
    this.updateAmount(fdcId, value)
  })
}

ProductList.prototype.getNutrients = function() {
  return {
    carbs: 0,
    protein: 0,
    fat: 0
  }
}

ProductList.prototype.updateAmount = function(fdcId, value) {
  for(const product of this.products) {
    if (product.product['fdcId'] === fdcId) {
      product.amount = value
      break
    }
  }
  console.log("updateAmount:", this.products)
}

ProductList.prototype.removeProduct = function(fdcId) {
  let index = null
  for(const i in this.products) {
    const product = this.products[i]
    if (product.product['fdcId'] === fdcId) {
      index = i
      break
    }
  } 
  if (index !== null) {
    this.products.splice(index, 1)

    const trElement = document.querySelector(
      ".product-search__product-row[data-fdc='" + fdcId + "']"
    )
    if (trElement) trElement.remove()
  }

  console.log("this.products:", this.products)
}

ProductList.prototype.addProduct = function(fdcId) {
  info(fdcId)
    .then((product) => {

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
    })
}

module.exports = ProductList