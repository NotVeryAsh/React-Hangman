import {useState} from "react";

export default function LetterInput({updatedLatestGuessedLetter}) {

    const [textInput, setTextInput] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        updatedLatestGuessedLetter(textInput);
    }

    function handleChange(event)
    {
        setTextInput(event.target.value);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input id="letter_input" type={"text"} maxLength={1} value={textInput} onChange={handleChange}></input>
                <button type="submit">Letter</button>
            </form>
        </>
    );
}