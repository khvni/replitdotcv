import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

const experience = [
  {
    role: "CS 61B Head TA @ Berkeley",
    metric: "1800+ Students",
    detail: "Led 60+ staff. Redesigned curriculum for modern tooling. Turned abstract theory into shippable skills."
  },
  {
    role: "Founder @ MTC",
    metric: "30+ Universities",
    detail: "Built a viral tech community from scratch. High-growth, high-energy, zero budget. Pure hustle."
  },
  {
    role: "Content Creator",
    metric: "16k+ Views",
    detail: "Replit-style workshops that actually get watched. I know how to capture attention in the scroll economy."
  }
];

export default function About() {
  return (
    <section id="experience" className="py-24 bg-[#0B1419] relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              High Agency. <br/>
              <span className="text-[#F26207]">Radical Impact.</span>
            </h2>
            <p className="text-xl text-[#AEBEC7] mb-8 leading-relaxed">
              I don't wait for permission to build. My track record isn't just about holding titles—it's about creating movement. 
              I bridge the gap between complex engineering and the next generation of developers.
            </p>
            
            <div className="space-y-6">
              {experience.map((item, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="mt-1">
                    <CheckCircle className="w-5 h-5 text-[#F26207]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#F26207] transition-colors">
                      {item.role} <span className="text-[#AEBEC7] font-normal mx-2">|</span> {item.metric}
                    </h3>
                    <p className="text-[#AEBEC7] text-sm mt-1">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a href="#work" className="inline-flex items-center text-white font-bold hover:text-[#F26207] transition-colors">
                See the evidence <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#F26207] blur-[100px] opacity-10 rounded-full" />
            <div className="relative bg-[#1B252B] border border-white/10 p-8 rounded-[4px] shadow-2xl">
               <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                 <span className="font-mono text-sm text-[#F26207]">mission_log.md</span>
                 <div className="flex gap-2">
                   <div className="w-2 h-2 rounded-full bg-white/20" />
                   <div className="w-2 h-2 rounded-full bg-white/20" />
                 </div>
               </div>
               <div className="space-y-4 font-mono text-sm">
                 <p className="text-[#AEBEC7]">
                   <span className="text-[#F26207]">&gt;</span> Current Status: <span className="text-white">Seeking Replit</span>
                 </p>
                 <p className="text-[#AEBEC7]">
                   <span className="text-[#F26207]">&gt;</span> Location: <span className="text-white">Berkeley, CA</span>
                 </p>
                 <p className="text-[#AEBEC7]">
                   <span className="text-[#F26207]">&gt;</span> Objective: <span className="text-white">Empower the next billion software creators.</span>
                 </p>
                 <p className="text-[#AEBEC7]">
                   <span className="text-[#F26207]">&gt;</span> Skills: <span className="text-white">["DevRel", "React", "Community", "Shipping"]</span>
                 </p>
                 <div className="h-px bg-white/5 my-4" />
                 <p className="text-green-400 animate-pulse">
                   &gt; Ready to deploy...
                 </p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
