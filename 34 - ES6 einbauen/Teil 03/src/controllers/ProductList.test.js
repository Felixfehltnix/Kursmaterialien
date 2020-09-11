"use strict"

jest.mock("../api/product")
const productApi = require("../api/product")
console.log(productApi.info.mock)

import ProductList from "./ProductList"

describe("ProductList", () => {
  let productList, listElement

  beforeEach(() => {
    listElement = document.createElement("tbody")
    const tableElement = document.createElement("table")
    tableElement.appendChild(listElement)

    document.body.appendChild(tableElement)
    
    productList = new ProductList(listElement)
  })

  describe("init + addFetchedProduct", () => {
    beforeEach(() => {
      productList.addFetchedProduct({
        description: "TEST-Produkt",
        fdcId: "123456",
        foodNutrients: []
      })

      productList.init()
    })

    test("it should register a click on the remove button", () => {
      const removeButton = listElement
        .querySelector(".product-search__remove-product[data-fdc='123456']")
      expect(removeButton).not.toBeNull()

      productList.removeProduct = jest.fn()
      removeButton.click()

      expect(productList.removeProduct).toBeCalledWith("123456")
    })
  })

  describe("updateAmount", () => {
    beforeEach(() => {
      productList.products = [
        {
          amount: 100,
          product: {fdcId: "12345", foodNutrients: []}
        },
        {
          amount: 150,
          product: {fdcId: "33333", foodNutrients: []}
        }
      ]
    })
    test("it should update the amount", () => {
      productList.updateAmount("12345", 250)

      expect(productList.products.length).toBe(2)
      expect(productList.products[0].amount).toBe(250)
      expect(productList.products[1].amount).toBe(150)
    })

    test("it should ignore a fdcId that couldn't be found", () => {
      productList.updateAmount("123456", 250)

      expect(productList.products.length).toBe(2)
      expect(productList.products[0].amount).toBe(100)
      expect(productList.products[1].amount).toBe(150)
    })

    test("it should trigger an event: nutrientChange", done => {
      productList.events.on("nutrientChange", (nutrients) => {
        done()
      })
      productList.updateAmount("12345", 250)
    })
    
  })



  describe("addProduct", () => {
    test("it should add a product", () => {
      // https://jestjs.io/docs/en/mock-functions
      
      productList.addFetchedProduct = jest.fn()
      return productList.addProduct("555")
        .then(() => {
          expect(productList.addFetchedProduct).toBeCalled()
          expect(productList.addFetchedProduct.mock.calls.length).toBe(1)
        })
    })

    test("it should not add a product if it already exists", () => {
      productList.addFetchedProduct({
        description: "TEST-Produkt",
        fdcId: "123456",
        foodNutrients: []
      })

      productList.addFetchedProduct = jest.fn()
      return productList.addProduct("123456")
        .then(() => {
          expect(productList.addFetchedProduct).not.toBeCalled()
        })
    })


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