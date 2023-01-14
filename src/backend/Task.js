
class Task {



  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = false;
  }

  //Getter
  getStatus() {
    return (this.status == false ? "Complete" : "Incomplete");
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

  setStatus(status) {
    this.status = status;
  }

}




export default Task;