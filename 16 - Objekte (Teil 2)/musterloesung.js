"use strict"

// Aufgabe 1:
//
// Für eine Sprachschule sollen wir eine Teilnehmerverwaltung als ein
// Modul entwickeln.
// 
// 1a) Ergänze die Funktion "addStudent", sodass ein neuer Teilnehmer
//     hinzugefügt wird. Wichtig: Achte darauf, dass die "getName"-
//     Eigenschaft korrekt gesetzt ist!
// 
// 1b) Ergänze die Funktion printStudents(). Für jeden Student
//     soll die jeweilige "getName"-Funktion aufgerufen werden, 
//     und die Namen sollen dann möglichst anschaulich (z.B. 
//     untereinander) ausgegeben werden.

const getStudentName = function() {
  return this.lastname + ", " + this.firstname
}

const studentModule = {
  students: [
    {firstname: "Max", lastname: "Mustermann", getName: getStudentName}
  ],
  addStudent(firstname, lastname) {
    this.students.push({
      firstname: firstname,
      lastname: lastname,
      getName: getStudentName
    })
  },
  printStudents() {
    console.log("Teilnehmerliste:")
    for(const student of this.students) {
      console.log(" - " + student.getName())
    }
  },
}

studentModule.addStudent("Erika", "Mustermann")
studentModule.printStudents()

// Aufgabe 2
//
// Dieser Code soll alle Startvorgänge von SpaceX einlesen.
// Leider hat sich in den Code ein paar Fehler eingeschlichen,
// weil falsche Funktionstypen verwendet wurden.
//
// Tipp: Es sind 2 Probleme, die teilweise aufeinander aufbauen.
//
// Wie kannst du die Probleme lösen? Kannst du auch komplett ohne
// Fat-Arrow-Funktionen auskommen? Wie kann .bind() dir dabei 
// helfen?

const fs = require("fs")

const rocketModule = {
  launches: [],
  loadLaunches: function() {
    if (this.launches.length === 0) {
      console.log("Lese Raketenstarts ein...")
      /*
      fs.readFile(
        __dirname + "/spacex/launches.json", 
        {encoding: "utf-8"}, 
        (err, data) => {
          this.launches = JSON.parse(data)
        })
      */      
     /*
     fs.readFile(
        __dirname + "/spacex/launches.json", 
        {encoding: "utf-8"}, 
        (function(err, data) {
          this.launches = JSON.parse(data)
        }).bind(this))
    
        */
      
      const _this = this
      fs.readFile(
        __dirname + "/spacex/launches.json", 
        {encoding: "utf-8"}, 
        function(err, data) {
          _this.launches = JSON.parse(data)
        })
    }
  }
}

// Kommentiere folgenden Code ein!
rocketModule.loadLaunches()

// Gebe alle Startvorgänge aus... 
setTimeout(() => {
  console.log(rocketModule.launches)
}, 1000)