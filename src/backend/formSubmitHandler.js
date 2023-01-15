import displayController from "../ManipulatesDOM/displayController";
import filterTasks from "./filterTasks";
import retriveFormData from "./retrieveFormData";

//Creates and Adds a new Task when the form is submited
const formSubmitHandler = (allTask) => {
  let form = document.getElementById("new-form-div");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let inputs = form.getElementsByTagName("input");
    console.log(allTask);
    let newTask = retriveFormData(inputs, form);
    allTask.addTask(newTask);
   
    let filteredTasks = filterTasks(allTask.taskList);
    document.getElementById("content").innerHTML = "";
    displayController(filteredTasks, allTask[0]);


  });
};

export default formSubmitHandler;
