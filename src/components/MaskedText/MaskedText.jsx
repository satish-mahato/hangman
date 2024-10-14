import { getMaskedString } from "./MaskingUtility.js";

function MaskedText({ text, guessedLetters }) {
  const maskedString = getMaskedString(text, guessedLetters);
  return (
    <>
      {maskedString.map((letter, index) => {
        return (
          <span key={index} className="m-1">
            {letter}
          </span>
        );
      })}
    </>
  );
}
export default MaskedText;
