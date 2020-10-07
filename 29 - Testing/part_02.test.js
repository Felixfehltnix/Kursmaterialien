"use strict"

const generateGreeting = require("./part_02");

test("it should generate a message",()=>{
    const greeting = generateGreeting("Felix")
    expect(greeting.indexOf("Felix") !== -1).toBe(true);
})