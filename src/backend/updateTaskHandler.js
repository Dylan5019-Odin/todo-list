import retriveFormData from "./retrieveFormData";
import updatePage from "./updatePage";

//Updates a Task when the form is submited
const updateTaskHandler = (projectTasks, allTasks) => {
  let form = document.getElementById("update-form-div");

  if (allTasks.taskList.length == 0) {
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Create a new Task Based on information in the Form
    let inputs = form.getElementsByTagName("input");
    let newTask = retriveFormData(inputs, form);
    let buttonID = form.getElementsByTagName("button")[0].id.split("_");

    let taskIndex = buttonID[1];
    let currentProjectName = buttonID[0].toLowerCase();
    let projectIndex = 0;

    for (let i = 0; i < projectTasks.length; i++) {
      if (projectTasks[i].projectName.toLowerCase() == currentProjectName) {
        projectIndex = i;
      }
    }

    // Update the page and updates the task in allTasks
    allTasks.updateTask(taskIndex, allTasks.taskList, newTask);

    updatePage(allTasks, projectIndex);
  });
};

export default updateTaskHandler;
