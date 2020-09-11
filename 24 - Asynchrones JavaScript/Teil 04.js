"use strict"

const b = function b() {
  console.log("B wurde ausgeführt!")
}

const a = function a() {
  const text = "A()!"
  b()
  console.log(text)
}

console.log("START!")

debugger

a()

