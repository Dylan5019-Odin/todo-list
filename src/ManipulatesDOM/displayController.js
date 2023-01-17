import displayProjectButtons from "./displayButtons";
import switchProject from "../backend/switchProject";
import displayTasks from "./displayTasks";
import addTaskForm from "./addTaskForm";
import updateTaskForm from "./updateTaskForm"

// Controls what HTML is Displayed on the page
const displayController = (allTasks, projects, filter) => {
  document.getElementById("content").innerHTML = "";
  //If there are no tasks, display only the form
  if (projects.length == 0) {
    addTaskForm();
    return;
  }

  //Display the Add task Form under the tasks
  addTaskForm();
  updateTaskForm();

  //Displays a Button for each project
  displayProjectButtons(projects);
  switchProject(projects, allTasks);

  //Display the filtered task only if the filter is set
  if (filter != undefined) {
    displayTasks(filter);
  } else {
    displayTasks(projects[0]);
  }
};

export default displayController;
