"use strict"

const EventEmitter = require("eventemitter3")

const {search} = require("../api/product")
const {on} = require("../utilitys/dom")


// =====================================================================================================================
/**
 *
 * @param {HTMLElement} inputElement
 * @param {HTMLElement} buttonElement
 * @param {HTMLElement} resultElement
 * @constructor
 */
// constructor

function ProductSearch(inputElement, buttonElement, resultElement) {
    this.inputElement = inputElement
    this.buttonElement = buttonElement                                // Die Constructor Funktion erstellt, wenn sie aufgerufen wird ein neues objekt erstellt und zeigt mit this auf das neue objekt
    this.resultElement = resultElement                                // das neue objekt hat also die keys inputElement, button..., result..., events

    this.events = new EventEmitter()
}

// =====================================================================================================================

ProductSearch.prototype.init = function () {
    this.buttonElement.addEventListener("click", (event) => {
        event.preventDefault()

        const inputValue = this.inputElement.value
        this.runSearch(inputValue)
    })
    on(".product-search-result-item", "click", (event)=>{
        event.originalEvent.preventDefault()

        const fdcId = event.handleObj.getAttribute("data-fdcid")
        this.events.emit("productSelected", fdcId)
    })
}

// =====================================================================================================================

/**
 *
 * @param {string} term
 */
ProductSearch.prototype.runSearch = function (term) {
    search(term)
        .then((results) => {
            this.resultElement.innerHTML = ""

            for (const result of results) {
                const linkElement = document.createElement("a")
                linkElement.classList.add("list-group-item", "list-group-item-action", "product-search-result-item")
                linkElement.setAttribute("href", "#")
                linkElement.setAttribute("data-fdcid", result['fdcId'])
                linkElement.innerText = result["description"]
                this.resultElement.appendChild(linkElement)
            }
        })
}

module.exports = ProductSearch