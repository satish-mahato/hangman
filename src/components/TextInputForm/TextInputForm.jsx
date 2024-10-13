import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({
  handleFormSubmit,
  handleTextInputForm,
  handleShowHideClick,
  inputType,
}) {
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <TextInput
          type={inputType}
          label={"Enter Your Word / Pharse"}
          placeholder="Enter Your word/ pharse"
          onChangeHandler={handleTextInputForm}
        />
      </div>
      <div>
        <Button
          text={inputType === "password" ? "Show" : "Hide"}
          styleType="warning"
          onClickHandler={handleShowHideClick}
        />
      </div>
      <div>
        <Button styleType="success" text={"submit"} type="submit" />
      </div>
    </form>
  );
}
export default TextInputForm;
