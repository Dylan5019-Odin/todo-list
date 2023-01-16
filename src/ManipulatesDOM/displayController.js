import displayProjectButtons from "./displayButtons";
import switchProject from "../backend/switchProject";
import displayTasks from "./displayTasks";
import addTaskForm from "./addTaskForm";

// Controls what HTML is Displayed on the page
const displayController = (projects, filter = projects[0]) => {
  document.getElementById("content").innerHTML = "";
  //If there are no tasks, display only the form
  if (projects.length == 0) {
    addTaskForm();
    return;
  }



  //Displays a Button for each project 
  displayProjectButtons(projects);
   switchProject(projects);
 
  //Display the filtered task only if the filter is set
  if (filter != projects[0]) {
    displayTasks(filter);
  } else {
    displayTasks(projects[0]);
  }

  //Display the Add task Form under the tasks
  addTaskForm();
};

export default displayController;
