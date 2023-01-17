import addElement from "./addElement";

//Creates each individual Task's HTML
//addElement("elementType", "parrentDiv", "textContent", "classList")
const createTaskHTML = (parentDiv, task) => {
  let taskCard = addElement("div", parentDiv, "", "task", `task_${task._id}`);
  //Task Name
  let taskHeaderDiv = addElement("div", taskCard, ``, "task-header-div");

  let taskBodyDiv = addElement(
    "div",
    taskCard,
    ``,
    "task-body-div",
    `task_${task._id}`
  );
  addElement("h1", taskHeaderDiv, `${task._title}`, "task-header");

  let taskDescDiv = addElement(
    "div",
    taskBodyDiv,
    ``,
    "task-desc",
    `task_${task._id}`
  );
  addElement("p", taskDescDiv, `${task._description}`);

  let taskInfoDiv = addElement(
    "div",
    taskBodyDiv,
    ``,
    "task-info",
    `task_${task._id}`
  );
  addElement("p", taskInfoDiv, `Due Date: ${task._dueDate}`);
  addElement("p", taskInfoDiv, `Priority: ${task._priority}`);
  addElement("p", taskInfoDiv, `Project: ${task._project}`);
  addElement("p", taskInfoDiv, `Status: ${task.getStatus()}`);

  let taskBtnDiv = addElement(
    "div",
    taskInfoDiv,
    ``,
    "task-btns",
    `task_${task._id}`
  );

  addElement(
    "button",
    taskBtnDiv,
    "Delete",
    "delete-task-btn",
    `${task._project}`
  );
  addElement(
    "button",
    taskBtnDiv,
    "Update",
    "update-task-btn",
    `${task._project}`
  );
  addElement(
    "button",
    taskBtnDiv,
    "Toggle Status",
    "status-task-btn",
    `${task._project}`
  );
};

export default createTaskHTML;
