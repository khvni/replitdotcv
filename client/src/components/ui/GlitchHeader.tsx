import { useState, useEffect } from "react";

interface GlitchHeaderProps {
  text: string;
  className?: string;
}

export default function GlitchHeader({ text, className = "" }: GlitchHeaderProps) {
  const [pixelatedIndices, setPixelatedIndices] = useState<Set<number>>(new Set());

  useEffect(() => {
    const interval = setInterval(() => {
      const newSet = new Set<number>();
      // Randomly select about 10-20% of characters to be pixelated
      for (let i = 0; i < text.length; i++) {
        if (Math.random() < 0.15) {
          newSet.add(i);
        }
      }
      setPixelatedIndices(newSet);
    }, 200); // Update every 200ms

    return () => clearInterval(interval);
  }, [text]);

  return (
    <h2 className={className}>
      {text.split('').map((char, i) => (
        <span 
          key={i} 
          className={pixelatedIndices.has(i) ? "font-pixel" : ""}
        >
          {char}
        </span>
      ))}
    </h2>
  );
}
