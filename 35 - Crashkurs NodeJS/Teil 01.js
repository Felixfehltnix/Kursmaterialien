"use strict"

const http = require ("http")
const {myDateTime} = require("../w3schools NodeJs/1/myfirstmodule");

const app = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('The date and time are currently : ' + myDateTime())
})

    app.listen(8081)