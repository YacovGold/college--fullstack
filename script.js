let _todos = []
let _isFilterByActive = undefined

function refreshList() {
    let list = _todos

    if (_isFilterByActive !== undefined) {
        list = list.filter(v => v.isActive === _isFilterByActive)
    }

    let html = ''
    for (let i = 0; i < list.length; i++) {
        const todo = list[i]
        html += `<div><input type="checkbox" ${todo.isActive ? '' : 'checked'} id="cb_${i}" onclick="toggle(${i})"><label for="cb_${i}">${todo.title}</label><button class="btn" onclick="del(${i})"><i class="fa fa-trash"></i></button></div>`
    }

    document.getElementById('list').innerHTML = html
}

function add(title) {
    const tb = document.getElementById('tb')
    _todos.push({ title: tb.value, isActive: true })
    refreshList()
    tb.value = ''
}

function del(index) {
    _todos.splice(index, 1)
    refreshList()
}

function toggle(index) {
    todo = _todos[index]
    todo.isActive = todo.isActive === false
    refreshList()
}

function filter(isFilterByActive) {
    _isFilterByActive = isFilterByActive
    refreshList()
}