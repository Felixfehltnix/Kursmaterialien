"use strict"

// const p = Promise.resolve("Hallo Welt")

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hallo Welt")
  }, 1000)
})

p.then((value) => {
  console.log("value: ", value)
})