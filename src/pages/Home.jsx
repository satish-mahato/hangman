import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { useEffect, useState } from "react";

function Home() {
  const [word, setWord] = useState("");
  const [hint, setHint] = useState("");
  async function fetchWord() {
    const response = await fetch("http://localhost:3000/words");
    const data = await response.json();
    // console.log(data);
    const randomIndex = Math.floor(Math.random() * data.length);
    console.log(data[randomIndex]);

    setWord(data[randomIndex].wordValue);
    setHint(data[randomIndex].wordHint);
    console.log(setHint);
  }
  useEffect(() => {
    fetchWord();
  }, []);
  return (
    <>
      <Link to="/play" state={{ wordSelect: word, hintSelect: hint }}>
        <div>
          <Button text={"Single Player"} styleType="secondary" />
        </div>
      </Link>
      <Link to="/start">
        <div className="mt-2">
          <Button text={"Multi-Player"} styleType="success" />
        </div>
      </Link>
    </>
  );
}
export default Home;
