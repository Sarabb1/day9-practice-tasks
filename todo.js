const inputTodo = document.getElementById('todos');
const addButton = document.getElementById('btn');
const todoList = document.getElementById('todo-list');

function updateLocalStorage() {
    const todos = Array.from(todoList.children).map(li => li.textContent.replace('Remove', '').trim());
    localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo(todoText) {
    const listItem = document.createElement('li');
    listItem.textContent = todoText;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'x';
    removeButton.onclick = () => {
        todoList.removeChild(listItem);
        updateLocalStorage();
    };
    listItem.appendChild(removeButton);
    todoList.appendChild(listItem);
    updateLocalStorage();
}

addButton.addEventListener('click', () => {
    const todoText = inputTodo.value.trim();
    if (todoText) {
        addTodo(todoText);
        inputTodo.value = '';
    }
});

(JSON.parse(localStorage.getItem('todos')) || []).forEach(addTodo);