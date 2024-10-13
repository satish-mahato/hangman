import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({ handleFormSubmit, handleTextInputForm }) {
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <TextInput
          label={"Enter Your Word / Pharse"}
          placeholder="Enter Your word/ pharse"
          onChangeHandler={handleTextInputForm}
        />
      </div>
      <div>
        <Button text={"Show/Hide"} styleType="warning" />
      </div>
      <div>
        <Button styleType="success" text={"submit"} type="submit" />
      </div>
    </form>
  );
}
export default TextInputForm;
