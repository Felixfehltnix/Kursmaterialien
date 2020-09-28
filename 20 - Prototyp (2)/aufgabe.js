"use strict"

/*
 * Aufgaben:
 *
 * Hinweis: Diese Aufgaben ähneln den Aufgaben wie im letzten Abschnitt.
 *          Sie sind aber trotzdem komplett andere!
 *
 * 1)  Stelle den Code so um, dass ein neuer Teilnehmer über folgenden
 *     Befehl erstellt werden kann:
 * 
 *     >> new Student("Max", "Müller", 1990, "sehrsicher")
 * 
 *     Stelle anschließend das Array "students" auf die neue Schreibweise
 *     um. Lagere zudem die .getAge()-Funktion in den .prototype aus!
 *
 * 2 ) Die Papierakten zu jedem Teilnehmer werden nach ihrem Geburtsjahr
 *     in verschiedenen Ordnern aufbewahrt.
 *
 *     Daher ist es wichtig, dass garantiert wird, dass das Geburtsjahr
 *     eines Teilnehmers nie nachträglich abgeändert wird - dann können
 *     die entsprechenden Papierakten nicht mehr gefunden werden.
 *
 *     Stelle also sicher, dass die yearOfBirth-Eigenschaft nie verändert
 *     wird!
 * 
 *     Tipp: In der Konstruktor-Funktion kannst du problemlos ein 
 *           Object.defineProperty(this, "yearOfBirth", ...) verwenden!
 * 
 * 3)  Die Smartphone-App einer Sprachschule benötigt die Teilnehmerdaten
 *     als JSON. Leider wird dort das Passwort im Klartext übertragen!
 *
 *     Stelle daher sicher, dass die Eigenschaft "password" von beiden
 *     Teilnehmern nicht im JSON.stringify() auftaucht.
 *
 *     Tipp: Das funktioniert 1:1 so, wie wir vorher dafür gesorgt haben,
 *     dass ein Wert nicht in einem console.log auftaucht.
 */


function Movie(title, yearOfRelease, PG, password){
  this.title = title
  this.PG = PG
  Object.defineProperty(this, "yearOfRelease", {
    value: yearOfRelease,
    enumerable: true,
    configurable: false,
    writable: false
  })
  Object.defineProperty(this, "password", {
    value: password,
    enumerable: false,
    configurable: true,
    writable: true
  })
}

Movie.prototype.getAge = function (){
  const yearNow = (new Date()).getFullYear()
  return yearNow - this.yearOfRelease
}

const movies = [
    new Movie("Titanic", 1995, 13, "JamesCameronisbest"),
    new Movie("PickOfDestiny", 2001, 16, "tenaciousDatenschutz"),
]


// Das Alter sollte weiterhin ausgegeben werden
console.log("students[0].getAge():", movies[0].getAge())
console.log("students[1].getAge():", movies[1].getAge())


// Hier werden die Daten in JSON umgewandelt. Dies ist ein gängies
// Übertragungsformat, beispielsweise wenn wir diese Daten an eine
// Smartphone-App schicken möchten.
//
// Hier sollte das Passwort nicht mit ausgegeben werden!

console.log("JSON.stringify(students):", JSON.stringify(movies))