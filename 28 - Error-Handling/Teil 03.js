"use strict"

const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve("TEST"), 1000)
})

p.then((data) => {
  console.log(JSON.parse(data))
}).catch((err) => {
  console.log(err)
})