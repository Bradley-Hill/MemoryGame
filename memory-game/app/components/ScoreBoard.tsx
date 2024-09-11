import React from "react";
import "../styles/Score.css";

interface ScoreboardProps {
  currentScore: number;
  bestScore: number;
}

const ScoreBoard: React.FC<ScoreboardProps> = ({ currentScore, bestScore }) => {
  return (
    <div className="score-board">
      <h2>Current Score: {currentScore}</h2>
      <h2>High Score: {bestScore}</h2>
    </div>
  );
};

export default ScoreBoard;
