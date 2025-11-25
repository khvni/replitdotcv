import { motion } from "framer-motion";
import { GraduationCap, Users, Zap, Code } from "lucide-react";

const timeline = [
  {
    year: "2023 - Present",
    title: "CS 61B Head TA @ UC Berkeley",
    description: "Led a staff of 60+ TAs and taught Data Structures to over 1,800 students. Redesigned curriculum to focus on practical application and modern tooling.",
    icon: GraduationCap,
    color: "text-blue-400",
  },
  {
    year: "2022 - Present",
    title: "Founder @ MTC Community",
    description: "Built a cross-university tech community spanning 30+ campuses. Organized hackathons, workshops, and career fairs connecting students with top tech companies.",
    icon: Users,
    color: "text-purple-400",
  },
  {
    year: "2024",
    title: "Viral Content Creator",
    description: "Created the 'Replit Vibe' coding workshop series, garnering 16k+ views on Twitter. Recognized by Replit engineering team for innovative use of Templates.",
    icon: Zap,
    color: "text-yellow-400",
  },
  {
    year: "Recent Sprint",
    title: "Template Engineer",
    description: "Spent the last 2 weeks deep-diving into Replit's ecosystem, building high-quality templates and tutorials to lower the barrier to entry for new devs.",
    icon: Code,
    color: "text-green-400",
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            More Than Just Code
          </h2>
          <p className="text-xl text-muted-foreground">
            I don't just build software; I build the bridges that help others build it too. 
            My passion lies at the intersection of deep technical expertise and accessible education.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 transform -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 w-full md:w-auto">
                   <div className={`p-6 rounded-2xl border border-white/5 bg-card/30 hover:bg-card/50 transition-all duration-300 hover:border-white/10 shadow-lg backdrop-blur-sm group ${
                     index % 2 === 0 ? "md:text-right" : "md:text-left"
                   }`}>
                     <div className={`flex items-center gap-3 mb-2 ${
                        index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                     }`}>
                       <item.icon className={`w-6 h-6 ${item.color}`} />
                       <span className="font-mono text-sm text-muted-foreground">{item.year}</span>
                     </div>
                     <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                     <p className="text-muted-foreground">{item.description}</p>
                   </div>
                </div>
                
                <div className="relative hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-background border border-white/10 z-10 shadow-[0_0_15px_rgba(0,121,242,0.3)]">
                  <div className={`w-3 h-3 rounded-full ${item.color.replace('text-', 'bg-')}`} />
                </div>
                
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
