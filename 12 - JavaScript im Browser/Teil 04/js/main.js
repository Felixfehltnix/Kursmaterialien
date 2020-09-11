"use strict"

// Das document-Object
console.log(document)

// Auf den Seitentitel zugreifen
console.log(document.title)

// Titel der Seite verändern
document.title = "Hallo Welt!"

// Auf die aktuelle URL zugreifen
console.log(document.location.href)

// Auch auf diese dürften wir schreibend zugreifen...
// dann würde der Browser aber die neue Seite aufrufen
// document.location.href = "https://google.com"