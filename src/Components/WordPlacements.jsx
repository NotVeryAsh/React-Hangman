import WordPlacement from "./WordPlacement";

export default function WordPlacements({wordToGuess, latestGuessedLetter, attempts}) {
  return (
      <div style={{display: "flex", justifyContent: "center"}}>
        {wordToGuess.split("").map((letter, index) => (
            <WordPlacement letterChar={letter} key={index} latestGuessedLetter={latestGuessedLetter} attempts={attempts}/>
        ))}
      </div>
  );
}