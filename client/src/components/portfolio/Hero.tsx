import { motion } from "framer-motion";
import { Terminal, ArrowRight } from "lucide-react";

export default function Hero() {
  const PixelatedText = ({ text, className }: { text: string, className?: string }) => {
    return (
      <span className={className}>
        {text.split('').map((char, i) => {
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
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 bg-[#0B1419]">
      {/* Industrial Grid Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} 
      />

      {/* Content */}
      <div className="container relative z-20 px-6 text-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          {/* Neobrutalist Badge */}
          <div className="mb-8 bg-[#F26207] text-black font-bold px-4 py-1 transform -rotate-1 border border-white shadow-[4px_4px_0px_0px_#ffffff]">
             <span className="font-mono uppercase tracking-tight text-sm">Status: Ready to Deploy</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter mb-8 text-white leading-[1.1] uppercase">
            I Build <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F26207] via-white to-[#F26207] animate-gradient-x">Communities</span> <br />
            That <span className="text-[#F26207]"><PixelatedText text="Ship" /></span>
          </h1>

          <p className="text-xl md:text-2xl text-[#AEBEC7] max-w-3xl mb-12 font-sans font-light leading-relaxed text-center">
            1800+ students taught. 30+ chapters built. 16k+ views. <br className="hidden md:block"/>
            I don't fluff. I execute.
          </p>

          {/* Search Bar / Prompt Input Simulation */}
          <div className="w-full max-w-2xl relative mb-20 group">
            <div className="absolute -inset-1 bg-[#F26207] rounded-lg opacity-10 group-hover:opacity-20 transition-opacity duration-500 blur-xl" />
            <div className="relative bg-[#1B252B] border border-white/20 rounded-lg overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="bg-[#0B1419] px-4 py-3 border-b border-white/10 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                <span className="ml-4 font-mono text-xs text-[#5d6c76]">ali_khani.sh</span>
              </div>

              <div className="p-6 font-mono text-lg text-white text-left leading-relaxed">
                <div className="mb-4">
                  <span className="text-[#F26207] font-bold">➜</span> <span className="text-[#AEBEC7]">whoami</span>
                  <div className="mt-2 pl-4 border-l-2 border-white/10 text-[#AEBEC7]">
                    Builder. Teacher. Founder.
                  </div>
                </div>
                <div>
                  <span className="text-[#F26207] font-bold">➜</span> <span className="text-[#AEBEC7]">status</span>
                  <div className="mt-2 pl-4 text-white font-bold">
                    Ready to join Replit.<span className="animate-pulse text-[#F26207]">_</span>
                  </div>
                </div>
              </div>
              
              <button 
                 onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-[#F26207] text-white font-bold text-lg py-4 hover:bg-[#D95200] transition-all flex items-center justify-center gap-2 uppercase tracking-wider font-display border-t border-white/10"
              >
                Initiate Handshake <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
        
        {/* Social Proof Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-full overflow-hidden border-y border-white/5 py-6 bg-[#0B1419]/80 backdrop-blur"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 px-4">
             <span className="font-display font-bold text-lg">UC BERKELEY</span>
             <span className="font-display font-bold text-lg">MTC NATIONAL</span>
             <span className="font-display font-bold text-lg">OPEN SV</span>
             <span className="font-display font-bold text-lg">TEDx</span>
             <span className="font-display font-bold text-lg">QUORA (6M+)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
