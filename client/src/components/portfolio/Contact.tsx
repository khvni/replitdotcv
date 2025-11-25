import { motion } from "framer-motion";
import { Send, ArrowRight, MessageSquare, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#0B1419] border-t-2 border-[#F26207] relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-5">
         <span className="text-[20vw] font-display font-black text-white uppercase leading-none">
           SHIP IT
         </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-[#1B252B] border-2 border-white/10 p-12 md:p-24 text-center max-w-4xl mx-auto shadow-[20px_20px_0px_0px_#F26207]">
          
          <div className="inline-block bg-[#F26207] text-white font-mono font-bold px-4 py-1 mb-8 uppercase tracking-widest">
            Status: Available for Hire
          </div>

          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 text-white tracking-tighter uppercase leading-[0.9]">
            Don't leave <br/> growth on the table.
          </h2>
          
          <p className="text-xl md:text-2xl text-[#AEBEC7] mb-12 font-sans max-w-2xl mx-auto leading-relaxed">
            I'm ready to join Replit and start shipping on Day 1. Let's skip the generic interview loops and talk about what we can build.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="mailto:ali@example.com" 
              className="bg-[#F26207] text-white font-display font-bold text-xl px-8 py-4 hover:bg-white hover:text-[#F26207] transition-all shadow-[4px_4px_0px_0px_#ffffff] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none border-2 border-transparent flex items-center justify-center gap-3 uppercase"
            >
              <Mail className="w-6 h-6" /> Email Me
            </a>
            <a 
              href="https://x.com/alikhvni" 
              target="_blank"
              rel="noreferrer"
              className="bg-transparent text-white border-2 border-white font-display font-bold text-xl px-8 py-4 hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3 uppercase"
            >
               DM on Twitter <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
