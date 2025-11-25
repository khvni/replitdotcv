import { motion } from "framer-motion";
import { ExternalLink, Github, Play, Terminal } from "lucide-react";
import work1 from "@assets/generated_images/modern_dark_mode_dashboard_ui_mockup.png";
import work2 from "@assets/generated_images/code_education_platform_interface_mockup.png";
import work3 from "@assets/generated_images/vibrant_community_event_landing_page_mockup.png";

const projects = [
  {
    title: "Dev Dashboard Template",
    tagline: "Production-ready in 30s",
    image: work1,
    description: "I built this to kill the 'blank page' problem for new users. Includes Auth, DB, and Analytics pre-configured. 145 Forks.",
    tags: ["Replit DB", "React", "Auth"],
    link: "#"
  },
  {
    title: "CS 61B Interactive",
    tagline: "Grading at scale",
    image: work2,
    description: "Automated feedback for 1800+ students. Reduced TA grading time by 40%. Real-time linting and pair programming built-in.",
    tags: ["EdTech", "WebSockets", "Scale"],
    link: "#"
  },
  {
    title: "MTC Community Hub",
    tagline: "Connecting 30+ Universities",
    image: work3,
    description: "The operating system for the MTC community. Handles events, resources, and connections for thousands of student developers.",
    tags: ["Next.js", "Community", "Growth"],
    link: "#"
  }
];

export default function Work() {
  return (
    <section id="work" className="py-24 bg-[#0B1419] relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Demos Win Arguments.
          </h2>
          <p className="text-xl text-[#AEBEC7] max-w-2xl">
            I don't just talk about code. I ship it. Here are three projects that moved the needle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-[#1B252B] border border-white/5 rounded-[4px] overflow-hidden hover:border-[#F26207]/50 transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="aspect-video relative overflow-hidden bg-black">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B252B] to-transparent opacity-60" />
                
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                   <div className="p-2 bg-black/50 backdrop-blur-md rounded border border-white/10">
                     <Terminal className="w-4 h-4 text-white" />
                   </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-auto">
                  <div className="text-[#F26207] text-xs font-bold uppercase tracking-wider mb-2">
                    {project.tagline}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#F26207] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#AEBEC7] text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-4">
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs text-[#AEBEC7] bg-white/5 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="text-white hover:text-[#F26207] transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
