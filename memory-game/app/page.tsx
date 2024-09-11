"use client";

import React, { useEffect, useMemo } from "react";
import { fetchCardData } from "./utils/api";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";
import DifficultySelector from "./components/DifficultySelector";

interface CardData {
  name: string;
  image_uris: {
    art_crop: string;
  };
}

export default function Home() {
  const [cardData, setCardData] = React.useState<CardData[]>([]);
  const [currentScore, setCurrentScore] = React.useState(0);
  const [bestScore, setBestScore] = React.useState(0);
  const [clickedCards, setClickedCards] = React.useState<string[]>([]);

  const cardArray = useMemo(
    () => [
      "Urza",
      "Tarmogoyf",
      "Jace, the Mind Sculptor",
      "Black Lotus",
      "Ashnod",
      "Phyrexian Altar",
      "Mr Foxglove",
      "Squee the Immortal",
      "Sliver Queen",
      "The Locust God",
      "The Gitrog Monster",
      "The Ur-Dragon",
      "The Mimeoplasm",
      "Ixidor, Reality Sculptor",
      "Ms. Bumbleflower",
    ],
    []
  );

  useEffect(() => {
    const fetchPromises = cardArray.map((name) => fetchCardData(name));
    Promise.all(fetchPromises)
      .then((data) => {
        setCardData(data);
      })
      .catch((error) => {
        console.error("Error fetching card data: ", error);
        throw error;
      });
  }, [cardArray]);

  if (cardData.length === 0) {
    return <div>Loading card data...</div>;
  }

  const shuffleArray = (array: CardData[]) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const handleCardClick = (cardName: string) => {
    if (clickedCards.includes(cardName)) {
      setCurrentScore(0);
      setClickedCards([]);
    } else {
      setCurrentScore((previousScore) => {
        const newScore = previousScore + 1;
        setBestScore(newScore);
        return newScore;
      });
      setClickedCards([...clickedCards, cardName]);
    }
    setCardData(shuffleArray(cardData));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Magic Memory Game</h1>
      <DifficultySelector />
      <ScoreBoard currentScore={currentScore} bestScore={bestScore} />
      <GameBoard cards={cardData} onCardClick={handleCardClick} />
    </div>
  );
}
