import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer() {
  const [inputType, setInputType] = useState("password");
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form Submited");
  }

  function handleTextInputForm(event) {
    console.log("Input Text change");
    console.log(event.target.value);
  }
  function handleShowHideClick() {
    console.log("Show/Hide Button clicked");
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
    console.log(inputType);
  }
  return (
    <TextInputForm
      inputType={inputType}
      handleFormSubmit={handleFormSubmit}
      handleTextInputForm={handleTextInputForm}
      handleShowHideClick={handleShowHideClick}
    />
  );
}
export default TextInputFormContainer;
