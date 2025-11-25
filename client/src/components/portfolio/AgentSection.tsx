import { motion } from "framer-motion";
import { ExternalLink, Terminal, Play, Cpu, Users, Mic, Code, Zap, PenTool, Globe } from "lucide-react";

import mtcImage from "@assets/generated_images/vibrant_community_event_landing_page_mockup.png";
import codeImage from "@assets/generated_images/code_education_platform_interface_mockup.png";
import bloomImage from "@assets/generated_images/modern_dark_mode_dashboard_ui_mockup.png";

const features = [
  {
    title: "MTC: A National Movement",
    description: "I didn't just join a club; I built a national infrastructure. As Founder and Head Honcho, I scaled MTC to 30+ university chapters and established professional city chapters in SF, Seattle, Dallas, and NYC (Atlanta, SoCal, Chicago incoming). We connect thousands of Muslim builders through hackathons, career fairs, and workshops.",
    image: mtcImage,
    tags: ["Founder", "30+ Chapters", "National Scale"],
    link: "https://mtc.so",
    icon: Users
  },
  {
    title: "Rapid POC Shipping",
    description: "I don't just talk about AI; I build with it. I leverage Cursor, Claude Code, Replit, and Gemini to ship proofs-of-concept in hours, not weeks. I'm also an active contributor to open-source AI tools like Cline and Claude Code. Speed is my feature.",
    image: codeImage,
    tags: ["Cursor", "Replit", "Open Source"],
    link: "/projects", // Placeholder for projects page
    icon: Zap
  },
  {
    title: "Founder & Security Engineer",
    description: "My technical chops are battle-tested. I founded Bloom (YC Startup School), secured products at Five9, and engineered at Convoy. I understand the full stack—from funding to deployment to securing the pipeline.",
    image: bloomImage,
    tags: ["YC Startup School", "Product Security", "Full Stack"],
    link: "https://withbloom.app",
    icon: Code
  },
  {
    title: "Voice of the Developer",
    description: "6M+ views on Quora. My 'Vibe Coding' Replit workshop on X hit 16k+ views. I write on Substack and create content that resonates because it comes from a place of deep technical understanding, not marketing fluff.",
    image: mtcImage, 
    tags: ["16k+ Views", "Technical Writing", "Influence"],
    link: "https://substack.com/@khvni",
    icon: PenTool
  },
  {
    title: "Public Speaking",
    description: "I command the stage. Featured speaker at OPEN SV Annual Forum (2024, 2025), ICNA West 2025, and TEDx. I've led workshops at Apex Mosque's NC Summit and MSA West. I turn technical topics into compelling narratives.",
    image: codeImage,
    tags: ["TEDx", "Keynotes", "Workshops"],
    link: "#speaking",
    icon: Mic
  }
];

export default function AgentSection() {
  return (
    <section id="mtc" className="py-0 bg-[#F26207] text-white relative overflow-hidden">
      {/* Diagonal Stripes Pattern */}
      <div className="absolute inset-0 opacity-10" 
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 20px)' }} 
      />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-32">
          <div className="inline-block bg-black text-white px-6 py-2 font-mono font-bold uppercase tracking-widest transform -rotate-1 mb-6 border border-white">
            Agent Capabilities
          </div>
          <h2 className="text-5xl md:text-8xl font-display font-black mb-8 leading-none uppercase">
            High Agency <br/>
            <span className="text-black stroke-white">Builder</span>
          </h2>
          <p className="text-xl md:text-2xl font-sans font-medium max-w-3xl mx-auto leading-relaxed">
            I don't need a playbook. I write them. Here is how I drive growth and adoption.
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
                <div className="relative rounded-none border-4 border-black bg-black shadow-[12px_12px_0px_0px_#000000] overflow-hidden group">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  
                  {/* Brutalist Label */}
                  <div className="absolute top-0 left-0 bg-black text-white px-4 py-2 font-mono font-bold border-b-2 border-r-2 border-white">
                    FEATURE_{index + 1}
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="flex-1 w-full flex flex-col justify-center text-left">
                <div className="flex items-center gap-4 mb-6">
                   <div className="p-3 bg-black rounded-none border-2 border-white">
                     <feature.icon className="w-6 h-6 text-white" />
                   </div>
                   <h3 className="text-3xl md:text-4xl font-display font-bold uppercase leading-none">
                     {feature.title}
                   </h3>
                </div>

                <p className="text-lg md:text-xl font-sans font-medium leading-relaxed mb-8 opacity-90 border-l-4 border-black pl-6">
                  {feature.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {feature.tags.map((tag, i) => (
                    <span key={i} className="font-mono text-sm font-bold uppercase bg-white text-[#F26207] px-3 py-1 border border-black shadow-[2px_2px_0px_0px_#000000]">
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={feature.link}
                  target="_blank"
                  className="self-start inline-flex items-center gap-2 font-display text-lg font-bold uppercase border-b-4 border-black pb-1 hover:text-black hover:border-white transition-colors"
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
