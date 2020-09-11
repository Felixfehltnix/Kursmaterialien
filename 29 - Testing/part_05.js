"use strict"

function resolveAsync(cb) {
  setTimeout(function() {
    cb("Hallo Welt!")
  }, 1000)
}

function resolvePromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hallo Welt!"), 1000)
  })
}

module.exports.resolveAsync = resolveAsync
module.exports.resolvePromise = resolvePromise