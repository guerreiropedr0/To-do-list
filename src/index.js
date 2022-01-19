import './style.css';
import TaskList from './modules/taskList.js';

const taskList = new TaskList();
taskList.display();

document.getElementById('list').addEventListener('submit', (event) => {
  event.preventDefault();
  taskList.addTask();
});
