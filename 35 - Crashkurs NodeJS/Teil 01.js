"use strict"

const http = require("http")


const app = http.createServer((req, res)=>{
  console.log("Funktion wurde aufgerufen!")

  res.writeHead(404, "text")

  res.write("Hallo")
  res.write(" ")


  setTimeout(()=>{
    res.end("Welt!")
  },5000)

})




app.listen(8090)