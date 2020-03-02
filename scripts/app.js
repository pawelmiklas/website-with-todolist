const menuIcon = document.querySelector('#menu-icon');
const navContent = document.querySelector('.nav-content__links');

menuIcon.addEventListener('click', () => {
  navContent.classList.toggle('nav-content-links--open');
})

const addTodoButton = document.querySelector('#add-btn');
const todoInput = document.querySelector('#todo-input');
const list = document.querySelector('#list');

addTodoButton.addEventListener('click', () => {
  const todo = todoInput.value;
  
  if (!todo) {
    return;
  }

  const item = document.createElement('DIV');
  item.classList.add('item');

  const itemText = document.createElement('DIV');
  itemText.classList.add('item-text');
  itemText.textContent = todo;

  const editInput = document.createElement('INPUT');
  editInput.classList.add('edit-input');
  editInput.classList.add('hide');
  editInput.name = 'edit-input';
  editInput.type = 'text';
  editInput.value = todo;

  const editInputButton = document.createElement('BUTTON');
  editInputButton.textContent = "UPDATE";
  editInputButton.classList.add('action-btn');
  editInputButton.classList.add('update-btn');
  editInputButton.classList.add('hide');
  editInputButton.type = 'button';

  const actionButtons = document.createElement('DIV');
  actionButtons.classList.add('action-btns');

  const editButton = document.createElement('BUTTON');
  editButton.classList.add('action-btn');
  editButton.classList.add('edit-btn');
  editButton.textContent = 'EDIT';

  editButton.addEventListener('click', () => {
    editInput.classList.remove('hide');
    itemText.classList.add('hide');
    editInputButton.classList.remove('hide');
    editInputButton.addEventListener('click', () => {
      itemText.textContent = editInput.value,
      editInput.classList.add('hide');
      itemText.classList.remove('hide');
      editInputButton.classList.add('hide');
    })
  })

  const removeButton = document.createElement('BUTTON');
  removeButton.classList.add('action-btn');
  removeButton.classList.add('remove-btn');
  removeButton.textContent = 'REMOVE';

  removeButton.addEventListener('click', () => {
    item.parentNode.removeChild(item);
  });

  actionButtons.append(editInputButton);
  actionButtons.append(editButton);
  actionButtons.append(removeButton);
  item.append(itemText);
  item.append(editInput);
  item.append(actionButtons);
  list.append(item);

  todoInput.value = '';
})
