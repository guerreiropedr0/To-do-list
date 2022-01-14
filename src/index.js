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

  for (let i = 0; i < TASKS.length; i += 1) {
    LIST.innerHTML += `<p>${TASKS[i].description}</p>`;
  }
}

populateDiv();
