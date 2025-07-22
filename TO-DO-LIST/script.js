document.getElementById('add-button').addEventListener('click', addTodo);

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText === '') {
        alert('Please enter a task.');
        return;
    }

    const todoList = document.getElementById('todo-list');
    const newTodoItem = document.createElement('li');
    newTodoItem.textContent = todoText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(newTodoItem);
    });

    newTodoItem.appendChild(deleteButton);
    todoList.appendChild(newTodoItem);

    todoInput.value = '';
}

