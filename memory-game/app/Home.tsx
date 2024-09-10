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

  const cardArray = useMemo(
    () => [
      "Urza",
      "Tarmogoyf",
      "Jace, the Mind Sculptor",
      "Black Lotus",
      "Yawgmoth",
      "Ashnod",
      "Phyrexian Altar",
      "Mr Foxglove",
      "Nadu",
      "Ulamog",
      "Squee",
      "Sliver Queen",
      "The Locust God",
      "The Gitrog Monster",
      "The Ur-Dragon",
      "The Mimeoplasm",
      "Ixidor",
      "Tamiyo",
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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Magic Memory Game</h1>
      <DifficultySelector />
      <ScoreBoard />
      <GameBoard cards={cardData} />
    </div>
  );
}
