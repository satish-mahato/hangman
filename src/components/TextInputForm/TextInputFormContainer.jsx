import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {
  const [inputType, setInputType] = useState("password");
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form Submited", value);
    if (value) {
      navigate("/play", { state: { wordSelect: value } });
    }
  }

  function handleTextInputForm(event) {
    console.log("Input Text change");
    console.log(event.target.value);
    setValue(event.target.value);
  }
  function handleShowHideClick() {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
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
