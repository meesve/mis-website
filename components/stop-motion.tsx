"use client"

import { useEffect, useState } from "react";

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
      <img
        src={`/images/stopmotion/frame-${currentFrame}.png`}
        alt={`Frame ${currentFrame}`}
        className="w-full max-w-lg"
      />
    </div>
  );
};

export default StopMotion;
