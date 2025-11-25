import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "MTC Community Platform",
    desc: "Operating system for 30+ university chapters. Built with Next.js.",
    tags: ["Community", "Scale"],
    link: "#",
    color: "border-blue-500/30 hover:border-blue-500"
  },
  {
    title: "CS 61B Autograder",
    desc: "Scalable grading infrastructure for 1,800+ students/semester.",
    tags: ["Education", "Infra"],
    link: "#",
    color: "border-green-500/30 hover:border-green-500"
  },
  {
    title: "Vibe Coding Workshop",
    desc: "Viral Replit tutorial series. 16k+ views. 200+ likes.",
    tags: ["Content", "Viral"],
    link: "#",
    color: "border-purple-500/30 hover:border-purple-500"
  }
];

export default function Work() {
  return (
    <section id="work" className="py-32 bg-[#0B1419] relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Build fast. <br />
              <span className="text-[#F26207]">Ship faster.</span>
            </h2>
            <p className="text-xl text-[#AEBEC7] max-w-xl">
              Demos win arguments. Here is the proof of work.
            </p>
          </div>
          <a href="https://github.com" className="hidden md:flex items-center gap-2 text-[#AEBEC7] hover:text-white transition-colors mt-6 md:mt-0">
            View all repos <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Grid Layout imitating Replit's Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative bg-[#1B252B] border p-8 rounded-[4px] transition-all duration-300 ${project.color}`}
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-5 h-5 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 font-display">
                {project.title}
              </h3>
              
              <p className="text-[#AEBEC7] mb-8 h-12">
                {project.desc}
              </p>

              <div className="flex gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono text-[#F26207] bg-[#F26207]/10 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
