import displayController from "../ManipulatesDOM/displayController";
import filterTasks from "./filterTasks";
import retriveFormData from "./retrieveFormData";

//Creates and Adds a new Task when the form is submited
const formSubmitHandler = (allTask) => {
  let form = document.getElementById("new-form-div");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Create a new Task Based on information in the Form
    let inputs = form.getElementsByTagName("input");
    let newTask = retriveFormData(inputs, form);
    allTask.addTask(newTask);

    // Refilter the allTask and Display the new filteredTask;
    let filteredTasks = filterTasks(allTask.taskList);
    document.getElementById("content").innerHTML = "";
    displayController(filteredTasks, allTask[0]);
  });
};

export default formSubmitHandler;
