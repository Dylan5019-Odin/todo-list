import taskController from "./backend/taskController";
import displayController from "./ManipulatesDOM/displayController";
import formSubmitHandler from "./backend/formSubmitHandler";
import "./style.css";


let sortedProjects = taskController();
console.log(sortedProjects);
displayController(sortedProjects);
formSubmitHandler();