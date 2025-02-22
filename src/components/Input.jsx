//import useState from "react";
import { useState } from "react";

function UserInput() {
  const [text, setText] = useState("");

  function handleTextArea(value) {
    setText(value);
  }

  return (
    <>
      <textarea
        name="postContent"
        rows={10}
        cols={80}
        placeholder="write you text here!"
        value={text}
        onChange={(event) => {
          handleTextArea(event.target.value);
        }}
      />
      <p>{text}</p>
    </>
  );
}

export default UserInput;
