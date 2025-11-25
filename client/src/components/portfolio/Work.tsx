import { motion } from "framer-motion";
import { ExternalLink, Github, Play, Eye } from "lucide-react";
import work1 from "@assets/generated_images/modern_dark_mode_dashboard_ui_mockup.png";
import work2 from "@assets/generated_images/code_education_platform_interface_mockup.png";
import work3 from "@assets/generated_images/vibrant_community_event_landing_page_mockup.png";

const projects = [
  {
    title: "Replit Template: Dev Dashboard",
    category: "Template & Tutorial",
    image: work1,
    description: "A production-ready dashboard template featuring Replit DB integration, Auth, and real-time analytics visualization. Used by 500+ developers.",
    stats: { views: "12k", forks: "145" },
    tags: ["React", "Replit DB", "Tailwind"],
    link: "#"
  },
  {
    title: "Learn-to-Code Interactive",
    category: "Education Platform",
    image: work2,
    description: "An interactive coding environment built for CS 61B students. Features real-time linting, test running, and collaborative pair programming modes.",
    stats: { users: "1.8k", active: "Daily" },
    tags: ["TypeScript", "WebSockets", "Monaco"],
    link: "#"
  },
  {
    title: "MTC Community Hub",
    category: "Community Platform",
    image: work3,
    description: "The central hub for the MTC community. Handles event registration, member directories, and resource sharing across 30 universities.",
    stats: { members: "5k+", events: "50+" },
    tags: ["Next.js", "Supabase", "Framer"],
    link: "#"
  }
];

export default function Work() {
  return (
    <section id="work" className="py-24 bg-background/50 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Built on Replit
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of templates, applications, and educational content created to empower other developers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-card hover:border-primary/50 transition-all duration-300"
            >
              {/* Image Overlay */}
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="p-3 rounded-full bg-white text-black hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-current" />
                  </button>
                  <button className="p-3 rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:scale-110 transition-transform">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    {project.stats.views && (
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" /> {project.stats.views}
                      </span>
                    )}
                    {project.stats.forks && (
                      <span className="flex items-center gap-1">
                        <Github className="w-3 h-3" /> {project.stats.forks}
                      </span>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10">
            <span className="text-sm font-medium">Want to see how I build?</span>
            <a href="#" className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
              Check out my Replit Profile <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
