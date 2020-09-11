"use strict"


/*
 * Aufgaben:
 * 
 * 1)  Lagere die getAge()-Funktion in einen separates Objekt aus!
 *     Verknüpfe anschließend den Prototypen von student1 und student2
 *     mit dem neu angelegten Objekt
 *     
 * 2 ) Die Papierakten zu jedem Teilnehmer werden nach ihrem Geburtsjahr
 *     in verschiedenen Ordnern aufbewahrt. 
 * 
 *     Daher ist es wichtig, dass garantiert wird, dass das Geburtsjahr
 *     eines Teilnehmers nie nachträglich abgeändert wird - dann können
 *     die entsprechenden Papierakten nicht mehr gefunden werden.
 *     
 *     Stelle alyso sicher, dass die yearOfBirth-Eigenschaft nie verändert 
 *     wird!
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

const student1 = {
  firstname: "Max",
  lastname: "Müller",
  yearOfBirth: 1990,
  password: "supersicher",
  getAge() {
    const yearNow = (new Date()).getFullYear()
    return yearNow - this.yearOfBirth
  }
}

const student2 = {
  firstname: "Erika",
  lastname: "Mustermann",
  yearOfBirth: 1985,
  password: "hieraufkommtkeiner",
  getAge() {
    const yearNow = (new Date()).getFullYear()
    return yearNow - this.yearOfBirth
  }
}
// Das Alter sollte weiterhin ausgegeben werden
console.log("student1.getAge():", student1.getAge())
console.log("student2.getAge():", student2.getAge())


// Hier werden die Daten in JSON umgewandelt. Dies ist ein gängies
// Übertragungsformat, beispielsweise wenn wir diese Daten an eine
// Smartphone-App schicken möchten.
// 
// Hier sollte das Passwort nicht mit ausgegeben werden!
console.log("JSON.stringify(student1):", JSON.stringify(student1))
console.log("JSON.stringify(student2):", JSON.stringify(student2))