import uuidv4 from 'uuid/v4'

let todos = []

function loadTodos () {
    const readtodos = localStorage.getItem('todos')

    try {
        todos =  readtodos ? JSON.parse(readtodos) : []
    } catch (e) {
        todos = []
    }
}

function saveTodos () {
    localStorage.setItem('todos',JSON.stringify(todos))
}


const getTodos = () => todos


const createTodo = (text) => {
    todos.push({
        id: uuidv4(),
        text,
        completed: false
    })
    saveTodos()
}

const removeTodo = (id) => {
    const toRemove = todos.findIndex(todo => todo.id === id)
    if (toRemove > -1 ) {
        todos.splice(toRemove,1)
        saveTodos()
    }
}

function toggleTodo (id) {
    const todoIndex = todos.findIndex(todo => todo.id === id)

    // if (todoIndex !== undefined) {  // other possible testing mode
    if (todoIndex > -1) {
        todos[todoIndex].completed = !todos[todoIndex].completed
        // valójában a DOM-ból kéne kivadászni az adott checkbox értékét:
        // todos[todoIndex].completed = document.getElementById('cbox-'+id).checked
        saveTodos()
    }
}


loadTodos()

export { loadTodos, getTodos, createTodo, removeTodo, toggleTodo }