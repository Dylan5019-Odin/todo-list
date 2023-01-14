class Task {
  constructor(title, description, dueDate, priority, project = "default") {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.status = false;
  }

  //Getter
  getStatus() {
    return this.status ? "Complete" : "Incomplete";
  }

  // Setters
  setPriority(priority) {
    this.priority = priority;
  }

  setTitle(title) {
    this.title = title;
  }

  setDescription(description) {
    this.description = description;
  }

  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  setProject(project) {
    this.project = project;
  }

  setStatus(status) {
    this.status = status;
  }
}

export default Task;
