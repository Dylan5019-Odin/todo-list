import addElement from "./addElement";

const addTaskForm = () => {
  // Add a div to contain the form
  let content = document.getElementById("content");
  let formDiv = addElement("form", content, "", "new-form-div", "new-form-div");

  let titleLabel = addElement("label", formDiv, "Title");
  titleLabel.htmlFor = "title";
  let titleInput = addElement("input", formDiv, "", "title-input", "title");
  titleInput.type = "text";
  titleInput.name = "title";
  titleInput.required = "required";

  let descLabel = addElement("label", formDiv, "Description");
  descLabel.htmlFor = "desc";
  let descInput = addElement("input", formDiv, "", "desc-input", "desc");
  descInput.type = "text";
  descInput.name = "desc";
  descInput.required = "required";

  let dueDateLabel = addElement("label", formDiv, "Due Date");
  dueDateLabel.htmlFor = "dueDate";
  let dueDateInput = addElement("input", formDiv, "", "", "dueDate");
  dueDateInput.type = "date";
  dueDateInput.name = "dueDate";
  dueDateInput.required = "required";

  let priorityLabel = addElement("label", formDiv, "Priority");
  priorityLabel.htmlFor = "priority";

  let priorityDropdown = addElement("select", formDiv, "", "", "priority");
  priorityDropdown.name = "priority";

  let priorityLow = addElement("option", priorityDropdown, "Low");
  priorityLow.value = "Low";

  let priorityMedium = addElement("option", priorityDropdown, "Medium");
  priorityMedium.value = "Medium";

  let priorityHigh = addElement("option", priorityDropdown, "High");
  priorityHigh.value = "High";

  let projectLabel = addElement("label", formDiv, "Project");
  projectLabel.htmlFor = "dueDate";
  let projectInput = addElement("input", formDiv, "", "", "project");
  projectInput.type = "text";
  projectInput.name = "project";

  addElement("button", formDiv, "Add Task", "form-button", "form-button");
};

export default addTaskForm;
