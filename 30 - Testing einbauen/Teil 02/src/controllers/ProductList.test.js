"use strict"

const ProductList = require("./ProductList")

describe("ProductList", () => {
  let productList, listElement

  beforeEach(() => {
    listElement = document.createElement("tbody")
    productList = new ProductList(listElement)
  })

  describe("addFetchedProduct", () => {
    const product = {
      description: "TEST-Produkt",
      fdcId: "123456",
      foodNutrients: []
    }

    test("It should add this product to this.products", () => {
      productList.addFetchedProduct(product)

      expect(productList.products.length).toBe(1)
      expect(productList.products[0].amount).toBe(100)
      expect(productList.products[0].product).toEqual(product)
    })


    test("It should generate correct HTML", () => {
      productList.addFetchedProduct(product)

      expect(
        listElement.querySelector("[data-testid='title']").textContent
      ).toBe("TEST-Produkt")

      expect(
        listElement.querySelector(".product-search__product-row").getAttribute("data-fdc")
      ).toBe("123456")

      expect(
        listElement.querySelector(".product-search__remove-product").getAttribute("data-fdc")
      ).toBe("123456")

    })

    test("It should trigger a nutrientChange event", done => {
      productList.events.on("nutrientChange", (nutrients) => {
        done()
      })
      productList.addFetchedProduct(product)
    })

  })

})