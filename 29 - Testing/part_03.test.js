"use strict"

const {students, addStudent} = require("./part_03")

beforeEach(() => {
  students.splice(0, students.length)
  students.push("Max Mustermann")
})

test("It should add a student", () => {
  addStudent("Max Müller")

  expect(students.length).toBe(2)
  expect(students).toContain("Max Müller")
})

test("It should not add a student if she/he exists already", () => {
  addStudent("Max Mustermann")

  expect(students.length).toBe(1)
})