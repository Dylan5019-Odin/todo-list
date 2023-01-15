//Function to make it easier to create elements and set values
const addElement = (
  elementType,
  parentDiv,
  textContent = "",
  classList = "",
  id = ""
) => {
  let temp = document.createElement(elementType);
  temp.textContent = textContent;
  temp.classList = classList;

  id != "" ? temp.id = id :"";

  parentDiv.append(temp);

  return temp;
};

export default addElement;
