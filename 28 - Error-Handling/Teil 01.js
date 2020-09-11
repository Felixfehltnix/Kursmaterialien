"use strict"

const json = '{"name": "Max}'

try {
  console.log(JSON.parse(json))
  console.log(JSON.parse(json))
  
} catch(e) {

  console.log(e)
}


console.log("----")