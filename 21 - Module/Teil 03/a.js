"use strict"

module.exports.f = function() {
  console.log("Ich bin die a.js")
  const a = 5
  console.log(a + 5)
}

/*
const f = () => {
  console.log("Ich bin die a.js")
  const a = 5
  console.log(a + 5)
}

module.exports = {
  f: f
}
*/
