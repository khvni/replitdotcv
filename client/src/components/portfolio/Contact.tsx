import { motion } from "framer-motion";
import { Send, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0B1419] border-t border-white/5">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            Ready to Ship?
          </h2>
          <p className="text-xl text-[#AEBEC7] mb-10">
            I'm ready to join the mission. Let's get me on the team so I can start shipping for Replit users.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:ali@example.com" 
              className="bg-[#F26207] text-white font-bold text-lg px-8 py-4 rounded-[4px] hover:bg-[#D95200] transition-all shadow-[0_0_20px_rgba(242,98,7,0.3)] flex items-center justify-center gap-2"
            >
              Email Me <Send className="w-5 h-5" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank"
              rel="noreferrer"
              className="bg-[#1B252B] text-white border border-white/10 font-bold text-lg px-8 py-4 rounded-[4px] hover:bg-[#232C30] hover:border-white/20 transition-all flex items-center justify-center gap-2"
            >
              DM on Twitter <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
