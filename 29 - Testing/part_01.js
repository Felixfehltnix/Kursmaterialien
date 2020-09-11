"use strict"

// Installation:
// => https://jestjs.io/docs/en/getting-started
// 
// (1) npm install --save-dev jest babel-jest @babel/core @babel/preset-env
// (2) babel.config.js anlegen!
// (3) In der package.json unter "scripts" -> "test": "jest" eintragen!

function add(a, b) {
  if (b === 0) {
    return -5
  }
  return a + b
}

module.exports.add = add