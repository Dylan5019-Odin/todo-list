import ProjectTaskList from "./backend/ProjectTaskList";
import Task from "./backend/Task";
import updatePage from "./backend/updatePage";
import "./style.css";

//Create the TaskList that Stores all Task
let allTask = new ProjectTaskList("all");
//let retrievedObject = localStorage.getItem("allTasks");
//console.log(JSON.parse(retrievedObject));

// Testing Data
let item = new Task(
  "Clean up",
  "My room is a mess today",
  "1/19/2023",
  "Low",
  "Home"
);

let item2 = new Task(
  "Do Homework",
  "Math HW is Due soon",
  "1/23/2023",
  "High",
  "School"
);

allTask.addTask(item);
allTask.addTask(item2);

updatePage(allTask);
