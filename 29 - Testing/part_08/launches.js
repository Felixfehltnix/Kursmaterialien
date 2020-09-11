const api = require("./api")

function getMessage() {
  return api.getLastMission().then((name) => {
    return "Guten Flug für Rakete: " + name + "!"
  })
}

/*
getMessage().then((message) => {
  console.log(message)
})
*/

module.exports.getMessage = getMessage