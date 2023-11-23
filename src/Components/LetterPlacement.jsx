import {useState} from "react";

export default function LetterPlacement({letterChar, latestGuessedLetter, attempts}) {

  const [letter, setLetter] = useState(letterChar);

  const [isLetterGuessed, setIsLetterGuessed] = useState(false);

  const [attemptAmount, setAttemptAmount] = useState(0);

  function setIsLetterGuessedState(isLetterGuessed) {
    setIsLetterGuessed(isLetterGuessed);
  }

  if(attemptAmount !== attempts) {
    setAttemptAmount(attempts);
    if(letterChar === latestGuessedLetter) {
      setIsLetterGuessedState(true);
    }
  }

  return (
    <div style={{backgroundColor: "lightblue", color: "darkslategray", padding: 10, textAlign: "center"}}>
        <h2>{isLetterGuessed ? letter : '_'}</h2>
    </div>
  );
}