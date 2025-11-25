import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

export default function Hero() {
  const [isFocused, setIsFocused] = useState(true);

  const logos = [
    { name: "OPEN SV", url: "https://opensv.org" },
    { name: "MTC", url: "https://mtc.so" },
    { name: "UC Berkeley", url: "https://sp23.datastructur.es" },
    { name: "SCET", url: "https://scet.berkeley.edu" },
    { name: "TechWadi", url: "https://techwadi.org" },
    { name: "TEDx", url: "https://www.ted.com/tedx/events/64065" },
    { name: "Quora", url: "https://www.quora.com/profile/Allen-Kinney" },
    { name: "ICNA Bay Area", url: "https://icnawestconvention.org/" },
    { name: "Manara West", url: "https://www.instagram.com/p/DFogJ7Bvovn" },
    { name: "Apex YPS", url: "https://apexmosque.org/yps2025/" },
    { name: "Cal Muslim Alumni", url: "https://calmuslimalumni.org" },
    { name: "Cal AMPD", url: "https://www.instagram.com/calampd" },
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 bg-[#0B1419]">
      <div className="container relative z-20 px-6 text-center max-w-7xl mx-auto flex flex-col items-center">
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 text-white"
        >
          Turn community into shipping
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-[#AEBEC7] mb-12 max-w-2xl"
        >
          Ali Khani. 1800+ students taught. 30+ chapters built. Zero fluff.
        </motion.p>

        {/* Replit Prompt Simulation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-2xl bg-[#1C232B] rounded-xl border border-[#2B323B] shadow-2xl overflow-hidden mb-24 relative"
        >
           {/* Prompt Header */}
           <div className="flex items-center justify-between px-4 py-3 border-b border-[#2B323B] bg-[#1C232B]">
              <div className="flex gap-2">
                <div className="px-3 py-1 rounded-full bg-[#2B323B] text-xs font-medium text-[#AEBEC7] flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-[#F26207]" /> 
                  Get suggestions
                </div>
                <div className="px-3 py-1 rounded-full bg-transparent text-xs font-medium text-[#5D6C76] border border-[#2B323B]">
                  Write a prompt
                </div>
              </div>
           </div>

           {/* Prompt Body */}
           <div className="p-6 text-left min-h-[200px] flex flex-col">
              <div className="text-xl md:text-2xl text-[#AEBEC7] font-light leading-relaxed">
                <span className="opacity-50">Find me a </span>
                <span className="text-white font-normal">DevRel Engineer</span>
                <span className="opacity-50"> who </span>
                <span className="text-[#F26207] border-b border-[#F26207]/30 pb-1">
                  <Typewriter
                    options={{
                      strings: [
                        "built a national movement from scratch.",
                        "teaches 1800+ students with empathy.",
                        "ships AI demos in hours, not weeks.",
                        "actually understands the stack."
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      deleteSpeed: 30,
                    }}
                  />
                </span>
              </div>
              
              <div className="mt-auto pt-8">
                 <div className="h-[1px] bg-[#2B323B] w-full mb-4"></div>
                 <button 
                   onClick={() => document.getElementById('mtc')?.scrollIntoView({ behavior: 'smooth' })}
                   className="w-full bg-white text-black hover:bg-[#F26207] hover:text-white transition-all font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
                 >
                   Start Building with Ali <ArrowRight className="w-4 h-4" />
                 </button>
              </div>
           </div>
        </motion.div>

        {/* Trusted By Logos */}
        <div className="w-full max-w-5xl mx-auto">
          <p className="text-sm text-[#5D6C76] mb-6 font-medium uppercase tracking-wider">Trusted By & Building With</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 opacity-60">
            {logos.map((logo, index) => (
              <a 
                key={index} 
                href={logo.url} 
                target="_blank" 
                rel="noreferrer"
                className="text-[#AEBEC7] hover:text-white transition-colors font-medium text-sm md:text-base flex items-center gap-2"
              >
                {logo.name}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
