class ProjectTaskList {
  constructor(projectName, taskList = []) {
    this.projectName = projectName;
    this.taskList = taskList;
  }

  checkProject(name) {
    return this.projectName.toLowerCase() == name.toLowerCase();
  }

  addTask(newTask) {
    this.taskList.push(newTask);
  }

  setIds(tasklist) {
    for (let i = 0; i < tasklist.length; i++) {
      tasklist[i].id = i;
    }
  }

  deleteTask(index) {
    this.tasklist = this.taskList.splice(index, 1);
  }

  updateTask(index, tasklist, updatedTask) {
    tasklist[index] = updatedTask;

    this.tasklist = tasklist;
  }
}

export default ProjectTaskList;
