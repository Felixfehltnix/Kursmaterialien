"use strict"

// const p = Promise.resolve("Hallo Welt")

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hallo Welt")
  }, 1000)
})
/*
const p2 = p.then((value) => {
  console.log("value:", value)

  // return Promise.resolve("!!!")
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("!!!"), 1000)
  })
})
p2.then((value) => {
  console.log("p2:", value)
})
*/

p
  .then((value) => {
    console.log("value:", value)
    // return Promise.resolve("!!!")
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("!!!"), 1000)
    })
  })
  .then((value) => {
    console.log("p2:", value)
  })