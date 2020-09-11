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

  test("it shoult initialize", () => {
    expect(productNutrients).not.toBeNull()
  })

  describe("setNutrients", () => {
    test("it should write carbs to DOM", () => {
      productNutrients.setNutrients({carbs: 100, protein: 0, fat: 0})
      expect(carbElement.textContent).toBe("100")
      expect(proteinElement.textContent).toBe("0")
      expect(fatElement.textContent).toBe("0")
    })

    test("it should write protein to DOM", () => {
      productNutrients.setNutrients({carbs: 0, protein: 100, fat: 0})
      expect(carbElement.textContent).toBe("0")
      expect(proteinElement.textContent).toBe("100")
      expect(fatElement.textContent).toBe("0")
    })

    test("it should write fat to DOM", () => {
      productNutrients.setNutrients({carbs: 0, protein: 0, fat: 100})
      expect(carbElement.textContent).toBe("0")
      expect(proteinElement.textContent).toBe("0")
      expect(fatElement.textContent).toBe("100")
    })

    test("it should write fat to DOM", () => {
      productNutrients.setNutrients({
        carbs: 3.3333333, 
        protein: 2.7777777, 
        fat: 7.123123123
      })
      expect(carbElement.textContent).toBe("3.33")
      expect(proteinElement.textContent).toBe("2.78")
      expect(fatElement.textContent).toBe("7.12")
    })
  })
})
