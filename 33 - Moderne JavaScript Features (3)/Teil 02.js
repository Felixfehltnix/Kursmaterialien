"use strict"

const axios = require("axios")

const url = "http://downloads.codingcoursestv.eu/041%20-%20javascript/spacex.json"

async function run() {
  const res = await axios.get(url)
  return res.data
}

async function f() {
  const data = await run()
  
}
run()

