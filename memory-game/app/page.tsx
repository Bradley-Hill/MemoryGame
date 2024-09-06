"use client";

import React, { useEffect } from "react";
import { fetchCardData } from "./utils/api";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";
import DifficultySelector from "./components/DifficultySelector";
import MemoryCard from "./components/MemoryCard";

interface CardData {
  name: string;
  image_uris: {
    art_crop: string;
  };
}

export default function Home() {
  const [cardData, setCardData] = React.useState<CardData | null>(null);

  useEffect(() => {
    fetchCardData("Urza")
      .then((data) => setCardData(data))
      .catch((error) => console.error("Error fetching card data: ", error));
  }, []);

  if (!cardData) {
    return <div>Error loading card data</div>;
  }

  const artCropUrl = cardData.image_uris.art_crop;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Magic Memory Game</h1>
      <DifficultySelector />
      <ScoreBoard />
      <GameBoard />
      <MemoryCard name={cardData.name} imageUrl={artCropUrl} />
    </div>
  );
}
