"use strict"

const fs = require("fs")

// Callback-Hell
setTimeout(() => {
  fs.exists("datei.txt", (exists) => {
    if (exists) {
      setTimeout(() => {
        fs.readFile("datei.txt", {encoding: "utf-8"}, (err, data) => {
          console.log("data:", data)
        })
      }, 1000)
    }
  })
}, 1000)
