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
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Content */}
      <div className="container relative z-20 px-6 text-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-display font-bold tracking-tighter mb-8 text-white leading-[0.9] uppercase">
            ALI KHANI IS <br />
            THE <span className="text-[#F26207]"><PixelatedText text="DEVREL AGENT" /></span>
          </h1>

          <p className="text-xl md:text-3xl text-[#AEBEC7] max-w-4xl mb-16 font-light leading-relaxed">
            Turning <span className="text-white font-bold border-b-2 border-[#F26207]">1800+ students</span> and <span className="text-white font-bold border-b-2 border-[#F26207]">30+ communities</span> into shippers.
          </p>

          {/* Search Bar / Prompt Input Simulation - Mirroring Replit's "Make me a game..." */}
          <div className="w-full max-w-3xl relative mb-24 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#F26207]/40 to-[#F26207]/20 rounded-none blur opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-[#1B252B] border-2 border-white/10 p-8 text-left shadow-2xl">
              <div className="flex gap-3 mb-6">
                <span className="bg-[#F26207]/10 text-xs font-bold text-[#F26207] px-3 py-1 rounded-full border border-[#F26207]/20 uppercase tracking-widest">Deployment Ready</span>
                <span className="bg-white/5 text-xs font-bold text-[#AEBEC7] px-3 py-1 rounded-full border border-white/10 uppercase tracking-widest">High Agency</span>
              </div>
              
              <div className="font-mono text-xl md:text-2xl text-white mb-8 leading-relaxed">
                <span className="text-[#AEBEC7]">&gt; Initializing...</span><br/>
                <span className="text-[#AEBEC7]">&gt; </span>
                <span className="text-white font-bold">AliKhani.deploy()</span>
                <span className="animate-pulse text-[#F26207] ml-1">_</span>
                <br />
                <span className="text-[#AEBEC7] text-lg mt-2 block">
                  // Mission: Democratize software creation for the next billion users.
                </span>
              </div>

              <div className="h-px bg-white/5 mb-6" />
              
              <button 
                 onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-[#F26207] text-white font-bold text-lg py-4 hover:bg-[#D95200] transition-all shadow-[0_0_20px_rgba(242,98,7,0.4)] hover:shadow-[0_0_40px_rgba(242,98,7,0.6)] flex items-center justify-center gap-3 uppercase tracking-wider font-display"
              >
                EXECUTE PROTOCOL <Terminal className="w-5 h-5" />
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
          <p className="text-sm text-[#5d6c76] mb-8 uppercase tracking-[0.3em] font-bold">
            IMPACT SCALED ACROSS
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-2xl font-hack font-bold text-white tracking-tighter">UC BERKELEY</span>
            <span className="text-2xl font-hack font-bold text-white tracking-tighter">MTC</span>
            <span className="text-2xl font-hack font-bold text-white tracking-tighter">OPEN SV</span>
            <span className="text-2xl font-hack font-bold text-white tracking-tighter">TEDx</span>
            <span className="text-2xl font-hack font-bold text-white tracking-tighter">QUORA (6M+)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
