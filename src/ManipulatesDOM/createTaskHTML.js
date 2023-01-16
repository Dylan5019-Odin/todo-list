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
  addElement("p", taskCard, `${task._status}`);
  addElement("button", taskCard, "Delete", "task-btn", `${task._project}`);
};

export default createTaskHTML;
