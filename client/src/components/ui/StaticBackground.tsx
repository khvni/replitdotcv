import { useEffect, useRef } from "react";

export default function StaticBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let animationFrameId: number;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    function render() {
      if (!ctx || !canvas) return;
      
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        // Make it grayscale noise
        data[i] = value;     // R
        data[i + 1] = value; // G
        data[i + 2] = value; // B
        // Add transparency to blend with background
        data[i + 3] = 30;    // Alpha (low opacity to blend)
      }

      ctx.putImageData(imageData, 0, 0);
      t += 0.01;
      animationFrameId = requestAnimationFrame(render);
    }

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 w-full h-full opacity-20 pointer-events-none mix-blend-overlay"
    />
  );
}
