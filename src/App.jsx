import "./App.css";
import Button from "./Button";

function App() {
  return (
    <>
      <h1>hello</h1>
      <Button
        text="login"
        onClickHandler={() => {
          console.log("login");
        }}
      />
      <Button
        text="signup"
        onClickHandler={() => {
          console.log("signup");
        }}
        styleType="error"
      />
    </>
  );
}

export default App;
