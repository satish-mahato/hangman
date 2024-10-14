import { getMaskedString } from "./MaskingUtility.js";

function MaskedText({ text, guessedLetters }) {
  const maskedString = getMaskedString(text, guessedLetters);
  return (
    <>
      {maskedString.map((letter, index) => {
        return (
          <span className="text-5xl " key={index}>
            {letter}
          </span>
        );
      })}
    </>
  );
}
export default MaskedText;
