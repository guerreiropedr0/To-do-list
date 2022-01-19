import Task from './task.js';
import StorageManager from './localStorage.js';

export default class TaskList {
  constructor() {
    this.array = StorageManager.load();
  }

  display = () => {
    const LIST = document.getElementById('list');
    LIST.innerHTML =
      '<form><div class="heading"><textarea>Things to do</textarea><input type="text" placeholder="Add to your list..."></div><button class="clear" type="button">Clear all completed</button></form>';
    this.array.forEach((task) => {
      LIST.innerHTML += `<div class="task"><input id="${task.index}" type="checkbox"><textarea id="${task.index}">${task.description}</textarea><i id="${task.index}" class="far fa-trash-alt"></i></div>`;
    });

    const REMOVE_ICON = LIST.querySelectorAll('.fa-trash-alt');
    REMOVE_ICON.forEach((icon) => {
      icon.addEventListener('click', () => {
        this.removeTask(icon.id - 1);
      });
    });
    const TEXTAREA = document.querySelectorAll('.task textarea');
    TEXTAREA.forEach((task) => {
      task.addEventListener('input', () => {
        this.editTask(task.id - 1, task);
      });
    });

    const INPUT_CHECKBOX = document.querySelectorAll('.task input');
    INPUT_CHECKBOX.forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        if (checkbox.checked === true) {
          this.array[checkbox.id - 1].completed = true;
        } else this.array[checkbox.id - 1].completed = false;
      });
    });
  };

  addTask = () => {
    const TASK = new Task(
      document.querySelector("input[type='text'").value,
      false,
      this.array.length + 1
    );
    this.array.push(TASK);
    this.display();
    StorageManager.save(this.array);
  };

  removeTask = (index) => {
    this.array.splice(index, 1);
    for (let i = index; i < this.array.length; i += 1) {
      this.array[i].index -= 1;
    }
    this.display();
    StorageManager.save(this.array);
  };

  editTask = (index, task) => {
    this.array[index].description = task.value;
    StorageManager.save(this.array);
  };
}
