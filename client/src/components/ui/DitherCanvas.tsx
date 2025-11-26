import { useEffect, useRef } from "react";

interface DitherCanvasProps {
  mode?: 'city' | 'orb' | 'noise' | 'net' | 'chip';
  intensity?: number;
  className?: string;
}

export default function DitherCanvas({ mode = 'city', intensity = 1.0, className = "" }: DitherCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      // Use window dimensions for full screen background
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    // --- Drawing Modes ---

    const drawCity = (t: number) => {
      const cx = canvas.width * 0.5;
      const cy = canvas.height * 0.5;
      
      // Helper for Iso Cubes
      const drawBlock = (x: number, y: number, w: number, h: number, shade: number) => {
        const angle = Math.PI / 6;
        const dx = w * Math.cos(angle);
        const dy = w * Math.sin(angle);
        
        ctx.save();
        ctx.translate(x, y);
        
        // Top
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(dx, -dy);
        ctx.lineTo(dx * 2, 0);
        ctx.lineTo(dx, dy);
        ctx.fillStyle = `rgb(${shade+40},${shade+40},${shade+40})`;
        ctx.fill();
        
        // Right
        ctx.beginPath();
        ctx.moveTo(dx*2, 0);
        ctx.lineTo(dx, dy);
        ctx.lineTo(dx, dy+h);
        ctx.lineTo(dx*2, h);
        ctx.fillStyle = `rgb(${shade-20},${shade-20},${shade-20})`;
        ctx.fill();

        // Left
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(dx, dy);
        ctx.lineTo(dx, dy+h);
        ctx.lineTo(0, h);
        ctx.fillStyle = `rgb(${shade},${shade},${shade})`;
        ctx.fill();
        ctx.restore();
      };

      // Abstract Monoliths
      drawBlock(cx - 100, cy - 100 + Math.sin(t)*20, 80, 600, 100);
      drawBlock(cx + 50, cy - 200 + Math.cos(t*0.8)*20, 100, 700, 80);
      drawBlock(cx - 250, cy + 100 + Math.sin(t*1.2)*15, 60, 400, 120);
      
      // Floating debris
      drawBlock(cx + 200, cy + Math.sin(t*2)*40, 30, 30, 200);
    };

    const drawOrb = (t: number) => {
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        const radius = Math.min(canvas.width, canvas.height) * 0.3;
        
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 1.5);
        grad.addColorStop(0, '#fff');
        grad.addColorStop(0.5, '#444');
        grad.addColorStop(1, '#000');
        
        ctx.fillStyle = grad;
        ctx.beginPath();
        
        // Deformed sphere
        for(let i=0; i<Math.PI*2; i+=0.1) {
           const r = radius + Math.sin(i*5 + t)*20 + Math.cos(i*3 - t)*20;
           const x = cx + Math.cos(i) * r;
           const y = cy + Math.sin(i) * r;
           if(i===0) ctx.moveTo(x,y);
           else ctx.lineTo(x,y);
        }
        ctx.fill();
    };

    const drawNet = (t: number) => {
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        
        // Draw connecting nodes
        for(let i=0; i<20; i++) {
            const x = cx + Math.cos(i * 1.5 + t * 0.5) * 300;
            const y = cy + Math.sin(i * 2.1 + t * 0.3) * 200;
            
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, Math.PI * 2);
            ctx.fillStyle = '#fff';
            ctx.fill();
            
            // Connections
            for(let j=0; j<5; j++) {
                 const x2 = cx + Math.cos((i+j) * 1.5 + t * 0.5) * 300;
                 const y2 = cy + Math.sin((i+j) * 2.1 + t * 0.3) * 200;
                 
                 const dist = Math.sqrt(Math.pow(x-x2, 2) + Math.pow(y-y2, 2));
                 if(dist < 200) {
                     ctx.beginPath();
                     ctx.moveTo(x, y);
                     ctx.lineTo(x2, y2);
                     ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist/200})`;
                     ctx.stroke();
                 }
            }
        }
    };

    const drawChip = (t: number) => {
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        const scale = 2; // Zoom in
        
        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(scale, scale);
        ctx.translate(-cx, -cy);

        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;

        // Circuit paths
        for(let i=0; i<20; i++) {
            const offset = (i * 50 + t * 50) % canvas.height;
            const x = (i * 100) % canvas.width;
            
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, offset);
            ctx.lineTo(x + 50, offset + 50);
            ctx.lineTo(x + 50, canvas.height);
            ctx.stroke();
            
            // Data packets
            const packetY = (t * 200 + i * 100) % canvas.height;
            if (packetY > offset && packetY < offset + 50) {
                 ctx.fillStyle = '#fff';
                 ctx.fillRect(x + (packetY - offset), packetY, 10, 10);
            } else if (packetY > offset + 50) {
                 ctx.fillStyle = '#fff';
                 ctx.fillRect(x + 50 - 5, packetY, 10, 10);
            } else {
                 ctx.fillStyle = '#fff';
                 ctx.fillRect(x - 5, packetY, 10, 10);
            }
        }
        ctx.restore();
    };

    const drawNoise = (t: number) => {
        // Generate scrolling scanlines
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        for(let i=0; i<10; i++) {
            const offset = (t * 100 + i * 200) % (canvas.height + 200) - 100;
            gradient.addColorStop(Math.max(0, Math.min(1, offset/canvas.height)), '#000');
            gradient.addColorStop(Math.max(0, Math.min(1, (offset+50)/canvas.height)), '#444');
            gradient.addColorStop(Math.max(0, Math.min(1, (offset+100)/canvas.height)), '#000');
        }
        ctx.fillStyle = gradient;
        ctx.fillRect(0,0,canvas.width, canvas.height);
    };

    const render = () => {
      if (!ctx || !canvas) return;
      
      time += 0.01 * intensity;
      
      // Clear Background
      ctx.fillStyle = '#0B1419'; // Base background color (Replit Dark)
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw Source
      if (mode === 'city') drawCity(time);
      if (mode === 'orb') drawOrb(time);
      if (mode === 'net') drawNet(time);
      if (mode === 'chip') drawChip(time);
      if (mode === 'noise') drawNoise(time);

      // DITHER ALGORITHM
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const avg = (r + g + b) / 3;
        
        // Bayer-like ordered dither logic mixed with noise
        const x = (i / 4) % canvas.width;
        const y = Math.floor((i / 4) / canvas.width);
        
        // Pattern offset
        const pattern = ((x % 4) * 4 + (y % 4)) * 16; 
        
        // Mix ordered pattern with random noise for that "crunchy" look
        const noise = Math.random() * 50 - 25;
        const threshold = pattern + noise;
        
        const val = avg > threshold ? 255 : 0;

        // Apply Replit Orange Tint to high brightness pixels in 3D modes
        if ((mode === 'city' || mode === 'orb' || mode === 'net' || mode === 'chip') && val === 255) {
             // Randomize tint application for some noise/texture variation
             if (mode === 'orb' && Math.random() < 0.2) {
                // Keep some white sparkles in orb mode
                data[i] = val;
                data[i + 1] = val;
                data[i + 2] = val;
             } else {
                data[i] = 242; // R #F26207
                data[i + 1] = 98; // G
                data[i + 2] = 7; // B
             }
        } else {
            // Standard dither
            data[i] = val;
            data[i + 1] = val;
            data[i + 2] = val;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    }
  }, [mode, intensity]);

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} />;
};
