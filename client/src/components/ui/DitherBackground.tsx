import { useEffect, useRef } from "react";

export default function DitherBackground() {
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

    function drawBlock(x: number, y: number, w: number, h: number, shade: number) {
      if (!ctx) return;
      const angle = Math.PI / 6;
      const dx = w * Math.cos(angle);
      const dy = w * Math.sin(angle);
      ctx.save();
      ctx.translate(x, y);

      // top
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(dx, -dy);
      ctx.lineTo(dx * 2, 0);
      ctx.lineTo(dx, dy);
      ctx.fillStyle = `rgb(${shade + 40},${shade + 40},${shade + 40})`;
      ctx.fill();

      // right
      ctx.beginPath();
      ctx.moveTo(dx * 2, 0);
      ctx.lineTo(dx, dy);
      ctx.lineTo(dx, dy + h);
      ctx.lineTo(dx * 2, h);
      ctx.fillStyle = `rgb(${shade - 20},${shade - 20},${shade - 20})`;
      ctx.fill();

      // left
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(dx, dy);
      ctx.lineTo(dx, dy + h);
      ctx.lineTo(0, h);
      ctx.fillStyle = `rgb(${shade},${shade},${shade})`;
      ctx.fill();

      ctx.restore();
    }

    function render() {
      if (!ctx || !canvas) return;
      
      // Clear with dark background matching the theme
      ctx.fillStyle = "#0B1419";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Draw blocks with subtle movement
      drawBlock(cx - 100, cy - 100 + Math.sin(t) * 20, 80, 600, 40);
      drawBlock(cx + 50, cy - 200 + Math.cos(t * 0.8) * 20, 100, 700, 30);
      drawBlock(cx - 250, cy + 100 + Math.sin(t * 1.2) * 15, 60, 400, 50);

      // Dithering pass
      const img = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = img.data;
      for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        const noise = Math.random() * 40 - 20; // Reduced noise intensity for background usage
        // Threshold for dithering effect
        const val = avg + noise > 40 ? avg + 20 : avg - 10; 
        
        // Apply dithered value but keep color tint
        data[i] = val * 0.8;     // R (slightly blueish tint)
        data[i + 1] = val * 0.9; // G
        data[i + 2] = val;       // B
      }
      ctx.putImageData(img, 0, 0);

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
      className="absolute inset-0 z-0 w-full h-full opacity-30 pointer-events-none"
    />
  );
}
