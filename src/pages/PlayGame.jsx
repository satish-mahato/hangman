import { Link, useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButton from "../components/LetterButton/LetterButton";
import { useState } from "react";
import HangMan from "../components/Hangman/Hangman";

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
      <h6>Play Game</h6>

      <MaskedText text={state.wordSelect} guessedLetters={guessedLetters} />

      <div>
        <LetterButton
          text={state.wordSelect}
          guessedLetters={guessedLetters}
          onLetterClick={handleLetterClick}
        />
      </div>
      <div className="mx-auto w-64">
        <HangMan step={step} />
      </div>
      <Link
        to={"/start"}
        className="text-blue-500 border border-gray-600 rounded-md"
      >
        Start Game
      </Link>
    </div>
  );
}
export default PlayGame;
