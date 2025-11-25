import { useEffect, useRef } from "react";

export default function StaticBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);

    let animationFrameId: number;
    let t = 0;

    function render(time: number) {
      if (!ctx || !canvas) return;
      
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = 255; // Fully opaque pixels, we'll control blend via CSS
      }

      ctx.putImageData(imageData, 0, 0);
      t += 0.01;
      animationFrameId = requestAnimationFrame(() => render(time + 0.01));
    }
    render(0);

    return () => {
        window.removeEventListener('resize', resize);
        cancelAnimationFrame(animationFrameId);
    }
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-10 w-full h-full opacity-10 pointer-events-none mix-blend-overlay"
    />
  );
}
