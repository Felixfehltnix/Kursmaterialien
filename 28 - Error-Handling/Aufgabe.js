"use strict"

const fs = require("fs")

const FOLDER_NAME = "./existiert-nicht"

/*
 * Aufgabe 1: 
 *
 * Die Funktion readdirSync vom fs-Modul gibt eine Liste von Dateien
 * zurück, die in einem Ordner liegen. 
 * 
 * Fange den Fehler so ab, dass das Programm nicht mehr abbricht, wenn 
 * der Ordner nicht existiert!
 * 
 * Stattdessen soll eine verständliche Fehlermeldung ausgegeben werden.
 * 
 * Achtung: Sync()-Funktionen sind langsam, und sollten im Produktiv-Code
 * vermieden werden!
 */
const files = fs.readdirSync(FOLDER_NAME)
console.log("Im Ordner liegen: " + files.length + " Dateien")

/*
 * Aufgabe 2: 
 *
 * Die Funktion readdir vom fs-Modul gibt eine Liste von Dateien
 * zurück, die in einem Ordner liegen. 
 * 
 * Fange den Fehler so ab, dass das Programm nicht mehr abbricht, wenn 
 * der Ordner nicht existiert!
 * 
 * Stattdessen soll eine verständliche Fehlermeldung ausgegeben werden.
 */
fs.readdir(FOLDER_NAME, (err, files) => {
  console.log("Im Ordner liegen: " + files.length + " Dateien")
})

/*
 * Aufgabe 3: 
 *
 * Statt die Funktion readdir() direkt aufzurufen, können wir
 * auch eine neue Promise erstellen.
 * 
 * Klinke dich in die `filesAsPromise`-Promise ein, und sorge
 * dafür, dass der Fehler abgefangen wird!
 */
const filesAsPromise = new Promise((resolve, reject) => {
  fs.readdir(FOLDER_NAME, (err, files) => {
    if (err) return reject(err)
    resolve(files)
  })
})

// Nur Code ab hier ändern!
filesAsPromise.then((files) => {
  console.log("Im Ordner liegen: " + files.length + " Dateien")
})