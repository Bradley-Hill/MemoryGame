import React from "react";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";
import DifficultySelector from "./components/DifficultySelector";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Magic Memory Game</h1>
      <DifficultySelector />
      <ScoreBoard />
      <GameBoard />
    </div>
  );
}
