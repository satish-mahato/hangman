function Button({ text, onClickHandler, styleType = "primary" }) {
  return (
    <button
      onClick={onClickHandler}
      className={`px-4 py-2 ${getButtonStyling(styleType)} text-white`}
    >
      {text}
    </button>
  );
}
function getButtonStyling(styleType) {
  if (styleType === "primary") {
    return "bg-blue-500";
  } else if (styleType === "secondary") {
    return "bg-gray-500";
  } else if (styleType === "error") {
    return "bg-red-500";
  } else if (styleType === "success") {
    return "bg-green-500";
  } else if (styleType === "warning") {
    return "bg-yellow-500";
  }
}
export default Button;
