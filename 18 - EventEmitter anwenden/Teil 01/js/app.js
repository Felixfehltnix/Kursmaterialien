'use strict';

const KEY_ENTER = 13

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

document.addEventListener("DOMContentLoaded", () => {
	const elements = {
		newTodo: document.querySelector(".new-todo"),
		todoList: document.querySelector(".todo-list"), 
		footer: document.querySelector(".footer"),
		todoCount: document.querySelector(".todo-count strong"),
		clearCompleted: document.querySelector(".clear-completed"),
	}

	// Ein neues Todo soll hinzugefügt werden
	elements.newTodo.addEventListener("keypress", (event) => {
		if (event.keyCode === KEY_ENTER) {
			const todoTitle = elements.newTodo.value
			if (todoTitle !== "") {
				todoModule.addTodo(todoTitle)
			}
		}
	})

	// Wenn ein Todo hinzugefügt wird -> Zeige es im Browser an!
	todoModule.on("add", (todo) => {
		const newButtonElement = document.createElement("button")
		newButtonElement.classList.add("destroy")

		const newLabelElement = document.createElement("label")
		newLabelElement.appendChild(
			document.createTextNode(todo.title)
		)

		const newInputCheckbox = document.createElement("input")
		newInputCheckbox.type = "checkbox"
		newInputCheckbox.classList.add("toggle")

		const newDivElement = document.createElement("div")
		newDivElement.classList.add("view")
		newDivElement.appendChild(newInputCheckbox)
		newDivElement.appendChild(newLabelElement)
		newDivElement.appendChild(newButtonElement)

		const newLiElement = document.createElement("li")
		newLiElement.appendChild(newDivElement)

		elements.todoList.prepend(newLiElement)
	})
	
	
	
});
