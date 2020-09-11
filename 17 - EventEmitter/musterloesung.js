"use strict"

// Diese Übung besteht aus 2 Aufgaben - Scrolle also auf jeden Fall
// herunter!

// Aufgabe 1
//
// Wir sollen eine Todo-Verwaltung entwickeln, mit der ausstehende Aufgaben für
// ein Team von Programmierern verwaltet werden können.
// 
// Hierbei sind folgende Methoden zu implementieren:
// 
// 1a) Implementiere die Funktion "addTodo". Hier soll ein neues Todo
//     hinzugefügt werden - der Wert "done" von diesem Todo soll 
//     standardmäßig auf false gesetzt sein!
//
//     Wichtig: Es soll nur dann ein Todo hinzugefügt werden, wenn 
//     noch kein Todo mit dem gleichen titel existiert.
// 
//     Wenn ein Todo hinzugefügt wird, soll das Event "add" ausgelöst 
//     werden, als Parameter soll dann neu angelegte Todo übergeben werden.
//
// 1b) Implementiere die Funktion "completeTodo". Hier soll der Titel
//     eines Todos übergeben werden.
// 
//     Wird ein Todo dieses Titels gefunden, soll die Eigenschaft "done"
//     dieses Todos auf den Wert true gesetzt werden.
// 
//     Wenn ein Todo abgeschlossen wurde, soll das Event "complete"
//     ausgelöst werden - als Parameter soll auch wieder das Todo
//     übergeben werden.
//
// 1c) Ergänze die Funktion getTodoCount(). Diese Funktion soll
//     die Anzahl der Todos zurückgeben, bei denen "done" auf false steht - 
//     also die Anzahl der Todos, die noch ausstehend sind.
// 
//     Während dieser Berechnung muss kein Event gefeuert werden.


const todoModule = {
  todos: [
    {title: "HTML lernen", done: true},
    {title: "JavaScript lernen", done: false},
    {title: "Node.JS lernen", done: false}
  ],

  /**
   * @param {string} title 
   */
  addTodo(title) {
    for(const todo of this.todos) {
      if (todo.title === title) {
        return
      }
    }
    const newTodo = {
      title: title,
      done: false
    }
    this.todos.push(newTodo)
    this.emit("add", newTodo)
  },

 /**
  * @param {string} title 
  */
  completeTodo(title) {
    for(const todo of this.todos) {
      if (todo.title === title && todo.done === false) {
        todo.done = true
        this.emit("complete", todo)
      }
    }
  },

  /**
   * @returns {number}
   */
  getTodoCount() {
    let todoCount = 0
    for(const todo of this.todos) {
      if (todo.done === false) {
        todoCount++
      }
    }
    return todoCount
  },


  events: {},
  /**
   * Löst ein Ereignis aus. Dieser Funktion dürfen beliebig viele
   * params übergeben werden, diese werden 1:1 an die Event-Listener
   * durchgereicht. 
   * 
   * @param {string} eventName 
   * @param {*=} params 
   */
  emit(eventName, param) {
    if (eventName in this.events) {
      for(const f of this.events[eventName]) {
        f(param)
      }
    }
  },

  /**
   * Registriert einen Event-Listener für das Event eventName.
   * 
   * @param {string} eventName 
   * @param {Function} cb 
   */
  on(eventName, cb) {
    // Hier ist die Klammersetzung ganz wichtig!
    if (!(eventName in this.events)) {
      this.events[eventName] = []
    }
    this.events[eventName].push(cb)
  }
}

/*
todoModule.addTodo("TEST!")
todoModule.completeTodo("TEST!")
console.log(todoModule)
*/

// Aufgabe 2
// 
// Damit die Programmierer besser motiviert sind, soll ein Monitor
// fortlaufend die aktuelle Anzahl der Todos anzeigen.
//
// 2a) Sorge dafür, dass wann immer sich etwas bei den Todos ändert,
//     die jeweils aktuelle Anzahl über ein console.log ausgegeben wird!
//
// 2b) (Optional): Kommst mit nur einem Aufruf von der Funktion
//     todoModule.getTodoCount() aus?



/*
const printCurrentTodoCount = () => {
  let todoCount = todoModule.getTodoCount()
  console.log(todoCount)
}
printCurrentTodoCount()

todoModule.on("add", printCurrentTodoCount)
todoModule.on("complete", printCurrentTodoCount)
*/
let currentTodoCount = todoModule.getTodoCount()
console.log(currentTodoCount)

todoModule.on("add", () => {
  currentTodoCount++
  console.log(currentTodoCount)
})

todoModule.on("complete", () => {
  currentTodoCount--
  console.log(currentTodoCount)
})

// Registriere hier das Callback / den Event-Listener!


console.log("---")
todoModule.addTodo("Aufgaben abschließen")
// Nach dem obigen Aufruf soll die aktuelle Anzahl der offenen Todos ausgegeben
// werden - und zwar automatisch!

console.log("---")
todoModule.completeTodo("JavaScript lernen")
// Nach dem obigen Aufruf soll die aktuelle Anzahl der offenen Todos ausgegeben
// werden - und zwar automatisch!

console.log("---")
todoModule.completeTodo("JavaScript lernen")
// Nach dem obigen Aufruf soll nichts ausgegeben werden - das Todo mit dem Titel
// "JavaScript lernen" ist ja schon abgeschlossen

console.log("---")
todoModule.completeTodo("Gibt's nicht")
// Nach dem obigen Aufruf soll nichts ausgegeben werden - das Todo mit dem Titel
// "Gibt's nicht" gibt es nicht