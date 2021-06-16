let input = document.getElementById('myInput');
let addBtn = document.querySelector('.addBtn');
let list = document.getElementById('myUL');

const addToDo = () => {
  let content = document.createTextNode(input.value);
  let li = document.createElement('li');

  li.appendChild(content);

  !input.value ? alert('please enter a todo text') : list.appendChild(li);

  input.value = '';

  let removeBtn = document.createElement('button');

  li.appendChild(removeBtn);

  removeBtn.innerText = 'X';

  removeBtn.addEventListener('click', () => {
    removeBtn.parentElement.remove();
  });

  removeBtn.setAttribute('class', 'removeBtn');

  li.addEventListener('mouseover', function () {
    li.style.backgroundColor = 'rgb(173, 173, 173)';
  });
  li.addEventListener('mouseout', function () {
    li.style.backgroundColor = 'lightgray';
  });
};

addBtn.addEventListener('click', addToDo);
