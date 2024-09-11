import React from "react";
import MemoryCard from "./MemoryCard";
import "../styles/GameBoard.css";

interface CardData {
  name: string;
  image_uris: {
    art_crop: string;
  };
}

interface GameBoardProps {
  cards: CardData[];
}

const GameBoard: React.FC<GameBoardProps> = ({ cards }) => {
  return (
    <div className="game-board">
      {cards.map((card: CardData) => (
        <MemoryCard key={card.name} card={card} />
      ))}
    </div>
  );
};

export default GameBoard;
