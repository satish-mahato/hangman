import { Link } from "react-router-dom";
import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";

function StartGame() {
  return (
    <>
      <h1> start game</h1>
      <TextInputFormContainer />
      <Link
        to="/play"
        className="text-blue-500 border border-gray-600 rounded-md"
      >
        Play Game
      </Link>
    </>
  );
}
export default StartGame;
