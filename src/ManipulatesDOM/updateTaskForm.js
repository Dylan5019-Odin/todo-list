import addElement from "./addElement";
import "../style.css";

const updateTaskForm = () => {
  // Add a div to contain the form
  let content = document.getElementById("content");
  let updateformDiv = addElement(
    "form",
    content,
    "",
    "update-form",
    "update-form-div"
  );

  let titleLabel = addElement("label", updateformDiv, "Title");
  titleLabel.htmlFor = "title";
  let titleInput = addElement("input", updateformDiv, "", "title-input", "title");
  titleInput.type = "text";
  titleInput.name = "title";
  titleInput.required = "required";

  let descLabel = addElement("label", updateformDiv, "Description");
  descLabel.htmlFor = "desc";
  let descInput = addElement("input", updateformDiv, "", "desc-input", "desc");
  descInput.type = "text";
  descInput.name = "desc";
  descInput.required = "required";

  let dueDateLabel = addElement("label", updateformDiv, "Due Date");
  dueDateLabel.htmlFor = "dueDate";
  let dueDateInput = addElement("input", updateformDiv, "", "", "dueDate");
  dueDateInput.type = "date";
  dueDateInput.name = "dueDate";
  dueDateInput.required = "required";

  let priorityLabel = addElement("label", updateformDiv, "Priority");
  priorityLabel.htmlFor = "priority";

  let priorityDropdown = addElement("select", updateformDiv, "", "", "priority");
  priorityDropdown.name = "priority";

  let priorityLow = addElement("option", priorityDropdown, "Low");
  priorityLow.value = "Low";

  let priorityMedium = addElement("option", priorityDropdown, "Medium");
  priorityMedium.value = "Medium";

  let priorityHigh = addElement("option", priorityDropdown, "High");
  priorityHigh.value = "High";

  let projectLabel = addElement("label", updateformDiv, "Project");
  projectLabel.htmlFor = "dueDate";
  let projectInput = addElement("input", updateformDiv, "", "", "project");
  projectInput.type = "text";
  projectInput.name = "project";

  addElement("button", updateformDiv, "Update", "update-form-button", "update-form-button");

  updateformDiv.style["visibility"] = "hidden";
};

export default updateTaskForm;
