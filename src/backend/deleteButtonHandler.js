import updatePage from "./updatePage";

const deleteButtonHandler = (projectTasks, allTask) => {
  document.querySelectorAll(".delete-task-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      let taskIndex = btn.parentElement.id.split("_")[1];
      let currentProjectName = btn.id.toLowerCase();
      let projectIndex = 0;

      for (let i = 0; i < projectTasks.length; i++) {
        if (projectTasks[i].projectName.toLowerCase() == currentProjectName) {
          projectIndex = i;
        }
      }

      allTask.deleteTask(taskIndex);
      updatePage(allTask, projectIndex);
    });
  });
};

export default deleteButtonHandler;
