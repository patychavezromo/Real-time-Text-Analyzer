import { useState } from "react";
import {
  wordCounter,
  characterCounter,
  filteredCharacterCounter,
  numberCounter,
  getSum,
  getAverageWordLength,
} from "./TextAnalyzer";

function UserInput() {
  let [text, setText] = useState("");
  let [numWords, setNumWords] = useState(0);
  let [numcharacteres, setNumcharacteres] = useState(0);
  let [alphaNumericCount, setAlphaNumericCount] = useState(0);
  let [numberCount, setNumberCount] = useState(0);
  let [sum, setSum] = useState(0);
  let [averageWordLength, setAverageWordLength] = useState(0);

  function handleTextChange(event) {
    let newText = event.target.value;
    setText(newText);
    setNumWords(wordCounter(newText));
    setNumcharacteres(characterCounter(newText));
    setAlphaNumericCount(filteredCharacterCounter(newText));
    setNumberCount(numberCounter(newText));
    setSum(getSum(newText));
    setAverageWordLength(getAverageWordLength(newText));
  }

  return (
    <>
      <p>Word count: {numWords}</p>
      <p>characters count: {numcharacteres}</p>
      <p>
        Character count excluding spaces and special characters:{" "}
        {alphaNumericCount}
      </p>
      <p>Number count: {numberCount}</p>
      <p>Sum: {sum}</p>
      <p>average Word Length: {averageWordLength}</p>
      <textarea
        name="postContent"
        rows={10}
        cols={80}
        placeholder="write your text here!"
        value={text}
        onChange={handleTextChange}
      />
    </>
  );
}

export default UserInput;
