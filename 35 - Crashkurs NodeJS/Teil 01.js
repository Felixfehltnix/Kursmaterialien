"use strict"

const http = require("http")


const app = http.createServer((req, res) => {
  console.log("Funktion wurde aufgerufen!")

  res.end("Hallo!")
})

app.listen(8090)