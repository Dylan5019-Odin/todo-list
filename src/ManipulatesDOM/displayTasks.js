import createTaskHTML from "./createTaskHTML";
import addElement from "./addElement";

const displayTasks = (projectTasks) => {
  // Get Information from projectTask;
 // console.log(projectTasks)
  let taskList = projectTasks.taskList;
  let taskListLength = taskList.length;

  

  // Get content-container and create the Div to contain all the task
  let content = document.getElementById("content");
  let taskDiv = addElement("div", content, "", "task-div", "task-div");

  //Creates each indiviudual task
  for (let i = 0; i < taskListLength; i++) {
    createTaskHTML(taskDiv, taskList[i]);
  }


};

export default displayTasks;
