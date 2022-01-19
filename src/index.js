import './style.css';
import TaskList from './modules/taskList.js';

const TASK_LIST = new TaskList();
TASK_LIST.display();

document.getElementById('list').addEventListener('submit', (event) => {
  event.preventDefault();
  TASK_LIST.addTask();
});
