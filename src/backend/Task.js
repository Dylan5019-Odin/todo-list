class Task {
  constructor(title, description, dueDate, priority, project = "Default") {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.status = false;
    this.id = "";
  }

  //Getter
  getStatus() {
    return this._status ?  "Incomplete" : "Complete" ;
  }

  // Setters
  set priority(newPriority) {
    this._priority = newPriority;
  }

  set title(newTitle) {
    this._title = newTitle;
  }

  set description(newDescription) {
    this._description = newDescription;
  }

  set dueDate(newDueDate) {
    this._dueDate = newDueDate;
  }

  set project(newProject) {
    if (newProject == "") {
      this._project = "Default";
    } else {
      this._project = newProject;
    }
  }

  set status(newStatus) {
    this._status = !newStatus;
  }

  set id(newID) {
    this._id = newID;
  }
}

export default Task;
