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
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
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
          <div className="mb-8 bg-[#F26207] text-black font-bold px-4 py-1 transform -rotate-2 border-2 border-white shadow-[4px_4px_0px_0px_#ffffff]">
             <span className="font-mono uppercase tracking-tight">Status: Deployment Ready</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-display font-black tracking-tighter mb-8 text-white leading-[0.85] uppercase mix-blend-screen">
            I Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F26207] via-white to-[#F26207] animate-gradient-x">Operating Systems</span> <br />
            For <span className="text-[#F26207]"><PixelatedText text="Communities" /></span>
          </h1>

          <p className="text-xl md:text-2xl text-[#AEBEC7] max-w-3xl mb-16 font-sans font-light leading-relaxed border-l-4 border-[#F26207] pl-6 text-left md:text-center md:border-none md:pl-0">
            Don't just hire a DevRel. Hire a <span className="text-white font-bold">Founder-in-Residence</span>. <br className="hidden md:block"/>
            I scale movements, ship products, and turn passive users into die-hard evangelists.
          </p>

          {/* Search Bar / Prompt Input Simulation */}
          <div className="w-full max-w-3xl relative mb-24 group">
            <div className="absolute -inset-2 bg-[#F26207] rounded-none opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-xl" />
            <div className="relative bg-[#1B252B] border-2 border-white/20 p-0 text-left shadow-[8px_8px_0px_0px_#000000]">
              {/* Terminal Header */}
              <div className="bg-[#0B1419] px-4 py-2 border-b border-white/10 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 font-mono text-xs text-[#5d6c76]">ali_khani_portfolio — -zsh — 80x24</span>
              </div>

              <div className="p-8 font-mono text-lg md:text-xl text-white leading-relaxed">
                <span className="text-[#AEBEC7]">$</span> <span className="text-[#F26207] font-bold">whoami</span>
                <br/>
                <span className="text-white block mt-2">
                  &gt; Founder @ MTC (30+ Chapters)<br/>
                  &gt; 1,800+ Students Taught<br/>
                  &gt; 16k+ Views on "Vibe Coding"<br/>
                  &gt; High-Agency Builder
                </span>
                <br/>
                <span className="text-[#AEBEC7]">$</span> <span className="text-[#F26207] font-bold">deploy --production</span>
                <span className="animate-pulse text-[#F26207] ml-1">_</span>
              </div>
              
              <button 
                 onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-white text-black font-bold text-lg py-4 hover:bg-[#F26207] hover:text-white transition-all border-t-2 border-white/20 flex items-center justify-center gap-3 uppercase tracking-wider font-display"
              >
                INITIATE HANDSHAKE <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
        
        {/* Social Proof Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-full overflow-hidden border-y border-white/10 py-4 bg-[#0B1419]/50 backdrop-blur"
        >
          <div className="flex justify-between items-center max-w-5xl mx-auto px-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             <span className="font-hack text-lg font-bold">UC BERKELEY</span>
             <span className="text-[#F26207] font-mono">/</span>
             <span className="font-hack text-lg font-bold">MTC NATIONAL</span>
             <span className="text-[#F26207] font-mono">/</span>
             <span className="font-hack text-lg font-bold">OPEN SV</span>
             <span className="text-[#F26207] font-mono">/</span>
             <span className="font-hack text-lg font-bold">TEDx</span>
             <span className="text-[#F26207] font-mono">/</span>
             <span className="font-hack text-lg font-bold">QUORA (6M+)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
