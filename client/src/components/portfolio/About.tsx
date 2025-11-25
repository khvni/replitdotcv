import { motion } from "framer-motion";
import { ExternalLink, Terminal, Play, Cpu, Users, Mic } from "lucide-react";
import work1 from "@assets/generated_images/modern_dark_mode_dashboard_ui_mockup.png";
import work2 from "@assets/generated_images/code_education_platform_interface_mockup.png";
import work3 from "@assets/generated_images/vibrant_community_event_landing_page_mockup.png";

const features = [
  {
    title: "Community Building",
    description: "Founder of MTC with 30+ university chapters. I don't just join communities; I build operating systems for them to thrive.",
    icon: Users,
    stats: "30+ Chapters"
  },
  {
    title: "Technical Teaching",
    description: "CS 61B TA for 1,800+ students. I turn complex Data Structures concepts into shippable insights for the next generation.",
    icon: Terminal,
    stats: "1800+ Students"
  },
  {
    title: "Viral Content",
    description: "My 'Vibe Coding' Replit workshop hit 16k views. I know how to make technical content spread in the attention economy.",
    icon: Play,
    stats: "16k+ Views"
  }
];

export default function About() {
  return (
    <section id="experience" className="py-32 bg-[#0B1419] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Powering the next generation
          </h2>
          <p className="text-xl text-[#AEBEC7]">
            Replit gives people superpowers. I teach them how to use them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1B252B] border border-white/5 p-8 rounded-[4px] hover:border-[#F26207]/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-[#0B1419] border border-white/10 rounded-[4px] flex items-center justify-center mb-6 group-hover:border-[#F26207] transition-colors">
                <feature.icon className="w-6 h-6 text-white group-hover:text-[#F26207]" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 font-display">
                {feature.title}
              </h3>
              
              <p className="text-[#AEBEC7] leading-relaxed mb-6 font-light">
                {feature.description}
              </p>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[#F26207] font-mono text-sm font-bold">
                  {feature.stats}
                </span>
                <div className="h-1 w-12 bg-[#F26207]/20 rounded-full overflow-hidden">
                  <div className="h-full bg-[#F26207] w-2/3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Speaking Section Integrated */}
        <div className="mt-32">
           <h3 className="text-2xl font-bold text-white mb-8 font-display border-l-4 border-[#F26207] pl-4">
             Speaking & Thought Leadership
           </h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
             {['TEDx Speaker', 'OPEN SV Forum', 'ICNA West 2025', 'Apex Mosque Summit'].map((event, i) => (
               <div key={i} className="bg-[#1B252B] border border-white/5 p-4 rounded flex items-center gap-3">
                 <Mic className="w-4 h-4 text-[#F26207]" />
                 <span className="text-white font-medium">{event}</span>
               </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}
