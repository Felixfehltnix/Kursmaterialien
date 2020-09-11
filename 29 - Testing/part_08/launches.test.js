"use strict"

jest.mock("./api")

const {getMessage} = require("./launches")

/*
 * Vorgehen:
 * 
 * - APIs werden im Normalfall gemockt
 * - API wird über separate Tests durchgetestet (optional)
 */

test("It should calculate the correct greeting!", () => {
  return getMessage().then((message) => {
    expect(message).toBe("Guten Flug für Rakete: Mars One Rakete!")
  })
})