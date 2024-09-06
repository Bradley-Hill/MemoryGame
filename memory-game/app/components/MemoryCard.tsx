import React from "react";
import Image from "next/image";

interface MemoryCardProps {
  name: string;
  imageUrl: string;
}

const MemoryCard: React.FC<MemoryCardProps> = ({ name, imageUrl }) => {
  const width = 200;
  const height = 200;
  return (
    <div className="MemoryCard">
      <Image
        src={imageUrl}
        alt={name}
        layout="responsive"
        width={width}
        height={height}
      />
      <h2>{name}</h2>
    </div>
  );
};

export default MemoryCard;
