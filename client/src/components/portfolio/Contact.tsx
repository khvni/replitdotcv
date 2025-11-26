import { motion } from "framer-motion";
import { Send, ArrowRight, MessageSquare, Mail } from "lucide-react";
import GlitchHeader from "../ui/GlitchHeader";
import DitherCanvas from "../ui/DitherCanvas";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#0B1419] border-t border-white/10 relative overflow-hidden">
      {/* Gradient Banner Top */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0B1419] to-transparent pointer-events-none z-20" />

      
      {/* Dither Background (Orb for differentiation) */}
      <DitherCanvas mode="orb" className="opacity-30 mix-blend-screen" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl flex flex-col items-center">
        <div className="bg-[#0e1525] border border-white/10 rounded-lg p-12 md:p-24 w-full max-w-2xl shadow-2xl">
          
          <div className="inline-block bg-[#F26207]/10 text-[#F26207] border border-[#F26207]/20 font-mono font-bold px-4 py-1 mb-8 uppercase tracking-widest text-sm rounded-full">
            Status: Available
          </div>

          <GlitchHeader 
            text="I want to build at Replit." 
            className="text-5xl md:text-7xl font-display font-bold mb-8 text-white tracking-tight uppercase leading-none text-left"
          />
          
          <p className="text-xl md:text-2xl text-[#AEBEC7] mb-12 font-sans leading-relaxed text-left">
            I've seen firsthand how software, and the education to leverage its power, can terraform society for the better when in the right hands.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="mailto:byalikhani@gmail.com" 
              className="bg-[#F26207] text-white font-mono font-bold text-lg px-8 py-4 rounded hover:bg-[#D95200] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 uppercase"
            >
              <Mail className="w-5 h-5" /> Email Me
            </a>
            <a 
              href="https://x.com/alikhvni" 
              target="_blank"
              rel="noreferrer"
              className="bg-[#1B252B] text-white border border-white/20 font-mono font-bold text-lg px-8 py-4 rounded hover:bg-[#232C30] hover:border-white/40 transition-all flex items-center justify-center gap-3 uppercase"
            >
               DM on 
               <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
