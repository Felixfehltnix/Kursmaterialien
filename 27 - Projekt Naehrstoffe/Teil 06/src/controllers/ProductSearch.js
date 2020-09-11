"use strict"

const {search} = require("../api/product")

/**
 * 
 * @param {HTMLInputElement} inputElement 
 * @param {HTMLButtonElement} buttonElement 
 * @param {HTMLDivElement} resultElement
 */
function ProductSearch(inputElement, buttonElement, resultElement) {
  this.inputElement = inputElement
  this.buttonElement = buttonElement
  this.resultElement = resultElement
}

ProductSearch.prototype.init = function() {
  this.buttonElement.addEventListener("click", (event) => {
    event.preventDefault()

    const inputValue = this.inputElement.value
    this.runSearch(inputValue)
  })
}

/**
 * @param {String} term
 */
ProductSearch.prototype.runSearch = function(term) {
  search(term)
    .then((results) => {
      this.resultElement.innerHTML = ""

      for(const result of results) {
        const linkElement = document.createElement("a")
        linkElement.classList.add("list-group-item")
        linkElement.classList.add("list-group-item-action")
        linkElement.classList.add("product-search--result-item")
        linkElement.setAttribute("href", "#")
        linkElement.setAttribute("data-fdcid", result['fdcId'])
        linkElement.innerText = result['description']

        this.resultElement.append(linkElement)
      }

      console.log("results:", results)


    })
}

module.exports = ProductSearch