import { getTodos, toggleTodo, removeTodo } from './todos'
import { getFilters } from './filters'


const renderTodos = function () {
    const todosEl = document.getElementById('todos')
    const filters = getFilters()
    let filteredTodos = getTodos().filter( function (e) {
        return ( e.text.toLowerCase().includes(filters.searchText.toLowerCase()) && !(e.completed && filters.hideCompleted ))
    })
    todosEl.innerHTML = ''

    // if filtering is active, add .filter--active to the div.actions
    if ( (filters.searchText.length > 0 ) || filters.hideCompleted ) {
        document.querySelector('div.actions').classList.add('filter--active')
        console.log('Filter is active')
    } else {
        document.querySelector('div.actions').classList.remove('filter--active')
        console.log('Filter off')
    }

    // build up every todo
    if (filteredTodos.length > 0) {
        filteredTodos.forEach(element => {
            todosEl.appendChild(generateTodoDOM(element))
        })
    } else {
        const message = document.createElement('p')
        message.textContent = 'No to-dos to show'
        message.classList.add('empty-message')
        todosEl.appendChild(message)
    }
    
    generateSummaryDOM(filteredTodos)    

}




function generateTodoDOM (element) {
    const cbox = document.createElement('input')
    const p = document.createElement('span')
    const ujElem = document.createElement('label')   // -> label, hogy a benne lévő chkboxot ne kelljen eltalálni
    const containerEl = document.createElement('div')
    const ujGomb = document.createElement('button')

    // ujElem (label)
    //   left: chkbox, text
    //   right: container pushed to the right
    //         in container: remove button

    // setup checkbox
    cbox.setAttribute('type', 'checkbox')
    cbox.setAttribute('id', 'cbox-'+element.id)
    if (element.completed) cbox.checked = true
        cbox.addEventListener('change', function() {
        toggleTodo(element.id)
        renderTodos()
    })
    
    // setup text
    p.textContent = element.text
    if (element.completed) p.textContent += ' [completed]'
    // else p.textContent += ' [__TODO__]'
    
    // setup button    
    ujGomb.textContent = 'Remove'
    ujGomb.addEventListener('click', function() {
        // in closure -> most elérhető az element objektum
        removeTodo(element.id)
        renderTodos()
    })

    // styles
    ujElem.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    ujGomb.classList.add('button', 'button--text')
    
    //build
    ujElem.appendChild(cbox)
    ujElem.appendChild(p)
    containerEl.appendChild(ujGomb)
    ujElem.appendChild(containerEl)
    return ujElem
    
}



function generateSummaryDOM (filteredTodos) {
    // összesítő legalsó sor hozzáadása
    const incompleteTodos = filteredTodos.filter( todo => !todo.completed)
    const allIncompleteTodos = getTodos().filter( todo => !todo.completed)
    const summary = document.createElement('h2')
    if (allIncompleteTodos.length) {
        // we have some incomplete todos
        summary.textContent = `${incompleteTodos.length} not completed todo${(incompleteTodos.length === 1) ? '' : 's'} displayed (${allIncompleteTodos.length} total)`
    } else {
        summary.textContent = 'You have nothing to do! :)'
    }

    summary.classList.add('list-title')
    document.getElementById('todos').appendChild(summary)
}


const refreshAlcim = function () {

    // this function is not needed anymore.

    // document.querySelector('#alcim').textContent = 'Filter: '  + document.querySelector('#searcher').value + ((getFilters().hideCompleted) ? '': '')
    // document.querySelector('#alcim').textContent = 'Filter: '  
}


export { generateTodoDOM, renderTodos, generateSummaryDOM, refreshAlcim }