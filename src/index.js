import Task from "./backend/Task";

let task = new Task("Clean up", "Clean Up My room today", "1/15/2023", "High");

console.table(task);


task.setStatus("Complete");



console.table(task);
