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

interface HomeProps {
  initialCardData: CardData | null;
}

export default function Home({ initialCardData }: HomeProps) {
  const [cardData, setCardData] = React.useState<CardData | null>(
    initialCardData
  );

  useEffect(() => {
    if (!initialCardData) {
      fetchCardData("Black Lotus")
        .then((data) => setCardData(data))
        .catch((error) => console.error("Error fetching card data: ", error));
    }
  }, [initialCardData]);

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
