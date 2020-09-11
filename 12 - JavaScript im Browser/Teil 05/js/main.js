"use strict"

// Weitere Informationen zu document.readyState:
//   => https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState
// 
// readyState: loading -> interactive -> complete
console.log("ohne Callback:", document.readyState)

// DOMContentLoaded: Alle HTML-Elemente wurden erstellt,
// aber Bilder, etc. müssen evt. noch geladen werden
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded:", document.readyState)
})

// Die Seite ist fertig geladen!
window.addEventListener("load", () => {
  console.log("load:", document.readyState)
})