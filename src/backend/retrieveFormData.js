import Task from "./Task";



//Retrieves the Values in the Form Input Fields and returns a new task with that information
const retriveFormData = (inputs, form) => {
  let title = "";
  let description = "";
  let project = "";
  let dueDate;
  let priority = form.getElementsByTagName("select")[0].value;
  let inputsArr = Array.from(inputs);

  inputsArr.forEach((input) => {
    switch (input.id) {
      case "title":
        title = input.value;
        break;
      case "desc":
        description = input.value;
        break;
      case "dueDate":
        dueDate = input.value;
        break;
      case "project":
        project = input.value;
        break;
      default:
        break;
    }
  });

  return new Task(title, description, dueDate, priority, project);
};

export default retriveFormData;
