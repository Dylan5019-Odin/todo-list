import displayButtons from "./displayButtons";
import switchProject from "./switchProject";
import displayTasks from "./displayTasks";

const displayHTML = (projects, filterdTask = projects[0]) => {
  displayButtons(projects);
  switchProject(projects);

  //Load the First Projects Tasks, unless a filtered Task has been set
  filterdTask != projects[0]
    ? displayTasks(filterdTask)
    : displayTasks(projects[0]);
};

export default displayHTML;
