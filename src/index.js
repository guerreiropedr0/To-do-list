import './style.css';
import { Task, TaskList } from './modules/tasks.js';

let taskList = new TaskList();
taskList.display();

document.getElementById('list').addEventListener('submit', (event) => {
  event.preventDefault();
  taskList.addTask();
});
