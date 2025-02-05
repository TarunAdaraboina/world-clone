import React from "react";
import "./Result.css";

const Result = ({ gameStatus, restartGame }) => {
  return (
    <div className="result-container">
      {gameStatus === "won" ? (
        <h2 className="win-message">
          Congratulations! You’ve successfully guessed the word. Well done! 🎉
        </h2>
      ) : (
        <h2 className="lose-message">
          Game Over. Better luck next time! Try again to improve your skills. ❌
        </h2>
      )}
      <button className="restart-button" onClick={restartGame}>
        New Game 🔄
      </button>
    </div>
  );
};

export default Result;
