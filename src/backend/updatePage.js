import filterTasks from "./filterTasks";
import displayController from "../ManipulatesDOM/displayController";
import formSubmitHandler from "./formSubmitHandler";
import taskButtonHandler from "./taskButtonHandler";
import switchProject from "./switchProject";

const updatePage = (allTasks) => {
  allTasks.setIds(allTasks.taskList);
  let filteredTasks = filterTasks(allTasks.taskList);

  displayController(filteredTasks);
  //Event Listeners
  
  taskButtonHandler(filteredTasks, allTasks);
  formSubmitHandler(allTasks);

    
};

export default updatePage;
