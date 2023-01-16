import addElement from "./addElement";

//Creates each individual Task's HTML
//addElement("elementType", "parrentDiv", "textContent", "classList")
const createTaskHTML = (parentDiv, task) => {
  let taskCard = addElement("div", parentDiv, "", "task", `task_${task._id}`);
  //Task Name
  addElement("h1", taskCard, `${task._title}`, "task-header");
  addElement("p", taskCard, `${task._description}`);
  addElement("p", taskCard, `${task._dueDate}`);
  addElement("p", taskCard, `${task._priority}`);
  addElement("p", taskCard, `${task._project}`);
  addElement("p", taskCard, `${task.getStatus()}`);
  addElement(
    "button",
    taskCard,
    "Delete",
    "delete-task-btn",
    `${task._project}`
  );
  addElement(
    "button",
    taskCard,
    "Update",
    "update-task-btn",
    `${task._project}`
  );
  addElement(
    "button",
    taskCard,
    "Toggle Status",
    "status-task-btn",
    `${task._project}`
  );
};

export default createTaskHTML;
