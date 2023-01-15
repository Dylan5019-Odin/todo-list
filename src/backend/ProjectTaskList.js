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


}

export default ProjectTaskList;
