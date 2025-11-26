import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Typewriter from "typewriter-effect";
import StaticBackground from "../ui/StaticBackground";
import DitherCanvas from "../ui/DitherCanvas";
import GlitchHeader from "../ui/GlitchHeader";
import LogoCarousel from "../ui/LogoCarousel";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 bg-[#0B1419]">
      {/* Dither Background (Towers) */}
      <DitherCanvas mode="city" className="opacity-40 mix-blend-screen" />
      {/* TV Static Background Effect (Overlay) */}
      <StaticBackground />

      <div className="container relative z-20 px-6 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Content Container with Max Width matching the Card */}
        <div className="w-full max-w-2xl flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-left w-full"
          >
            <GlitchHeader 
              text="The search for your next DevRel ends here." 
              className="text-4xl md:text-6xl font-bold tracking-tight text-white" 
            />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl text-[#fdfdfd] mb-12 max-w-2xl font-sans text-left w-full"
          >
            Introducing <span className="font-bold text-white">Ali Khani</span>.
          </motion.p>
        </div>

        {/* Replit Prompt Simulation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-2xl bg-[#0e1525] rounded-xl border border-[#2B323B] shadow-2xl overflow-hidden mb-24 relative font-mono"
        >
           {/* Prompt Header */}
           <div className="flex items-center justify-between px-4 py-3 border-b border-[#2B323B] bg-[#0e1525]">
              <div className="flex gap-2">
                <div className="px-3 py-1 rounded-full bg-[#2B323B] text-xs font-medium text-[#AEBEC7] flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-[#F26207]" /> 
                  Get suggestions
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
                        "racked up 6M+ views writing on Quora as a teen.",
                        "taught CS to 3,000+ Berkeley students.",
                        "worked in product security, DevOps, & SWE.",
                        "built a national movement from scratch.",
                        "has spoken at various conferences.",
                        "ships AI demos and POCs in hours.",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      deleteSpeed: 20,
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
        <div className="w-full mt-8">
          <p className="text-xl md:text-2xl text-white font-bold uppercase tracking-wider font-mono mb-4 opacity-90 text-center">Trusted By:</p>
          <LogoCarousel />
        </div>

      </div>
      
      {/* Bottom Gradient Banner */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0B1419] to-transparent pointer-events-none z-10" />
    </section>
  );
}
