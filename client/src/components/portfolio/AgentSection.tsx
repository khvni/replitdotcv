import { motion } from "framer-motion";
import { ExternalLink, Users, Mic, Code, Zap, PenTool } from "lucide-react";

import mtcImage from "@assets/generated_images/vibrant_community_event_landing_page_mockup.png";
import codeImage from "@assets/generated_images/code_education_platform_interface_mockup.png";
import bloomImage from "@assets/generated_images/modern_dark_mode_dashboard_ui_mockup.png";

const features = [
  {
    title: "MTC Founder",
    description: "Built MTC from zero to 30+ chapters. Connected thousands of Muslim builders. No playbook, just execution.",
    image: mtcImage,
    tags: ["Scale", "Leadership"],
    link: "https://mtc.so",
    icon: Users
  },
  {
    title: "Rapid Builder",
    description: "I use AI to build fast. Cursor, Replit, Gemini. Ideas become demos in hours. Speed is my feature.",
    image: codeImage,
    tags: ["AI Native", "Shipping"],
    link: "/projects",
    icon: Zap
  },
  {
    title: "Technical Depth",
    description: "Founded Bloom (YC Startup School). Secured Five9. Engineered at Convoy. I know the stack.",
    image: bloomImage,
    tags: ["Full Stack", "Security"],
    link: "https://withbloom.app",
    icon: Code
  },
  {
    title: "Content Creator",
    description: "16k+ views on Vibe Coding. 6M+ on Quora. I write for builders, not algorithms.",
    image: mtcImage, 
    tags: ["Viral", "Writing"],
    link: "https://substack.com/@khvni",
    icon: PenTool
  },
  {
    title: "Speaker",
    description: "TEDx. OPEN SV. ICNA. I talk about what I've actually built. No fluff.",
    image: codeImage,
    tags: ["Keynotes", "Events"],
    link: "#speaking",
    icon: Mic
  }
];

export default function AgentSection() {
  return (
    <section id="mtc" className="py-0 bg-[#F26207] text-white relative overflow-hidden">
      {/* Diagonal Stripes Pattern */}
      <div className="absolute inset-0 opacity-5" 
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 20px)' }} 
      />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-24">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-none uppercase text-black">
            High Agency
          </h2>
          <p className="text-xl md:text-2xl font-sans font-medium max-w-2xl mx-auto leading-relaxed text-black/80">
            I don't wait for permission. I build systems.
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row gap-12 md:gap-20 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Visual Side */}
              <div className="flex-1 w-full">
                <div className="relative rounded-lg border border-black/10 bg-black/5 overflow-hidden shadow-xl group">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className="flex-1 w-full flex flex-col justify-center text-left">
                <div className="flex items-center gap-4 mb-4">
                   <div className="p-2 bg-black rounded text-white">
                     <feature.icon className="w-5 h-5" />
                   </div>
                   <h3 className="text-3xl md:text-4xl font-display font-bold uppercase leading-none text-black">
                     {feature.title}
                   </h3>
                </div>

                <p className="text-lg md:text-xl font-sans font-medium leading-relaxed mb-6 text-black/80">
                  {feature.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {feature.tags.map((tag, i) => (
                    <span key={i} className="font-mono text-sm font-bold uppercase bg-white text-black px-3 py-1 border border-black/10">
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={feature.link}
                  target="_blank"
                  className="self-start inline-flex items-center gap-2 font-display text-lg font-bold uppercase text-black border-b-2 border-black pb-1 hover:opacity-70 transition-opacity"
                >
                  View Evidence <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
