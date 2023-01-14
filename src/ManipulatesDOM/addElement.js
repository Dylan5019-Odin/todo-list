//Function to make it easier to create elements and set values
const addElement = (
  elementType,
  parentDiv,
  textContent = "",
  classList = ""
) => {
  let temp = document.createElement(elementType);
  temp.textContent = textContent;
  temp.classList = classList;
  parentDiv.append(temp);

  return temp;
};

export default addElement;
