import { loadTodos, createTodo } from './todos'
import { renderTodos, refreshAlcim } from './views'
import { setFilters } from './filters'

document.querySelector('#searcher').addEventListener('input', function (e) {
    setFilters({
        searchText: e.target.value
    })
    console.log('set filters: ' +e.target.value)
    refreshAlcim()
    renderTodos ()
})
 

document.getElementById("new-form").addEventListener('submit', function(e){
    e.preventDefault()  // not to execute the default submit
    const newTodoText = e.target.newTodoText.value.trim()
    // check if there is anything inside the todo field
    if (newTodoText) {
        createTodo (newTodoText)
        renderTodos ()
        e.target.newTodoText.value= ''
    }
})


document.getElementById("hide-completed").addEventListener('change', function(e){
    setFilters({
        hideCompleted: e.target.checked
    })
    refreshAlcim()
    renderTodos()
})


// if there are more than one windows are open (or other reason why storage changes)
// let's load the new info and render.
window.addEventListener('storage', (e)=> {
    if (e.key === 'todos') {
        loadTodos()
        renderTodos()
    }
})



// initialize
console.log("elindultunk")
renderTodos()

