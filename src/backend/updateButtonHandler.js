//Populates the Update Form with the current data;
//Also sets the update forms button id to contain releavent data to the current task
const updateButtonHandler = (projectTask, allTasks) => {
  document.querySelectorAll(".update-task-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      let taskIndex = btn.parentElement.id.split("_")[1];
      let currentTask = allTasks.taskList[taskIndex];
      let form = document.getElementById("update-form-div");
      let inputs = form.getElementsByTagName("input");

      let oldTitle = currentTask._title;
      let oldDesc = currentTask._description;
      let oldDueDate = new Date(currentTask._dueDate);
      let oldPriority = currentTask._priority;
      let oldProject = currentTask._project;
      //let oldStatus = currentTask._status;

      form.getElementsByTagName("select")[0].value = oldPriority;
      form.getElementsByTagName("button")[0].id = `${oldProject}_${taskIndex}`;

      for (let i = 0; i < inputs.length; i++) {
        switch (inputs[i].id) {
          case "title":
            inputs[i].value = oldTitle;
            break;
          case "desc":
            inputs[i].value = oldDesc;
            break;
          case "dueDate":
            inputs[i].value = oldDueDate.toISOString().split("T")[0];
            break;
          case "project":
            inputs[i].value = oldProject;
            break;
          default:
            break;
        }
      }
    });
  });
};

export default updateButtonHandler;
