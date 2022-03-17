const add_button = document.querySelector('button');
const todo_list = document.getElementById('todo-list');

add_button.addEventListener('click', () => {
    let add_input = document.getElementById('add-input');
    
    let checkbox = document.createElement('input');
    let description = document.createElement('span');
    let item_box = document.createElement('div');
    
    checkbox.type = 'checkbox';
    description.textContent = add_input.value;

    item_box.append(checkbox);
    item_box.append(description);

    todo_list.append(item_box);

    add_input.value = '';
    add_input.focus();
});