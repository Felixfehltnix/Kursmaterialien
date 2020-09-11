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
}

ProductList.prototype.removeProduct = function(fdcId) {
  let index = null
  for(const i in this.products) {
    const product = this.products[i]
    if (product['fdcId'] === fdcId) {
      index = i
      break
    }
  } 
  if (index !== null) {
    this.products.splice(index, 1)
  }

  console.log("this.products:", this.products)
}

ProductList.prototype.addProduct = function(fdcId) {
  info(fdcId)
    .then((product) => {
      this.products.push(product)
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