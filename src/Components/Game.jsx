import {useState} from "react";
import WordPlacement from "./WordPlacement";
import WordPlacements from "./WordPlacements";
import LetterInput from "./LetterInput";

const maxAttempts = 6;

const wordToGuess = "react";

export default function Game() {

  const [attempts, setAttempts] = useState(0);

  const [latestGuessedLetter, setLatestGuessedLetter] = useState("");

  const defaultLettersGuessed = wordToGuess.split("").map((letter, index) => letter);

  const [lettersGuessed, setLettersGuessed] = useState(defaultLettersGuessed);

  function updatedLatestGuessedLetter(letter) {
    setLatestGuessedLetter(letter);

    const array = lettersGuessed;

    // remove the letter from the array
    const index = array.indexOf(letter);

    setAttempts(attempts + 1);

      // remove the index from the array
      if (index > -1) {
          array.splice(index, 1);
      }

      if(lettersGuessed.length === 0) {
          alert("You won!");
          return;
      }

    if(attempts === maxAttempts) {
      alert("Game Over!");
    }
  }

  return (
    <div style={{backgroundColor: "lightblue", color: "darkslategray", padding: 10, textAlign: "center"}}>
        <h1>Game</h1>
        <WordPlacements wordToGuess={wordToGuess} latestGuessedLetter={latestGuessedLetter} attempts={attempts}/>
        <LetterInput updatedLatestGuessedLetter={updatedLatestGuessedLetter}/>
        <p>Attempts: {attempts}</p>
        <p>Words Guessed: {latestGuessedLetter}</p>
    </div>
  );
}