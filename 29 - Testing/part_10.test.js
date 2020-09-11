"use strict"

const StudentModule = require("./part_09")

describe("StudentModule", () => {
  test("Constructor", () => {
    const s = new StudentModule()
    expect(s.students).not.toBeNull()
  })

  describe("addStudent", () => {
    test("it should add a student", () => {
      const s = new StudentModule()
      s.addStudent("Max Mustermann")
      
      expect(s.students.length).toBe(1)
      expect(s.students).toContain("Max Mustermann")
    })

    test("it should not add a student twice", () => {
      const s = new StudentModule()
      s.addStudent("Max Mustermann")
      s.addStudent("Max Mustermann")
      
      expect(s.students.length).toBe(1)
      expect(s.students).toContain("Max Mustermann")
    })
  })
  describe("removeStudent", () => {
    let s
    beforeEach(() => {
      s = new StudentModule()
      s.addStudent("Max Mustermann")
      s.addStudent("Erika Müller")
    })

    test("it should remove a student", () => {
      s.removeStudent("Max Mustermann")

      expect(s.students.length).toBe(1)
      expect(s.students).not.toContain("Max Mustermann")
      expect(s.students).toContain("Erika Müller")
    })

    test("it should not remove a student that doesn't exist", () => {
      s.removeStudent("Moritz Mustermann")

      expect(s.students.length).toBe(2)
      expect(s.students).toContain("Max Mustermann")
      expect(s.students).toContain("Erika Müller")
    })
  })

})