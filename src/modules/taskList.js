import Task from './task.js';

export default class TaskList {
  constructor() {
    this.array = [];
  }

  display() {
    const LIST = document.getElementById('list');
    LIST.innerHTML =
      '<form><div class="heading"><textarea>Things to do</textarea><input type="text" placeholder="Add to your list..."></div><button type="button">Clear all completed</button></form>';
    this.array.forEach((task) => {
      LIST.innerHTML += `<div class="task"><input type="checkbox"><textarea id="${task.index}">${task.description}</textarea><i id="${task.index}" class="far fa-trash-alt"></i></div>`;
    });

    const removeBtns = LIST.querySelectorAll('.fa-trash-alt');
    removeBtns.forEach((icon) => {
      icon.addEventListener('click', () => {
        this.removeTask(icon.id - 1);
      });
    });
    const editableTask = document.querySelectorAll('.task textarea');
    editableTask.forEach((task) => {
      task.addEventListener('input', () => {
        this.editTask(task.id - 1, task);
      });
    });
  }

  addTask() {
    const task = new Task(
      document.querySelector("input[type='text'").value,
      false,
      this.array.length + 1
    );
    this.array.push(task);
    this.display();
  }

  removeTask(index) {
    this.array.splice(index, 1);
    for (let i = index; i < this.array.length; i += 1) {
      this.array[i].index -= 1;
    }
    this.display();
  }

  editTask(index, task) {
    this.array[index].description = task.value;
  }
}
