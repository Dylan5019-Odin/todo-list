import addElement from "./addElement";

const displayProjectButtons = (projectTasks) => {
  let numOfProjects = projectTasks.length;

  // Get content-container and create the Div to contain all the task
  let content = document.getElementById("content");
  let btnDiv = addElement("div", content, "", "btn-div");

  //Creates each indiviudual task
  for (let i = 0; i < numOfProjects; i++) {
    addElement(
      "button",
      btnDiv,
      `${projectTasks[i].projectName}`,
      "switch-project-btn",
      `${projectTasks[i].projectName}`
    );
  }
};

export default displayProjectButtons;
