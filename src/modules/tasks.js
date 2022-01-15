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
}
