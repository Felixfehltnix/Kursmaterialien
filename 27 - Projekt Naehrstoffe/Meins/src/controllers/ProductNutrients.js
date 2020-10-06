"use Strict"

/**
 *
 * @param {HTMLElement} carbElement
 * @param {HTMLElement} proteinElement
 * @param {HTMLElement} fatElement
 * @constructor
 */
function ProductNutrients(carbElement, proteinElement, fatElement) {
    this.carbElement = carbElement
    this.proteinElement = proteinElement
    this.fatElement = fatElement
}

ProductNutrients.prototype.init = function () {

}

ProductNutrients.prototype.setNutrients = function (nutrients) {
    this.carbElement.innerText = nutrients.carbs.toFixed(2)
    this.proteinElement.innerText = nutrients.protein.toFixed(2)
    this.fatElement.innerText = nutrients.fat.toFixed(2)
}

module.exports = ProductNutrients