import React, { useEffect, useState } from "react";
import MemoryCard from "./MemoryCard";
import "../styles/GameBoard.css";
import { shuffleArray } from "../utils/utilFunctions";

interface CardData {
  name: string;
  image_uris: {
    art_crop: string;
  };
}

interface GameBoardProps {
  cards: CardData[];
  onCardClick: (cardName: string) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ cards, onCardClick }) => {
  const [shuffledCards, setShuffledCards] = useState<CardData[]>([]);

  useEffect(() => {
    setShuffledCards(shuffleArray(cards));
  }, [cards]);

  return (
    <div className="game-board">
      {shuffledCards.map((card: CardData) => (
        <MemoryCard key={card.name} card={card} onCardClick={onCardClick} />
      ))}
    </div>
  );
};

export default GameBoard;
