import Task from "./Task";
import filterTasks from "./filterTasks";
import ProjectTaskList from "./ProjectTaskList";

const taskController = () => {
  let allTask = new ProjectTaskList("all");

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
    "School"
  );

  allTask.addTask(item);
  allTask.addTask(item2);

  let filteredTasks = filterTasks(allTask.taskList);

  return filteredTasks;
};

export default taskController;
