import React from "react";
import Image from "next/image";
import "../styles/MemoryCard.css";

interface CardData {
  name: string;
  image_uris: {
    art_crop: string;
  };
}

interface MemoryCardProps {
  card: CardData;
}

const MemoryCard: React.FC<MemoryCardProps> = ({ card }) => {
  const width = 250;
  const height = 250;
  return (
    <div className="MemoryCard">
      <Image
        src={card.image_uris.art_crop}
        alt={card.name}
        width={width}
        height={height}
      />
      <h2>{card.name}</h2>
    </div>
  );
};

export default MemoryCard;
