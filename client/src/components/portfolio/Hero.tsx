import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export default function Hero() {
  // Function to render text with randomized pixelated characters
  const PixelatedText = ({ text, className }: { text: string, className?: string }) => {
    return (
      <span className={className}>
        {text.split('').map((char, i) => {
          // Randomly choose some characters to be pixelated (every 3rd or 4th char approx)
          const isPixel = (i + 2) % 4 === 0 || (i + 5) % 7 === 0;
          return (
            <span key={i} className={isPixel ? "font-pixel" : ""}>
              {char}
            </span>
          );
        })}
      </span>
    );
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Content */}
      <div className="container relative z-20 px-6 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight mb-8 text-white leading-[1.05]">
            Turn <PixelatedText text="ideas" /> into <br className="hidden md:block" />
            <span className="text-[#F26207]"><PixelatedText text="apps" /></span>
          </h1>

          <p className="text-xl md:text-2xl text-[#AEBEC7] max-w-3xl mb-12 font-light leading-relaxed">
            What will you create? The possibilities are endless when you have a DevRel who ships at the speed of thought.
          </p>

          {/* Search Bar / Prompt Input Simulation - Mirroring Replit's "Make me a game..." */}
          <div className="w-full max-w-2xl relative mb-20">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#F26207]/20 to-[#F26207]/10 rounded-lg blur opacity-75" />
            <div className="relative bg-[#1B252B] rounded-lg border border-white/10 p-6 text-left shadow-2xl">
              <div className="flex gap-2 mb-4">
                <span className="bg-white/5 text-xs text-[#AEBEC7] px-2 py-1 rounded border border-white/5">Get suggestions</span>
                <span className="bg-white/5 text-xs text-[#AEBEC7] px-2 py-1 rounded border border-white/5">Write a prompt</span>
              </div>
              
              <div className="font-mono text-lg md:text-xl text-white mb-6 leading-relaxed">
                <span className="text-[#AEBEC7]">Make me </span>
                <span className="text-white border-b border-[#F26207]">a DevRel Engineer</span>
                <br />
                <span className="text-[#AEBEC7]">who has taught </span>
                <span className="text-white border-b border-[#a855f7]">1800+ students</span>
                <br />
                <span className="text-[#AEBEC7]">and built a </span>
                <span className="text-white border-b border-[#3b82f6]">30-university community</span>
              </div>

              <div className="h-px bg-white/5 mb-4" />
              
              <button 
                 onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-white text-black font-bold py-3 rounded hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
              >
                Start building with Ali <Terminal className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
        
        {/* Social Proof / "Loved by..." Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center"
        >
          <p className="text-sm text-[#5d6c76] mb-6 uppercase tracking-widest font-bold">
            Trusted by founders and communities at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-hack font-bold text-white">UC Berkeley</span>
            <span className="text-xl font-hack font-bold text-white">MTC</span>
            <span className="text-xl font-hack font-bold text-white">OPEN SV</span>
            <span className="text-xl font-hack font-bold text-white">TEDx</span>
            <span className="text-xl font-hack font-bold text-white">Quora (6M+)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
