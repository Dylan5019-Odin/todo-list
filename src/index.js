import ProjectTaskList from "./backend/ProjectTaskList";

import Task from "./backend/Task";


import updatePage from "./backend/updatePage";

import "./style.css";

//Create the TaskList that Stores all Task
let allTask = new ProjectTaskList("all");

// Testing Data
let item = new Task(
  "Clean up",
  "Clean Up My room today",
  "1/15/2023",
  "High",
  "Home"
);
let item2 = new Task(
  "Chores",
  "Wash the dishes today",
  "1/16/2023",
  "Medium",
  "School"
);
let item3 = new Task(
  "Dishes",
  "Wash the dishes today",
  "1/16/2023",
  "Medium",
  "School"
);

allTask.addTask(item);
allTask.addTask(item2);
allTask.addTask(item3);



updatePage(allTask);
