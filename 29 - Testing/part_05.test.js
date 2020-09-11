"use strict"

// Schönerere Lösung: https://jestjs.io/docs/en/timer-mocks

import {resolveAsync, resolvePromise} from "./part_05"

test("resolveAsync should call callback", done => {
  resolveAsync((message) => {
    expect(message).toBe("Hallo Welt!")

    done()
  })
})

test("resolvePromise should resolve", () => {
  return resolvePromise().then((message) => {
    expect(message).toBe("Hallo Welt!")
  })
})


test("(Vorschau): resolvePromise should resolve", async () => {
  const message = await resolvePromise()
  expect(message).toBe("Hallo Welt!")
})