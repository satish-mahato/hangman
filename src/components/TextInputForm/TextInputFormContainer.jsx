import TextInputForm from "./TextInputForm";

function TextInputFormContainer() {
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form Submited");
  }

  function handleTextInputForm(event) {
    console.log("Input Text change");
    console.log(event.target.value);
  }
  return (
    <TextInputForm
      handleFormSubmit={handleFormSubmit}
      handleTextInputForm={handleTextInputForm}
    />
  );
}
export default TextInputFormContainer;
