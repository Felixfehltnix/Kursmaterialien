"use strict"

const fs = require("fs")
// Synchrone vs. Asynchrone Funktionen

// Sync
/*
const content = fs.readFileSync("daten.txt", {encoding: "utf-8"})
console.log("content:", content)
*/

// Async

fs.readFile("daten.txt", {encoding: "utf-8"}, (err, data) => {
  console.log("data:", data)
})


/*
fs.readFile("daten2.txt", {encoding: "utf-8"}, (err, data) => {
  console.log("data:", data)
})

console.log("TEST!")
*/