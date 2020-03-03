const menuIcon = document.querySelector('#menu-icon');
const navContent = document.querySelector('.nav-content__links');

menuIcon.addEventListener('click', () => {
  navContent.classList.toggle('nav-content-links--open');
})

const validationField = (field) => {
  if (!field) {
    alert('This field is required!');
    return 'error';
  } else if (field.length >= 191) {
    alert('Maximum length is 191 characters!');
    return 'error';
  }

  return;
};

const addTodoButton = document.querySelector('#add-btn');
const todoInput = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');

addTodoButton.addEventListener('click', () => {
  const todo = todoInput.value;

  if (validationField(todo)) return;

  const item = document.createElement('div');
  item.classList.add('item');

  const itemText = document.createElement('div');
  itemText.classList.add('item-text');
  itemText.textContent = todo;

  const editInput = document.createElement('input');
  editInput.classList.add('edit-input');
  editInput.classList.add('hide');
  editInput.name = 'edit-input';
  editInput.type = 'text';
  editInput.value = todo;

  const editInputButton = document.createElement('button');
  editInputButton.textContent = "✓";
  editInputButton.classList.add('action-btn');
  editInputButton.classList.add('update-btn');
  editInputButton.classList.add('hide');
  editInputButton.type = 'button';

  const actionButtons = document.createElement('div');
  actionButtons.classList.add('action-btns');

  const editButton = document.createElement('button');
  editButton.classList.add('action-btn');
  editButton.classList.add('edit-btn');
  editButton.textContent = '✎';

  editButton.addEventListener('click', () => {
    editInput.classList.remove('hide');
    itemText.classList.add('hide');
    editInputButton.classList.remove('hide');

    editInputButton.addEventListener('click', () => {
      const editInputValue = editInput.value;
      if (validationField(editInputValue)) return;

      itemText.textContent = editInputValue,
      editInput.classList.add('hide');
      itemText.classList.remove('hide');
      editInputButton.classList.add('hide');
    })
  })

  const removeButton = document.createElement('button');
  removeButton.classList.add('action-btn');
  removeButton.classList.add('remove-btn');
  removeButton.textContent = '❌';

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
