import './App.css';
import {useState} from "react";
import Game from "./Components/Game";

function App() {

  return (
      <>
        <div className="App" style={{backgroundColor: "lightblue", color: "darkslategray", padding: 10}}>
            <h1>Hangman Game</h1>
        </div>
        <Game />
    </>
  );
}

export default App;
