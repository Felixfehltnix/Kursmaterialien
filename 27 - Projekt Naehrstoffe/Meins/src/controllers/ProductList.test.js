"use Strict"

const ProductList = require("./ProductList")

describe("ProductList", () => {
    let productList, listElement


    beforeEach(() => {
        listElement = document.createElement("tbody")
        productList = new ProductList(listElement)
    })

    describe("addFetchedProduct", () => {
        let product = {
            description: "Test-Product",
            fdcId: "123456",
            foodNutrients: []
        }

        test("It should add this product to this.products", () => {
            productList.addFetchedProduct(product)

            expect(productList.products.length).toBe(1)
            expect(productList.products[0].amount).toBe(100)
            expect(productList.products[0].product).toBe(product)
        })

        test("It should generate correct HTML", () => {
            productList.addFetchedProduct(product)

            expect(listElement.querySelector("#testId").textContent)
                .toBe("Test-Product")

        })


    })

})