import { useState } from "react";
import { wordCounter } from "./TextAnalyzer";

function UserInput() {
  let [text, setText] = useState("");
  let [numWords, setNumWords] = useState(0);

  function handleTextChange(event) {
    let newText = event.target.value;
    setText(newText);
    setNumWords(wordCounter(newText));
  }

  return (
    <>
      <p>Word count: {numWords}</p>
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
