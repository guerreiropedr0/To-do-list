import './style.css';

const TASKS = [
  {
    description: 'do the dishes',
    completed: false,
    index: 2,
  },
  {
    description: 'workout',
    completed: false,
    index: 1,
  },
  {
    description: 'clean your room',
    completed: false,
    index: 0,
  },
];

function populateDiv() {
  const LIST = document.getElementById('list');
  LIST.innerHTML =
    '<form><div class="heading"><textarea>Things to do</textarea><input type="text" placeholder="Add to your list..."></div><button type="button">Clear all completed</button></form>';
  TASKS.sort(function (a, b) {
    return a.index - b.index;
  });
  for (let i = 0; i < TASKS.length; i += 1) {
    LIST.innerHTML += `<div class="task"><input type="checkbox"><textarea>${TASKS[i].description}</textarea></div>`;
  }
}

populateDiv();
