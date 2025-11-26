import { useEffect, useRef } from "react";

const logos = [
  { name: "OPEN SV", url: "https://logo.clearbit.com/opensv.org" },
  { name: "MTC", url: "https://logo.clearbit.com/mtc.so" },
  { name: "Berkeley CS", url: "/logos/berkeley.svg" },
  { name: "SCET", url: "https://logo.clearbit.com/scet.berkeley.edu" },
  { name: "TechWadi", url: "https://logo.clearbit.com/techwadi.org" },
  { name: "TEDx", url: "/logos/tedx.png" },
  { name: "Quora", url: "https://logo.clearbit.com/quora.com" },
  { name: "ICNA", url: "/logos/icna.png" },
  { name: "Manara West", url: "https://logo.clearbit.com/manarawest.org" },
  { name: "Apex YPS", url: "https://logo.clearbit.com/apexmosque.org" },
  { name: "Cal Muslim Alumni", url: "https://logo.clearbit.com/calmuslimalumni.org" },
  { name: "Cal AMPD", url: "/logos/ampd.png" },
];

export default function LogoCarousel() {
  return (
    <div className="w-full overflow-hidden relative z-20 py-8 border-t border-white/5">
      {/* Gradient Masks */}
      <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-[#0B1419] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[#0B1419] to-transparent z-10 pointer-events-none" />

      <div className="flex w-[200%] animate-scroll hover:pause">
        {/* First Set */}
        <div className="flex w-1/2 justify-around items-center gap-12 px-6">
          {logos.map((logo, index) => (
            <div 
              key={`logo-1-${index}`} 
              className="relative group flex items-center justify-center h-12 w-32 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="max-h-full max-w-full object-contain brightness-0 invert"
                onError={(e) => {
                    // Fallback to text if image fails
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerText = logo.name;
                    e.currentTarget.parentElement!.style.color = 'white';
                    e.currentTarget.parentElement!.style.fontFamily = 'monospace';
                    e.currentTarget.parentElement!.style.fontSize = '14px';
                    e.currentTarget.parentElement!.style.fontWeight = 'bold';
                }}
              />
            </div>
          ))}
        </div>
        {/* Duplicate Set for Infinite Loop */}
        <div className="flex w-1/2 justify-around items-center gap-12 px-6">
          {logos.map((logo, index) => (
            <div 
              key={`logo-2-${index}`} 
              className="relative group flex items-center justify-center h-12 w-32 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="max-h-full max-w-full object-contain brightness-0 invert"
                onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerText = logo.name;
                    e.currentTarget.parentElement!.style.color = 'white';
                    e.currentTarget.parentElement!.style.fontFamily = 'monospace';
                    e.currentTarget.parentElement!.style.fontSize = '14px';
                    e.currentTarget.parentElement!.style.fontWeight = 'bold';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
