"use Strict"


/**
 *
 * @param {HTMLElement} carbElement
 * @param {HTMLElement} proteinElement
 * @param {HTMLElement} fatElement
 * @constructor
 */
export default class ProductNutrients {
    constructor(carbElement, proteinElement, fatElement) {
        this.carbElement = carbElement
        this.proteinElement = proteinElement
        this.fatElement = fatElement
    }

    init() {
    }

    setNutrients(nutrients) {
        this.carbElement.innerText = nutrients.carbs.toFixed(2)
        this.proteinElement.innerText = nutrients.protein.toFixed(2)
        this.fatElement.innerText = nutrients.fat.toFixed(2)
    }
}
