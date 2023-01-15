import retriveFormData from "./retrieveFormData";

const formSubmitHandler = () => {
  let form = document.getElementById("new-form-div");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let inputs = form.getElementsByTagName("input");

    console.table(retriveFormData(inputs, form));
  });
};

export default formSubmitHandler;
