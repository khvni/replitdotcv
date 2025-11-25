import { motion } from "framer-motion";
import { Users, Zap, Code, PenTool, Mic, ExternalLink } from "lucide-react";
import GlitchHeader from "../ui/GlitchHeader";

import mtcImage from "@assets/generated_images/vibrant_community_event_landing_page_mockup.png";
import codeImage from "@assets/generated_images/code_education_platform_interface_mockup.png";
import bloomImage from "@assets/generated_images/modern_dark_mode_dashboard_ui_mockup.png";

const features = [
  {
    title: "MTC: National Scale",
    description: "Built MTC to 30+ chapters. Connected thousands of builders. No playbook, just execution.",
    image: mtcImage,
    link: "https://mtc.so",
    icon: Users
  },
  {
    title: "AI Native Speed",
    description: "I ship fast using Cursor, Replit, and Gemini. Ideas become demos in hours. Speed is my feature.",
    image: codeImage,
    link: "/projects",
    icon: Zap
  },
  {
    title: "Technical Depth",
    description: "Founded Bloom (YC Startup School). Secured Five9. Engineered at Convoy. I know the stack.",
    image: bloomImage,
    link: "https://withbloom.app",
    icon: Code
  },
  {
    title: "Developer Empathy",
    description: "1800+ students taught as CS 61B TA. I help developers because I am one. Education is goodwill.",
    image: mtcImage, 
    link: "https://sp23.datastructur.es/staff.html",
    icon: PenTool
  },
  {
    title: "Public Speaking",
    description: "TEDx. OPEN SV. ICNA. I talk about mistakes and real scenarios, not just success theater.",
    image: codeImage,
    link: "#speaking",
    icon: Mic
  }
];

export default function AgentSection() {
  return (
    <section id="mtc" className="py-32 bg-[#0B1419] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Side */}
              <div className="flex-1 w-full text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C232B] border border-[#2B323B] text-[#F26207] text-sm font-medium mb-6 font-mono">
                   <feature.icon className="w-4 h-4" />
                   <span>FEATURE_{index + 1}</span>
                </div>
                
                <GlitchHeader 
                  text={feature.title} 
                  className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight" 
                />

                <p className="text-lg text-[#AEBEC7] leading-relaxed mb-8 max-w-lg font-sans">
                  {feature.description}
                </p>

                <a 
                  href={feature.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-white font-medium hover:text-[#F26207] transition-colors border-b border-transparent hover:border-[#F26207] font-mono"
                >
                  View Evidence <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Visual Side */}
              <div className="flex-1 w-full">
                <div className="relative rounded-xl border border-[#2B323B] bg-[#1C232B] overflow-hidden shadow-2xl group">
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
