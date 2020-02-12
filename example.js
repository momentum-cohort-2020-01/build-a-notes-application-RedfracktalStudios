function print(value) {
  console.log(value)
  return value
}

function q(selector) {
  return document.querySelector(selector)
}

function getAllTodos() {
  return fetch('http://localhost:3000/notes/', {
    method: 'GET'
  })
    .then(response => response.json())
}

function createTodosHTML(todos) {
  let todosStr = '<ul id="todos-list">'
  for (const todo of todos) {
    todosStr += createTodoHTML(todo)
  }
  todosStr += '</ul>'
  return todosStr

  // same as
  // return `<ul id="todos-list">${todos.map(todo => `<li>${todo.todo}</li>`).join('')}</ul>`
}

function createTodoHTML(todo) {
  return `<li data-todo-id="${todo.id}">${todo.todo} <button class="delete">Delete</button></li>`
}

function postNewTodo(titleText, bodyText) {
  return fetch('http://localhost:3000/notes/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: titleText,
      body: bodyText,
      // done: false,
      // created: moment().format()
    })
  })
    .then(response => response.json())
}

// function renderTodosList(todos) {
//   const todosHTML = createTodosHTML(todos)
//   const todosSection = document.querySelector('#todos')
//   todosSection.innerHTML = todosHTML
// }

function renderNewTodo(todo) {
  const todoHTML = createTodoHTML(todo)
  const todosList = document.querySelector('#todos-list')
  todosList.insertAdjacentHTML('beforeend', todoHTML)
}

// getAllTodos().then(renderTodosList)

document.getElementById('btnSave').addEventListener('click', event => {

  const noteTitleField = q('#noteTitle')
  const noteBodyField = q('#noteBody')
  const titleText = noteTitleField.value
  const bodyText = noteBodyField.value

  postNewTodo(titleText, bodyText)
})

// q('#todos').addEventListener('click', event => {
//   if (event.target.matches('.delete')) {
//     print('delete ' + event.target.parentElement.dataset.todoId)
//     // TODO send AJAX request to delete todo
//     // TODO remove li with dataset-todo-id equal to id from the DOM
//   }
// })

//this is mine
// function postNote(noteText) {
//   return fetch('http://localhost:3000/notes/', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ "title": "Hi", "body": "COOL" })()
//   })