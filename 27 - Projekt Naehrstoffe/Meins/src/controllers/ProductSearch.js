"use strict"

import EventEmitter from "eventemitter3"
import {search} from "../api/product"
import {on} from "../utilitys/dom"


// =====================================================================================================================
/**
 *
 * @param {HTMLElement} inputElement
 * @param {HTMLElement} buttonElement
 * @param {HTMLElement} resultElement
 * @constructor
 */

export default class ProductSearch {
    constructor(inputElement, buttonElement, resultElement) {

        this.inputElement = inputElement
        this.buttonElement = buttonElement                                // Die Constructor Funktion erstellt, wenn sie aufgerufen wird ein neues objekt erstellt und zeigt mit this auf das neue objekt
        this.resultElement = resultElement                                // das neue objekt hat also die keys inputElement, button..., result..., events

        this.events = new EventEmitter()
    }

// =====================================================================================================================

    init() {
        this.buttonElement.addEventListener("click", (event) => {
            event.preventDefault()

            const inputValue = this.inputElement.value
            this.runSearch(inputValue)
        })
        on(".product-search-result-item", "click", (event) => {
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
    runSearch(term) {
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
            .catch((err) => {
                alert("es ist ein Fehler aufgetreten, bitte nochmal neu nach dem Produkt suchen.")
            })

    }
}
