import addElement from "./addElement";
import displayHTML from "./displayHTML";
import displayTasks from "./displayTasks";

const switchProject = (projectTasks) => {
  let numOfProjects = projectTasks.length;

  //Add Event Listener to Swtich Projects
  document.querySelectorAll(".switch-project-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      for (let i = 0; i < numOfProjects; i++) {
        if (projectTasks[i].checkProject(btn.id)) {
          document.getElementById("content").innerHTML = "";
          displayHTML(projectTasks, projectTasks[i]);
        }
      }
    });
  });
};

export default switchProject;
