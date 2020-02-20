import React, { Component } from "react";
import Hangman from "./components/hangman/hangman.component";
import config from "./config.json";
import background from "./images/crumpled-paper.jpg";
import "./App.css";

const MAX_CHANCES = 10;
const MIN_CHANCES = 6;

class App extends Component {
  state = {
    answer: generateAnswer(),
    guessed: new Set(),
    chanceRemaining: getChances()
  };

  handleReset = () => {
    this.setState({
      answer: generateAnswer(),
      guessed: new Set(),
      chanceRemaining: getChances()
    });
  };

  handleGuess = l => {
    let { answer, chanceRemaining } = this.state;
    if (chanceRemaining === 0) return;
    let guessed = new Set(this.state.guessed);
    guessed.add(l);
    if (!answer.toUpperCase().includes(l)) {
      chanceRemaining--;
    }
    this.setState({ guessed, chanceRemaining });
  };

  render() {
    return (
      <div className="App" background={background}>
        <Hangman
          {...this.state}
          onReset={this.handleReset}
          onGuess={this.handleGuess}
        />
      </div>
    );
  }
}

function generateAnswer() {
  const dict = config.dictionary;
  const randomIndex = Math.ceil(Math.random() * dict.length);
  console.log(dict[randomIndex]);
  return dict[randomIndex];
}

function getChances() {
  return Math.ceil(Math.random() * (MAX_CHANCES - MIN_CHANCES)) + MIN_CHANCES;
}

export default App;
