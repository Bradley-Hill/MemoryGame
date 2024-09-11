import React from "react";
import "../styles/Score.css";

interface ScoreboardProps {
  currentScore: number;
}

const ScoreBoard: React.FC<ScoreboardProps> = ({ currentScore }) => {
  return (
    <div className="score-board">
      <h2>Current Score: {currentScore}</h2>
      <h2>High Score: 0</h2>
    </div>
  );
};

export default ScoreBoard;
