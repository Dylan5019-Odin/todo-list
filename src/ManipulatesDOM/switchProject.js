import displayController from "./displayController";

const switchProject = (projectTasks) => {
  let numOfProjects = projectTasks.length;

  //Add Event Listener to Swtich Projects
  document.querySelectorAll(".switch-project-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      for (let i = 0; i < numOfProjects; i++) {
        if (projectTasks[i].checkProject(btn.id)) {
          document.getElementById("content").innerHTML = "";
          displayController(projectTasks, projectTasks[i]);
        }
      }
    });
  });
};

export default switchProject;
