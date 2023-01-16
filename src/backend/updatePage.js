import filterTasks from "./filterTasks";
import displayController from "../ManipulatesDOM/displayController";
import formSubmitHandler from "./formSubmitHandler";
import deleteButtonHandler from "./deleteButtonHandler";
import updateButtonHandler from "./updateButtonHandler";

const updatePage = (allTasks, index) => {
  allTasks.setIds(allTasks.taskList);
  let filteredTasks = filterTasks(allTasks.taskList);

  displayController(allTasks, filteredTasks, filteredTasks[index]);

  //Event Listeners

 
  formSubmitHandler(allTasks);
  updateButtonHandler(filteredTasks, allTasks);
  deleteButtonHandler(filteredTasks, allTasks);
};

export default updatePage;
