"use strict"

let products = [
  {title: "Banane", carbs: 23, fat: 0.3, protein: 1},
  {title: "Kastanie", carbs: 28, fat: 1.4, protein: 2},
  {title: "Avocado", carbs: 9, fat: 15, protein: 2},
  {title: "Macadamia", carbs: 14, fat: 76, protein: 8},
  {title: "Zwiebel", carbs: 9, fat: 0.1, protein: 1.1},
]

// Aufgabe 1
//
// Gegeben ist eine Liste Nährwertangaben zu Produkten (pro 100g). 
// Diese sollst du per JavaScript auswerten und ein paar Fragen
// beantworten :) 
// 
// 1a) Ergänze über ein .map() zu jedem Produkt die `kcal`-Eigenschaft.
//     Du kannst hier von folgenden Werten ausgehen:
//      - 1g Fett: 9kcal
//      - 1g Protein: 4kcal
//      - 1g Kohlenhydrate: 4kcal
//
//     Hinweis: .map() erstellt ein neues Array. Du kannst dieses aber
//     zurück in die Variable schreiben lassen:
//     products = products.map(...)
products = products.map((item) => {
  return {
    ...item, 
    kcal: 9 * item.fat + 4 * item.carbs + 4 * item.protein
  }
})
console.log("products:", products)

// 1b) Schreibe ein Programm, welches prüft, ob es ein Produkt
//     mit mehr als 50g Fett gibt. Wenn ja, dann soll "true"
//     ausgegeben werden, wenn nicht, "false".
// 
//     Hinweis: Verwende hierzu keine for-Schleife, sondern eine der 
//              neuen Funktionen (aber nicht die .reduce()-Funktion)!
const exists = products.some(item => item.fat > 50)
console.log("exists:", exists)

// 1c) Kannst du 1b) auch mit einem .reduce() lösen? Wenn ja, wie?
const exists2 = products.reduce((prev, cur) => {
  if (prev) {
    return true
  } else {
    return cur.fat > 50
  }
}, false);
console.log("exists2:", exists2)

const exists3 = products.reduce((prev, cur) => prev || cur.fat > 50, false);
console.log("exists3:", exists3)

// 1d) Finde das Produkt, welches am meisten Fett enthält. 
//     Tipp: Hier gibt es mehrere Lösungen. 
// 
//     Möglichkeit 1: 
//       - Du holst dir die Eigenschaft `fat` von allen Produkten
//       - Anschließend ermittelst du, wie viel Fett das fettreichste
//         Produkt enthält
//       - Anschließend kannst du das Produkt über ein .find() suchen
const maxFat = Math.max(...products.map(item => item.fat))
const maxFatProduct = products.find(item => item.fat === maxFat)
console.log(maxFatProduct)

//     Möglichkeit 2 (effizienter, Bonus, optional, komplizierter):
//       - Du löst das gesamte Problem über ein .reduce(). Beachte hierbei
//         dass der initiale Wert / der Parameter `prev` sowie der
//         Rückgabewert des Callbacks nicht zwingend eine Zahl sein muss -
//         es darf auch ein Object sein:
// 
//         >> products.reduce((prev, cur) => {}, {key: "value"})
// 
//         Was für einen initialien Wert würde hier statt dem {key: "value"} 
//         sinn machen? 

const maxFatProduct2 = products.reduce((prev, cur) => {
  if (prev === null) return cur
  if (prev.fat > cur.fat) {
    return prev
  } else {
    return cur
  }
}, null)
console.log("maxFatProduct2:", maxFatProduct2)


const maxFatProduct3 = products.reduce((prev, cur) => (prev.fat > cur.fat) ? prev : cur, products[0])
console.log("maxFatProduct3:", maxFatProduct3)

