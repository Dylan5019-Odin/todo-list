import addElement from "./addElement";

//Creates each individual Task
//addElement("elementType", "parrentDiv", "textContent", "classList")
const createTaskHTML = (div, task) => {
  let taskCard = addElement("div", div, "", "task");
  //Task Name
  addElement("h1", taskCard, `${task.title}`, "task-header");
  addElement("p", taskCard, `${task.description}`);
  addElement("p", taskCard, `${task.dueDate}`);
  addElement("p", taskCard, `${task.priority}`);
  addElement("p", taskCard, `${task.project}`);
  addElement("p", taskCard, `${task.getStatus()}`);
};

export default createTaskHTML;
