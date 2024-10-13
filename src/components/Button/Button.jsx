import getButtonStyling from "./getButtonStyling";

function Button({
  text,
  type = "button",
  styleType = "primary",
  onClickHandler,
}) {
  return (
    <button
      type={type}
      className={`px-4 py-2 ${getButtonStyling(styleType)} text-white`}
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
}
export default Button;
