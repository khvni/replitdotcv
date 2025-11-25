import { motion } from "framer-motion";
import { Send, ArrowRight, MessageSquare, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#0B1419] border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-[#1B252B] border border-white/10 rounded-lg p-12 md:p-24 text-center max-w-4xl mx-auto shadow-2xl">
          
          <div className="inline-block bg-[#F26207]/10 text-[#F26207] border border-[#F26207]/20 font-mono font-bold px-4 py-1 mb-8 uppercase tracking-widest text-sm rounded-full">
            Status: Available
          </div>

          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 text-white tracking-tight uppercase leading-none">
            Ready to Ship?
          </h2>
          
          <p className="text-xl md:text-2xl text-[#AEBEC7] mb-12 font-sans max-w-2xl mx-auto leading-relaxed">
            I want to build at Replit. Let's skip the fluff and deploy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="mailto:ali@example.com" 
              className="bg-[#F26207] text-white font-display font-bold text-lg px-8 py-4 rounded hover:bg-[#D95200] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 uppercase"
            >
              <Mail className="w-5 h-5" /> Email Me
            </a>
            <a 
              href="https://x.com/alikhvni" 
              target="_blank"
              rel="noreferrer"
              className="bg-[#1B252B] text-white border border-white/20 font-display font-bold text-lg px-8 py-4 rounded hover:bg-[#232C30] hover:border-white/40 transition-all flex items-center justify-center gap-3 uppercase"
            >
               DM on Twitter <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
