import filterTasks from "./filterTasks";
import displayController from "../ManipulatesDOM/displayController";
import formSubmitHandler from "./formSubmitHandler";
import taskButtonHandler from "./taskButtonHandler";

const updatePage = (allTasks, index) => {
  allTasks.setIds(allTasks.taskList);
  let filteredTasks = filterTasks(allTasks.taskList);

  displayController(allTasks, filteredTasks, filteredTasks[index]);

  //Event Listeners

  taskButtonHandler(filteredTasks, allTasks);
  formSubmitHandler(allTasks);
};

export default updatePage;
