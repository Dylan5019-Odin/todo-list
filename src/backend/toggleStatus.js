import updatePage from "./updatePage";

const toggleStatus = (projectTasks, allTask) => {
  document.querySelectorAll(".status-task-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      let taskIndex = btn.parentElement.id.split("_")[1];
      let currentProjectName = btn.id.toLowerCase();
      let projectIndex = 0;

      for (let i = 0; i < projectTasks.length; i++) {
        if (projectTasks[i].projectName.toLowerCase() == currentProjectName) {
          projectIndex = i;
        }
      }

      let updatedTask = allTask.taskList[taskIndex];
      updatedTask._status = !allTask.taskList[taskIndex]._status;

      allTask.updateTask(taskIndex, allTask.taskList, updatedTask);

      updatePage(allTask, projectIndex);
    });
  });
};

export default toggleStatus;
