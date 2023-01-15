import displayButtons from "./displayButtons";
import switchProject from "./switchProject";
import displayTasks from "./displayTasks";
import addTaskForm from "./addTaskForm";

const displayHTML = (projects, filterdTask = projects[0]) => {
  displayButtons(projects);
  switchProject(projects);

  //Load the First Projects Tasks, unless a filtered Task has been set
  filterdTask != projects[0]
    ? displayTasks(filterdTask)
    : displayTasks(projects[0]);

    addTaskForm();
};

export default displayHTML;
