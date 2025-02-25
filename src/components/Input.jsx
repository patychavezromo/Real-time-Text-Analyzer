import { useState } from "react";
import {
  wordCounter,
  characterCounter,
  filteredCharacterCounter,
} from "./TextAnalyzer";

function UserInput() {
  let [text, setText] = useState("");
  let [numWords, setNumWords] = useState(0);
  let [numcharacteres, setNumcharacteres] = useState(0);
  let [alphaNumericCount, setAlphaNumericCount] = useState(0);

  function handleTextChange(event) {
    let newText = event.target.value;
    setText(newText);
    setNumWords(wordCounter(newText));
    setNumcharacteres(characterCounter(newText));
    setAlphaNumericCount(filteredCharacterCounter(newText));
  }

  return (
    <>
      <p>Word count: {numWords}</p>
      <p>characters count: {numcharacteres}</p>
      <p>
        Character count excluding spaces and special characters:{" "}
        {alphaNumericCount}
      </p>

      <textarea
        name="postContent"
        rows={10}
        cols={80}
        placeholder="write you text here!"
        value={text}
        onChange={handleTextChange}
      />
    </>
  );
}

export default UserInput;
