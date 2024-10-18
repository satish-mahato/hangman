import { Link, useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButton from "../components/LetterButton/LetterButton";
import { useState } from "react";
import HangMan from "../components/Hangman/Hangman";
import Button from "../components/Button/Button";

function PlayGame() {
  const { state } = useLocation();
  const [guessedLetters, SetGuessedLetters] = useState([]);
  const [step, SetStep] = useState(0);
  function handleLetterClick(letter) {
    if (state.wordSelect.toUpperCase().includes(letter)) {
      console.log("Correct");
    } else {
      console.log("Wrong");
      SetStep(step + 1);
    }
    SetGuessedLetters([...guessedLetters, letter]);
  }
  return (
    <div>
      <h6>Hint</h6>
      {state?.wordSelect && (
        <>
          <h1>{state?.hintSelect}</h1>
          <MaskedText text={state.wordSelect} guessedLetters={guessedLetters} />

          <div className="mt-2">
            <LetterButton
              text={state.wordSelect}
              guessedLetters={guessedLetters}
              onLetterClick={handleLetterClick}
            />
          </div>
          <div className="mx-auto w-64">
            <HangMan step={step} />
          </div>
        </>
      )}

      <Link to={"/"}>
        <Button text={"Home"} styleType="warning" />
      </Link>
    </div>
  );
}
export default PlayGame;
