import Task from "./backend/Task";
import filterTasks from "./backend/filterTasks";
import displayHTML from "./ManipulatesDOM/displayHTML";
import formSubmitHandler from "./backend/formSubmitHandler";
import "./style.css";

let item = new Task(
  "Clean up",
  "Clean Up My room today",
  "1/15/2023",
  "High",
  "Home"
);
let item2 = new Task(
  "Dishes",
  "Wash the dishes today",
  "1/16/2023",
  "Medium",
  "Home"
);
let item3 = new Task(
  "Go Shopping",
  "Pick up groceries at 3pm",
  "1/14/2023",
  "High"
);

let item5 = new Task(
  "Dishes",
  "Wash the dishes today",
  "1/16/2023",
  "Medium",
  "Home"
);
let item6 = new Task(
  "Go Shopping",
  "Pick up groceries at 3pm",
  "1/14/2023",
  "High"
);
let item4 = new Task("Do HW", "Math and Science", "1/21/2023", "low", "School");

let tasks = [];

tasks.push(item);
tasks.push(item2);
tasks.push(item3);
tasks.push(item4);
tasks.push(item5);
tasks.push(item6);

let projects = filterTasks(tasks);

displayHTML(projects);
formSubmitHandler();