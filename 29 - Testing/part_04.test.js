"use strict"

const StudentModule = require("./part_04")

test("It should add a student", () => {
  const studentModule = new StudentModule()

  studentModule.addStudent("Max Müller")

  expect(studentModule.students.length).toBe(1)
  expect(studentModule.students).toContain("Max Müller")
})

test("It should not add a student twice", () => {
  const studentModule = new StudentModule()

  studentModule.addStudent("Max Müller")
  studentModule.addStudent("Max Müller")

  expect(studentModule.students.length).toBe(1)
  expect(studentModule.students).toContain("Max Müller")
})