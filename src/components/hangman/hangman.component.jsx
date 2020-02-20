import React from "react";
import AlphaButtons from "../alpha-buttons/alpha-buttons.component";
import "./hangman.styles.css";
import img0 from "../../images/0.jpg";
import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";
import img4 from "../../images/4.jpg";
import img5 from "../../images/5.jpg";
import img6 from "../../images/6.jpg";
import img7 from "../../images/7.jpg";
import img8 from "../../images/8.jpg";
import img9 from "../../images/9.jpg";
import img10 from "../../images/10.jpg";

const images = [
  img0,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10
];

const Hangman = ({ answer, guessed, onReset, onGuess, chanceRemaining }) => {
  const guessedWord = getGuessedWord(answer, guessed);
  return (
    <div className="hangmang">
      <h1>Hangman</h1>
      <h2>Life Remaining: {chanceRemaining}</h2>
      {chanceRemaining === 0 ? <h3>You Lost!</h3> : ""}
      {guessedWord && !guessedWord.includes("_") ? <h3>You Won!</h3> : ""}
      <img
        src={images[images.length - 1 - chanceRemaining]}
        alt={chanceRemaining + " chances remaining."}
      />
      <p className="guessed-word">{guessedWord}</p>
      <AlphaButtons disabledLetters={guessed} onGuess={onGuess} />
      <div>
        <button className="reset" onClick={onReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

function getGuessedWord(answer, guessed) {
  return answer
    .toUpperCase()
    .split("")
    .map(l => (guessed.has(l) ? l : "_"));
}

export default Hangman;
