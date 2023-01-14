class ProjectTaskList {
  constructor(projectName, taskList) {
    this.projectName = projectName;
    this.taskList = taskList;
  }


  checkProject(name) {
    return this.projectName == name;
  }


}

export default ProjectTaskList;
