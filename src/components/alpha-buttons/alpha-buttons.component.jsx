import React from "react";
import "./alpha-buttons.styles.css";

const AlphaButtons = ({ disabledLetters, onGuess }) => {
  let alphabet = getAlphabet();
  return alphabet.map(l => (
    <button
      className="letters"
      disabled={disabledLetters.has(l)}
      key={l}
      onClick={() => onGuess(l)}
    >
      {l}
    </button>
  ));
};

function getAlphabet() {
  // ASCII A-Z: 65 - 90
  return [...new Array(26).keys()].map(k => String.fromCharCode(k + 65));
}

export default AlphaButtons;
