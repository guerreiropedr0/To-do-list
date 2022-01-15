export class Task {
  constructor(description, completed = false, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

export class TaskList {
  constructor() {
    this.array = [];
  }

  display() {
    const LIST = document.getElementById('list');
    LIST.innerHTML =
      '<form><div class="heading"><textarea>Things to do</textarea><input type="text" placeholder="Add to your list..."></div><button type="button">Clear all completed</button></form>';
    for (let i = 0; i < this.array.length; i += 1) {
      LIST.innerHTML += `<div class="task"><input type="checkbox"><textarea>${this.array[i].description}</textarea><i id="${this.array[i].index}" class="far fa-trash-alt"></i></div>`;
    }
  }

  addTask() {
    let task = new Task(
      document.querySelector("input[type='text'").value,
      false,
      this.array.length + 1
    );
    this.array.push(task);
    this.display();
  }

  removeTask(index) {
    this.array.splice(index, 1);
    this.display();
  }
}
