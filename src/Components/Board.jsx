import LetterPlacement from "./LetterPlacement";

export default function Board({wordToGuess, latestGuessedLetter, attempts}) {
  return (
      <div style={{display: "flex", justifyContent: "center"}}>
        {wordToGuess.split("").map((letter, index) => (
            <LetterPlacement letterChar={letter} key={index} latestGuessedLetter={latestGuessedLetter} attempts={attempts}/>
        ))}
      </div>
  );
}