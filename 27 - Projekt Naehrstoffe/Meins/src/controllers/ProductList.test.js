"use Strict"

import ProductList from "./ProductList"

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

            expect(listElement.querySelector(".product-tablerow-element")
                .getAttribute("data-fdc"))
                .toBe("123456")

            expect(listElement.querySelector(".product_search_addProduct-remove")
                .getAttribute("data-fdc"))
                .toBe("123456")

        })

        test("It should trigger a nutrientChange", done => {
            productList.events.on("nutrientChange", (nutrients)=>{
                done()
            })
            productList.addFetchedProduct(product)
        })


    })

})