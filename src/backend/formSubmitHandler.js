import retriveFormData from "./retrieveFormData";
import updatePage from "./updatePage";

//Creates and Adds a new Task when the form is submited
const formSubmitHandler = (allTasks) => {
  let form = document.getElementById("new-form-div");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Create a new Task Based on information in the Form
    let inputs = form.getElementsByTagName("input");
    let newTask = retriveFormData(inputs, form);
    
    // Update the page and adds the new task to allTasks
    allTasks.addTask(newTask);
    updatePage(allTasks);
    
  });
};

export default formSubmitHandler;
