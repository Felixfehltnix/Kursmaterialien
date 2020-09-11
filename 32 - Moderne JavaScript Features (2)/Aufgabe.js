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

// 1b) Schreibe ein Programm, welches prüft, ob es ein Produkt
//     mit mehr als 50g Fett gibt. Wenn ja, dann soll "true"
//     ausgegeben werden, wenn nicht, "false".
// 
//     Hinweis: Verwende hierzu keine for-Schleife, sondern eine der 
//              neuen Funktionen (aber nicht die .reduce()-Funktion)!

// 1c) Kannst du 1b) auch mit einem .reduce() lösen? Wenn ja, wie?

// 1d) Finde das Produkt, welches am meisten Fett enthält. 
//     Tipp: Hier gibt es mehrere Lösungen. 
// 
//     Möglichkeit 1: 
//       - Du holst dir die Eigenschaft `fat` von allen Produkten
//       - Anschließend ermittelst du, wie viel Fett das fettreichste
//         Produkt enthält
//       - Anschließend kannst du das Produkt über ein .find() suchen
// 
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

