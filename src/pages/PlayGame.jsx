import { Link, useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButton from "../components/LetterButton/LetterButton";
import { useState } from "react";

function PlayGame() {
  const { state } = useLocation();
  const [guessedLetters, SetGuessedLetters] = useState([]);
  function handleLetterClick(letter) {
    SetGuessedLetters([...guessedLetters, letter]);
  }
  return (
    <div>
      <h1>Play Game</h1>

      <MaskedText text={state.wordSelect} guessedLetters={guessedLetters} />
      <div>
        <LetterButton
          text={state.wordSelect}
          guessedLetters={guessedLetters}
          onLetterClick={handleLetterClick}
        />
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
