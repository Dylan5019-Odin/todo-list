import Task from "./Task";

const retriveFormData = (inputs, form) => {
  let title = "";
  let description = "";
  let dueDate;
  let priority = "";
  let project = "";

  priority = form.getElementsByTagName("select")[0].value;

  for (let i = 0; i < inputs.length; i++) {
    switch (inputs[i].id) {
      case "title":
        title = inputs[i].value;
        break;
      case "desc":
        description = inputs[i].value;
        break;
      case "dueDate":
        dueDate = inputs[i].value;
        break;
      case "project":
        project = inputs[i].value;
        break;
      default:
        break;
    }
  }

  let newTask = new Task(title, description, dueDate, priority, project);
  return newTask;
};


export default retriveFormData;