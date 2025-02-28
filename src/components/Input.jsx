import { useState } from "react";
import styles from "./Metrics.module.css"; // Importa el archivo de estilos
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
      <div className={styles.metricsContainer}>
        <p className={styles.metric}>Word count: {numWords}</p>
        <p className={styles.metric}>characters count: {numcharacteres}</p>
        <p className={styles.metric}>
          Character count excluding spaces and special characters:{" "}
          {alphaNumericCount}
        </p>
        <p className={styles.metric}>Number count: {numberCount}</p>
        <p className={styles.metric}>Sum: {sum}</p>
        <p className={styles.metric}>
          average Word Length: {averageWordLength}
        </p>
      </div>

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
