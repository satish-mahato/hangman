import { Link, useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";

function PlayGame() {
  const { state } = useLocation();

  return (
    <div>
      <h1>Play Game</h1>

      <MaskedText text={state.wordSelect} guessedLetters={["H", "B"]} />
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
