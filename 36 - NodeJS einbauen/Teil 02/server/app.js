"use strict"

const http = require("http")
const url = require("url")
const querystring = require('querystring');
const servePublic = require("./public")

const {search, info} = require("./api")

const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url)

  if (parsedUrl.pathname.substr(0, 8) === "/public/") {
    return servePublic(parsedUrl, res)
  }
  if (parsedUrl.pathname.substr(0, 5) === "/api/") {
    if (parsedUrl.pathname === "/api/search") {
      const parsedQuery = querystring.parse(parsedUrl.query)
      if ("q" in parsedQuery) {
        const q = "" + parsedQuery["q"]
        search(q)
          .then((data) => {
            res.writeHead("200", {"Content-Type": "application/json"})
            res.write(JSON.stringify(data))
            res.end()
          })
        console.log("Gesucht wurde nach: ", q)
      }
      
    }
   
  }

})

app.listen(8081)