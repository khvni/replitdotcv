import { motion } from "framer-motion";
import { ExternalLink, Terminal, Play, Cpu, Users, Mic, Code, Zap, Globe, PenTool } from "lucide-react";

// Feature images - using abstract/tech imagery to match Replit's vibe
import mtcImage from "@assets/generated_images/vibrant_community_event_landing_page_mockup.png";
import codeImage from "@assets/generated_images/code_education_platform_interface_mockup.png";
import bloomImage from "@assets/generated_images/modern_dark_mode_dashboard_ui_mockup.png";

const features = [
  {
    title: "MTC Community Building",
    description: "Founded Muslim Tech Collaborative (MTC) and scaled it to 30+ university chapters. I build operating systems for communities to thrive, organizing hackathons, career fairs, and workshops that connect thousands of students.",
    image: mtcImage,
    tags: ["Community Architecture", "Scale", "Leadership"],
    link: "https://mtc.so"
  },
  {
    title: "Rapid POC Shipping",
    description: "I turn ideas into deployed apps in minutes. Leveraging Cursor, Claude Code, Replit, and Gemini to build at the speed of thought. Active contributor to open source tools like Cline and Claude Code.",
    image: codeImage,
    tags: ["AI Native", "Open Source", "Rapid Prototyping"],
    link: "/projects" // This would link to the separate projects page
  },
  {
    title: "Technical Experience",
    description: "Former Founder of Bloom (YC Startup School), Product Security Intern at Five9, and SWE Intern at Convoy. I bridge the gap between scrappy founder energy and enterprise engineering discipline.",
    image: bloomImage,
    tags: ["Founder", "Security", "Enterprise Engineering"],
    link: "https://withbloom.app"
  },
  {
    title: "Content & Writing",
    description: "6M+ views on Quora. Viral 'Vibe Coding' Replit workshops on X (16k+ views). I know how to craft technical narratives that capture attention and drive adoption.",
    image: mtcImage, // reusing for layout balance, ideally a new image
    tags: ["Technical Writing", "Viral Content", "DevRel"],
    link: "https://substack.com"
  },
  {
    title: "Speaking & Thought Leadership",
    description: "From TEDx to OPEN SV and ICNA West. I'm comfortable on stage, translating complex technical concepts for diverse audiences ranging from students to industry leaders.",
    image: codeImage, // reusing for layout balance
    tags: ["Keynotes", "Workshops", "Public Speaking"],
    link: "#speaking"
  }
];

export default function AgentSection() {
  return (
    <section className="py-0 bg-[#F26207] text-white relative overflow-hidden">
      <div className="container mx-auto px-6 py-32">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
            DevRel <span className="font-pixel opacity-90">Agent</span>
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto font-light">
            The most autonomous advocate for building production-ready communities.
          </p>
        </div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Visual Side */}
              <div className="flex-1 w-full">
                <div className="relative aspect-square md:aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-black/20 backdrop-blur-sm group">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  
                  {/* Replit-style UI overlay elements */}
                  <div className="absolute bottom-6 left-6 right-6 bg-[#1B252B]/90 backdrop-blur-md p-4 rounded-lg border border-white/10 shadow-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-[#F26207] rounded-md">
                        {index === 0 ? <Users className="w-4 h-4 text-white" /> :
                         index === 1 ? <Zap className="w-4 h-4 text-white" /> :
                         index === 2 ? <Code className="w-4 h-4 text-white" /> :
                         index === 3 ? <PenTool className="w-4 h-4 text-white" /> :
                         <Mic className="w-4 h-4 text-white" />}
                      </div>
                      <span className="font-mono text-sm font-bold text-white">{feature.title}</span>
                    </div>
                    <div className="flex gap-2">
                      {feature.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] uppercase tracking-wider bg-white/10 px-2 py-1 rounded text-white/80">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="flex-1 w-full text-left">
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-lg md:text-xl opacity-90 leading-relaxed mb-8 font-light">
                  {feature.description}
                </p>
                
                <a 
                  href={feature.link}
                  className="inline-flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-wider hover:opacity-80 transition-opacity border-b border-white pb-1"
                >
                  Explore <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
