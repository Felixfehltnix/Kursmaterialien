"use strict"

const ProductNutrients = require("./ProductNutrients")

describe("ProductNutrients", () => {
    let carbElement, proteinElement, fatElement, productNutrients

    beforeEach(() => {
        carbElement = document.createElement("span")
        proteinElement = document.createElement("span")
        fatElement = document.createElement("span")

        productNutrients = new ProductNutrients(
            carbElement,
            proteinElement,
            fatElement
        )
    })

    test("it should initialize", () => {
        expect(productNutrients).not.toBeNull()
    })

    describe("setNutrients", () => {

        test("it should write carbs to DOM", () => {
            productNutrients.setNutrients({carbs: 100, protein: 0, fat: 0})
            expect(carbElement.innerText).toBe("100.00")
            expect(proteinElement.innerText).toBe("0.00")
            expect(fatElement.innerText).toBe("0.00")
        })

        test("it should write protein to DOM", () => {
            productNutrients.setNutrients({carbs: 0, protein: 100, fat: 0})
            expect(carbElement.innerText).toBe("0.00")
            expect(proteinElement.innerText).toBe("100.00")
            expect(fatElement.innerText).toBe("0.00")
        })

        test("it should write fat to DOM", () => {
            productNutrients.setNutrients({carbs: 0, protein: 0, fat: 100})
            expect(carbElement.innerText).toBe("0.00")
            expect(proteinElement.innerText).toBe("0.00")
            expect(fatElement.innerText).toBe("100.00")
        })

    })
})