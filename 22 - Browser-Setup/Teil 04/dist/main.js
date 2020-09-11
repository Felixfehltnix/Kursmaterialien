/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/TodoModule.js":
/*!***************************!*\
  !*** ./src/TodoModule.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar getId = function () {\n  var counter = 1;\n  return function () {\n    counter++;\n    return counter;\n  };\n}();\n\nfunction TodoModule() {\n  this.todos = [];\n  this.events = {};\n}\n/**\n * @param {string} title\n */\n\n\nTodoModule.prototype.addTodo = function (title) {\n  var newTodo = {\n    id: getId(),\n    title: title,\n    done: false\n  };\n  this.todos.push(newTodo);\n  this.emit(\"add\", newTodo);\n};\n\nTodoModule.prototype.removeCompletedTodos = function () {\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = this.todos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var todo = _step.value;\n\n      if (todo.done) {\n        this.removeTodo(todo.id);\n      }\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n        _iterator[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n};\n/** \n * @param {number} id \n */\n\n\nTodoModule.prototype.removeTodo = function (id) {\n  for (var index in this.todos) {\n    var todo = this.todos[index];\n\n    if (todo.id === id) {\n      this.todos.splice(index, 1);\n      this.emit(\"remove\", todo);\n    }\n  }\n};\n/**\n * @param {number} id\n */\n\n\nTodoModule.prototype.completeTodo = function (id) {\n  var _iteratorNormalCompletion2 = true;\n  var _didIteratorError2 = false;\n  var _iteratorError2 = undefined;\n\n  try {\n    for (var _iterator2 = this.todos[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n      var todo = _step2.value;\n\n      if (todo.id === id && todo.done === false) {\n        todo.done = true;\n        this.emit(\"changeTodo\", todo);\n      }\n    }\n  } catch (err) {\n    _didIteratorError2 = true;\n    _iteratorError2 = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion2 && _iterator2[\"return\"] != null) {\n        _iterator2[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError2) {\n        throw _iteratorError2;\n      }\n    }\n  }\n};\n/**\n * @param {number} id\n */\n\n\nTodoModule.prototype.unCompleteTodo = function (id) {\n  var _iteratorNormalCompletion3 = true;\n  var _didIteratorError3 = false;\n  var _iteratorError3 = undefined;\n\n  try {\n    for (var _iterator3 = this.todos[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n      var todo = _step3.value;\n\n      if (todo.id === id && todo.done === true) {\n        todo.done = false;\n        this.emit(\"changeTodo\", todo);\n      }\n    }\n  } catch (err) {\n    _didIteratorError3 = true;\n    _iteratorError3 = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion3 && _iterator3[\"return\"] != null) {\n        _iterator3[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError3) {\n        throw _iteratorError3;\n      }\n    }\n  }\n};\n/**\n * @returns {number}\n */\n\n\nTodoModule.prototype.unCompleteTodo = function () {\n  var todoCount = 0;\n  var _iteratorNormalCompletion4 = true;\n  var _didIteratorError4 = false;\n  var _iteratorError4 = undefined;\n\n  try {\n    for (var _iterator4 = this.todos[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {\n      var todo = _step4.value;\n\n      if (todo.done === false) {\n        todoCount++;\n      }\n    }\n  } catch (err) {\n    _didIteratorError4 = true;\n    _iteratorError4 = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion4 && _iterator4[\"return\"] != null) {\n        _iterator4[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError4) {\n        throw _iteratorError4;\n      }\n    }\n  }\n\n  return todoCount;\n};\n/**\n * Löst ein Ereignis aus. Dieser Funktion dürfen beliebig viele\n * params übergeben werden, diese werden 1:1 an die Event-Listener\n * durchgereicht.\n *\n * @param {string} eventName\n * @param {*=} params\n */\n\n\nTodoModule.prototype.emit = function (eventName, param) {\n  if (eventName in this.events) {\n    var _iteratorNormalCompletion5 = true;\n    var _didIteratorError5 = false;\n    var _iteratorError5 = undefined;\n\n    try {\n      for (var _iterator5 = this.events[eventName][Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {\n        var f = _step5.value;\n        f(param);\n      }\n    } catch (err) {\n      _didIteratorError5 = true;\n      _iteratorError5 = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion5 && _iterator5[\"return\"] != null) {\n          _iterator5[\"return\"]();\n        }\n      } finally {\n        if (_didIteratorError5) {\n          throw _iteratorError5;\n        }\n      }\n    }\n  }\n};\n/**\n * Registriert einen Event-Listener für das Event eventName.\n *\n * @param {string} eventName\n * @param {Function} cb\n */\n\n\nTodoModule.prototype.on = function (eventName, cb) {\n  // Hier ist die Klammersetzung ganz wichtig!\n  if (!(eventName in this.events)) {\n    this.events[eventName] = [];\n  }\n\n  this.events[eventName].push(cb);\n};\n\nmodule.exports = TodoModule;\n\n//# sourceURL=webpack:///./src/TodoModule.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar KEY_ENTER = 13;\n\nvar TodoModule = __webpack_require__(/*! ./TodoModule */ \"./src/TodoModule.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var todoModule = new TodoModule();\n  var elements = {\n    newTodo: document.querySelector(\".new-todo\"),\n    todoList: document.querySelector(\".todo-list\"),\n    footer: document.querySelector(\".footer\"),\n    todoCount: document.querySelector(\".todo-count strong\"),\n    clearCompleted: document.querySelector(\".clear-completed\") // Button: Fertiggestellte Todos löschen!\n\n  };\n  elements.clearCompleted.addEventListener(\"click\", function (event) {\n    todoModule.removeCompletedTodos();\n  }); // Ein neues Todo soll hinzugefügt werden\n\n  elements.newTodo.addEventListener(\"keypress\", function (event) {\n    if (event.keyCode === KEY_ENTER) {\n      var todoTitle = elements.newTodo.value;\n\n      if (todoTitle !== \"\") {\n        todoModule.addTodo(todoTitle);\n        elements.newTodo.value = \"\";\n      }\n    }\n  }); // Wenn ein Todo hinzugefügt wird -> Zeige es im Browser an!\n\n  todoModule.on(\"add\", function (todo) {\n    var newButtonElement = document.createElement(\"button\");\n    newButtonElement.classList.add(\"destroy\");\n    newButtonElement.addEventListener(\"click\", function (event) {\n      todoModule.removeTodo(todo.id);\n    });\n    var newLabelElement = document.createElement(\"label\");\n    newLabelElement.appendChild(document.createTextNode(todo.title));\n    var newInputCheckbox = document.createElement(\"input\");\n    newInputCheckbox.type = \"checkbox\";\n    newInputCheckbox.classList.add(\"toggle\");\n    newInputCheckbox.addEventListener(\"change\", function (event) {\n      var checkboxChecked = newInputCheckbox.checked;\n\n      if (checkboxChecked) {\n        todoModule.completeTodo(todo.id);\n      } else {\n        todoModule.unCompleteTodo(todo.id);\n      }\n    });\n    var newDivElement = document.createElement(\"div\");\n    newDivElement.classList.add(\"view\");\n    newDivElement.appendChild(newInputCheckbox);\n    newDivElement.appendChild(newLabelElement);\n    newDivElement.appendChild(newButtonElement);\n    var newLiElement = document.createElement(\"li\");\n    newLiElement.setAttribute(\"data-id\", todo.id);\n    newLiElement.appendChild(newDivElement);\n    elements.todoList.prepend(newLiElement);\n  }); // Wenn ein Todo gelöscht wird!\n\n  todoModule.on(\"remove\", function (todo) {\n    var liElement = elements.todoList.querySelector(\"li[data-id='\" + todo.id + \"']\");\n    liElement.remove();\n  }); // Wenn ein Todo fertiggestellt wird bzw. dies zurückgenommen wird\n\n  todoModule.on(\"changeTodo\", function (todo) {\n    // \"li[data-id='3']\"\n    var liElement = elements.todoList.querySelector(\"li[data-id='\" + todo.id + \"']\");\n\n    if (todo.done) {\n      liElement.classList.add(\"completed\");\n    } else {\n      liElement.classList.remove(\"completed\");\n    }\n  }); // UUID\n  // Footer-Anzeige aktualisieren\n\n  var refreshFooter = function refreshFooter() {\n    elements.todoCount.innerText = todoModule.getTodoCount();\n  };\n\n  todoModule.on(\"add\", refreshFooter);\n  todoModule.on(\"remove\", refreshFooter);\n  todoModule.on(\"changeTodo\", refreshFooter);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });