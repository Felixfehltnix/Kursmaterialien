'use strict';

const KEY_ENTER = 13

const TodoModule = require("./TodoModule")


document.addEventListener("DOMContentLoaded", () => {
  const todoModule = new TodoModule()

	const elements = {
		newTodo: document.querySelector(".new-todo"),
		todoList: document.querySelector(".todo-list"), 
		footer: document.querySelector(".footer"),
		todoCount: document.querySelector(".todo-count strong"),
		clearCompleted: document.querySelector(".clear-completed"),
  }
  
  // Button: Fertiggestellte Todos löschen!
  elements.clearCompleted.addEventListener("click", (event) => {
    todoModule.removeCompletedTodos()
  })

	// Ein neues Todo soll hinzugefügt werden
	elements.newTodo.addEventListener("keypress", (event) => {
		if (event.keyCode === KEY_ENTER) {
			const todoTitle = elements.newTodo.value
			if (todoTitle !== "") {
        todoModule.addTodo(todoTitle)
        elements.newTodo.value = ""
			}
		}
	})

	// Wenn ein Todo hinzugefügt wird -> Zeige es im Browser an!
	todoModule.on("add", (todo) => {
		const newButtonElement = document.createElement("button")
    newButtonElement.classList.add("destroy")
    
    newButtonElement.addEventListener("click", (event) => {
      todoModule.removeTodo(todo.id)
    })

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
        todoModule.completeTodo(todo.id)
      } else {
        todoModule.unCompleteTodo(todo.id)
      }
    })

		const newDivElement = document.createElement("div")
		newDivElement.classList.add("view")
		newDivElement.appendChild(newInputCheckbox)
		newDivElement.appendChild(newLabelElement)
		newDivElement.appendChild(newButtonElement)

    const newLiElement = document.createElement("li")
    newLiElement.setAttribute("data-id", todo.id)
    newLiElement.appendChild(newDivElement)


		elements.todoList.prepend(newLiElement)
  })

  // Wenn ein Todo gelöscht wird!
  todoModule.on("remove", (todo) => {
    const liElement = elements.todoList.querySelector("li[data-id='" + todo.id + "']")
    liElement.remove()
  })
  
  // Wenn ein Todo fertiggestellt wird bzw. dies zurückgenommen wird
  todoModule.on("changeTodo", (todo) => {
    // "li[data-id='3']"
    const liElement = elements.todoList.querySelector("li[data-id='" + todo.id + "']")
    if (todo.done) {
      liElement.classList.add("completed")
    } else {
      liElement.classList.remove("completed")
    }
  })
  // UUID

  // Footer-Anzeige aktualisieren
  const refreshFooter = () => {
    elements.todoCount.innerText = todoModule.getTodoCount()
  }
	todoModule.on("add", refreshFooter)
	todoModule.on("remove", refreshFooter)
	todoModule.on("changeTodo", refreshFooter)
	
	
});
