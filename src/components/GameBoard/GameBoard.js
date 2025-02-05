import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Confetti from "react-confetti";
import Result from "../Result/Result";
import "./GameBoard.css";

const WORD_TO_GUESS = "REACT";
const MAX_ATTEMPTS = 3;

const GameBoard = () => {
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameStatus, setGameStatus] = useState("playing");
  const [message, setMessage] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [hints, setHints] = useState([]);

  const handleInputChange = (e) => {
    if (e.target.value.length <= 5) {
      setCurrentGuess(e.target.value.toUpperCase());
      setMessage("");
    }
  };

  const checkGuess = () => {
    if (currentGuess.length < 5) {
      setMessage("⚠️ Enter a 5-letter word!");
      return;
    }

    if (guesses.length >= MAX_ATTEMPTS - 1) {
      setGameStatus("lost");
    }

    if (currentGuess === WORD_TO_GUESS) {
      setGameStatus("won");
    }

    setGuesses([...guesses, currentGuess]);
    setCurrentGuess("");

    if (guesses.length + 1 < MAX_ATTEMPTS) {
      setHints([...hints, WORD_TO_GUESS[guesses.length]]);
    }

  };

  const getLetterFeedback = (guess) => {
    return guess.split("").map((letter, index) => {
      if (letter === WORD_TO_GUESS[index]) {
        return { letter, color: "green" };
      } else if (WORD_TO_GUESS.includes(letter)) {
        return { letter, color: "yellow" };
      } else {
        return { letter, color: "gray" };
      }
    });
  };

  const restartGame = () => {
    setGuesses([]);
    setCurrentGuess("");
    setGameStatus("playing");
    setMessage("");
    setHints([]);
  };

  return (
    <div className={`game-container ${darkMode ? "dark-mode" : ""}`}>
      {gameStatus === "won" && <Confetti />}
      <div className="header">
        <h1 className="title">Wordle Clone</h1>
        <button className="toggle-button" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun className="dark-icon" /> : <FaMoon className="light-icon" />}
        </button>
      </div>
      <div className="container">
      <p className="instruction">Guess a 5-letter word</p>
      <p className={`game-status ${gameStatus}`}>Game Status : {gameStatus}</p>
      <p className="attempts">Attempts Available : {MAX_ATTEMPTS - guesses.length}</p>
      {hints.length > 1 && (
      <p className="hint-message">💡 Hint: It's a technical word</p>
       )}
      </div>
      
      <div className="grid">
        {guesses.map((guess, index) => (
          <div key={index} className="row">
            {getLetterFeedback(guess).map((item, idx) => (
              <span key={idx} className={`letter ${item.color} animate-letter`}>
                {item.letter}
              </span>
            ))}
          </div>
        ))}
      </div>
      
      {gameStatus === "playing" ? (
        <>
          <div className="input-section">
            <input
              type="text"
              className="input-box"
              value={currentGuess}
              onChange={handleInputChange}
              maxLength={5}
            />
            <button className="submit-button" onClick={checkGuess}>Submit</button>
          </div>
          <p className="message">{message}</p>
        </>
      ) : (
        <Result gameStatus={gameStatus} restartGame={restartGame} />
      )}
    </div>
  );
};

export default GameBoard;
