import { useState } from "react";

const logos = [
  { 
    name: "OPEN SV", 
    img: "/logos/opensv.png", 
    url: "https://opensv.org" 
  },
  { 
    name: "MTC", 
    img: "/logos/mtc.png", 
    url: "https://mtc.so" 
  },
  { 
    name: "TechWadi", 
    img: "/logos/techwadi.png", 
    url: "https://techwadi.org" 
  },
  { 
    name: "Quora", 
    img: "/logos/quora.png", 
    url: "https://www.quora.com/profile/Allen-Kinney" 
  },
  { 
    name: "SCET", 
    img: "/logos/scet.png", 
    url: "https://scet.berkeley.edu" 
  },
  { 
    name: "TEDx", 
    img: "/logos/tedx.png", 
    url: "https://www.ted.com/tedx/events/64065" 
  },
  { 
    name: "Berkeley CS", 
    img: "/logos/berkeley.png", 
    url: "https://sp23.datastructur.es" 
  },
  { 
    name: "MHMA", 
    img: "/logos/icna.png", 
    url: "https://icnawestconvention.org/" 
  },
  { 
    name: "Manara West", 
    img: "/logos/manara.png", 
    url: "https://www.instagram.com/p/DFogJ7Bvovn" 
  },
  { 
    name: "Apex YPS", 
    img: "/logos/apex.png", 
    url: "https://apexmosque.org/yps2025/" 
  },
  { 
    name: "Cal Muslim Alumni", 
    img: "/logos/cma.png", 
    url: "https://calmuslimalumni.org" 
  },
  { 
    name: "Cal AMPD", 
    img: "/logos/ampd.png", 
    url: "https://www.instagram.com/calampd" 
  },
];

function LogoItem({ logo }: { logo: { name: string, img: string, url: string } }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <a 
        href={logo.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white font-mono text-sm font-bold whitespace-nowrap hover:text-[#F26207] transition-colors"
      >
        {logo.name}
      </a>
    );
  }

  return (
    <a 
      href={logo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full h-full flex items-center justify-center"
    >
      <img 
        src={logo.img} 
        alt={logo.name} 
        className="max-h-full max-w-full object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-all duration-300"
        onError={() => setError(true)}
      />
    </a>
  );
}

export default function LogoCarousel() {
  return (
    <div className="w-full overflow-hidden relative z-20 py-10 border-t border-white/5">
      {/* Gradient Masks */}
      <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-[#0B1419] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-[#0B1419] to-transparent z-10 pointer-events-none" />

      <div className="flex w-[200%] animate-scroll hover:pause">
        {/* First Set */}
        <div className="flex w-1/2 justify-around items-center gap-16 px-6">
          {logos.map((logo, index) => (
            <div 
              key={`logo-1-${index}`} 
              className="relative group flex items-center justify-center h-28 w-64"
            >
              <LogoItem logo={logo} />
            </div>
          ))}
        </div>
        {/* Duplicate Set for Infinite Loop */}
        <div className="flex w-1/2 justify-around items-center gap-16 px-6">
          {logos.map((logo, index) => (
            <div 
              key={`logo-2-${index}`} 
              className="relative group flex items-center justify-center h-28 w-64"
            >
              <LogoItem logo={logo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
