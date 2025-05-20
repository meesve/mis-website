"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

const StopMotion = () => {
  const frameCount = 9; // Number of frames in your animation
  const frameRate = 160; // Frame change interval in milliseconds
  const [currentFrame, setCurrentFrame] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame % frameCount) + 1);
    }, frameRate);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex justify-center items-center">
      <Image
        src={`/images/stopmotion/frame-${currentFrame}.png`}
        alt={`Frame ${currentFrame}`}
        width={800}
        height={600}
        className="w-full max-w-lg"
        priority
      />
    </div>
  );
};

export default StopMotion;
