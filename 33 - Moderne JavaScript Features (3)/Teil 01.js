"use strict"

const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve("TEST!"), 1000)
})

const e = new Promise((resolve, reject) => {
  setTimeout(() => reject("TEST!"), 1000)
})

async function run() {
  try {
    const value = await p
    console.log(value)

    const value2 = await e
    console.log(value2)
  } catch(err) {
    console.log("err:", err)
  }
}

const f = async () => {
  
}

run()