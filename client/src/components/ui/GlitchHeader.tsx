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
      const textLength = text.length;
      
      // Select 3-4 random indices
      const count = Math.floor(Math.random() * 2) + 3; // Random integer between 3 and 4
      
      for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * textLength);
        newSet.add(randomIndex);
      }
      
      setPixelatedIndices(newSet);
    }, 1200); // Faster but not distracting

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
