import {useState} from "react";

export default function LetterInput({updatedLatestGuessedLetter}) {

    const [textInput, setTextInput] = useState("");

    function handleClick(){
        updatedLatestGuessedLetter(textInput);
    }

    function handleChange(event)
    {
        setTextInput(event.target.value);
    }

    return (
        <>
            <input id="letter_input" type={"text"} maxLength={1} value={textInput} onChange={handleChange}></input>
            <button onClick={handleClick}>Letter</button>
        </>
    );
}