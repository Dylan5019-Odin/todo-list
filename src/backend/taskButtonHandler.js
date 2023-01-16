const taskButtonHandler = (projectTasks, allTask) => {
  document.querySelectorAll(".task-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let index = btn.parentElement.id.split("_")[1];
      let currentProject = btn.id;

      console.log(index, currentProject)
    });
  });
};

export default taskButtonHandler;
