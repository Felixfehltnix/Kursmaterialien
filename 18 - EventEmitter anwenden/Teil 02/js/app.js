'use strict';

const KEY_ENTER = 13

const todoModule = {
  todos: [],

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
        this.emit("changeTodo", todo)
      }
    }
  },
 /**
  * @param {string} title
  */
  unCompleteTodo(title) {
    for(const todo of this.todos) {
      if (todo.title === title && todo.done === true) {
        todo.done = false
        this.emit("changeTodo", todo)
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
    
    newInputCheckbox.addEventListener("change", (event) => {
      const checkboxChecked = newInputCheckbox.checked
      if (checkboxChecked) {
        todoModule.completeTodo(todo.title)
      } else {
        todoModule.unCompleteTodo(todo.title)
      }
    })

		const newDivElement = document.createElement("div")
		newDivElement.classList.add("view")
		newDivElement.appendChild(newInputCheckbox)
		newDivElement.appendChild(newLabelElement)
		newDivElement.appendChild(newButtonElement)

		const newLiElement = document.createElement("li")
		newLiElement.appendChild(newDivElement)

		elements.todoList.prepend(newLiElement)
  })
  
  // Wenn ein Todo fertiggestellt wird bzw. dies zurückgenommen wird
  todoModule.on("changeTodo", (todo) => {
    for(const liElement of elements.todoList.children) {
      const labelText = liElement.querySelector("label").innerText
      if (todo.title === labelText) {
        if (todo.done) {
          liElement.classList.add("completed")
        } else {
          liElement.classList.remove("completed")
        }
      }
    }
  })
	
	
	
});
