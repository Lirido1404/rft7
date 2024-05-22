import Image from "next/image";
import React from "react";


interface Props {
  feedBack: number;
}

function StarsDisplay({ feedBack }:Props) {
  const stars = [];

  for (let i = 0; i < feedBack; i++) {
    stars.push(
      <Image
        key={i}
        src="/Images/starss.svg"
        width={30}
        height={40}
        alt="starss"
      />
    );
  }

  return <div className="flex gap-2">{stars}</div>;
}

export default StarsDisplay;
