import React from "react";
import Image from "next/image";

interface MemoryCardProps {
  name: string;
  imageUrl: string;
}

const MemoryCard: React.FC<MemoryCardProps> = ({ name, imageUrl }) => {
  const width = 250;
  const height = 250;
  return (
    <div className="MemoryCard">
      <Image
        src={imageUrl}
        alt={name}
        // layout="intrinsic"
        width={width}
        height={height}
      />
      <h2>{name}</h2>
    </div>
  );
};

export default MemoryCard;
