import taskController from "./backend/taskController";
import displayController from "./ManipulatesDOM/displayController";
import formSubmitHandler from "./backend/formSubmitHandler";
import "./style.css";


let [allTask, filteredTasks] = taskController();
displayController(filteredTasks);
formSubmitHandler(allTask);
