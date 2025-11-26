import { motion } from "framer-motion";
import GlitchHeader from "../ui/GlitchHeader";

import abstractOrange from "@assets/generated_images/abstract_geometric_shapes_in_orange_and_black.png";
import abstractData from "@assets/generated_images/abstract_digital_data_flow.png";
import abstractArch from "@assets/generated_images/abstract_architectural_tech_structure.png";
import abstractCode from "@assets/generated_images/abstract_code_visualization.png";
import abstractNet from "@assets/generated_images/abstract_network_connection.png";

const features = [
  {
    title: "MTC: National Scale",
    description: "Built MTC to 30+ chapters. Connected thousands of builders. No playbook, just execution.",
    image: abstractOrange,
    link: "https://mtc.so",
  },
  {
    title: "AI Native Speed",
    description: "I ship fast using Cursor, Replit, and Gemini. Ideas become demos in hours. Speed is my feature.",
    image: abstractData,
    link: "/projects",
  },
  {
    title: "Technical Depth",
    description: "Founded Bloom (YC Startup School). Secured Five9. Engineered at Convoy. I know the stack.",
    image: abstractArch,
    link: "https://withbloom.app",
  },
  {
    title: "Developer Empathy",
    description: "1800+ students taught as CS 61B TA. I help developers because I am one. Education is goodwill.",
    image: abstractCode, 
    link: "https://sp23.datastructur.es/staff.html",
  },
  {
    title: "Public Speaking",
    description: "TEDx. OPEN SV. ICNA. I talk about mistakes and real scenarios, not just success theater.",
    image: abstractNet,
    link: "#speaking",
  }
];

export default function AgentSection() {
  return (
    <section id="mtc" className="py-32 bg-[#F26207] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col items-center gap-12 md:gap-24 ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Text Side */}
              <div className="flex-1 w-full text-left text-white">
                
                <GlitchHeader 
                  text={feature.title} 
                  className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight" 
                />

                <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg font-sans">
                  {feature.description}
                </p>
              </div>

              {/* Visual Side */}
              <div className="flex-1 w-full">
                <div className="relative rounded-xl border border-white/20 bg-black/10 overflow-hidden shadow-2xl group aspect-square max-w-md mx-auto md:mx-0">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
