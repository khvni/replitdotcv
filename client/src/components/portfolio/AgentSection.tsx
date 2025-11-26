import { motion } from "framer-motion";
import GlitchHeader from "../ui/GlitchHeader";

import abstractOrange from "@assets/generated_images/abstract_geometric_shapes_in_orange_and_black.png";
import abstractData from "@assets/generated_images/abstract_digital_data_flow.png";
import abstractArch from "@assets/generated_images/abstract_architectural_tech_structure.png";
import abstractCode from "@assets/generated_images/abstract_code_visualization.png";
import abstractNet from "@assets/generated_images/abstract_network_connection.png";

const features = [
  {
    title: "Building a national movement—and a community to go with it—through MTC.",
    description: "Built MTC to 30+ chapters. Connected thousands of builders. No playbook, just execution.",
    image: abstractOrange,
    link: "https://mtc.so",
  },
  {
    title: "Shipping at the speed of AI.",
    description: "I'm no stranger to AI: I've shipped fast using Cursor, Replit, Claude Code, OpenAI Codex, Gemini, Cline, Windsurf, v0, Grok, you name it. There's something magical seeing so many ideas become reality in mere hours.",
    image: abstractData,
    link: "https://github.com/khvni",
  },
  {
    title: "Experimental by nature, with experience in SWE, infra, & security.",
    description: "Founded Bloom to solve conference networking at TechWadi's Annual Forum 2025. (Amjad spoke there!) Before that, I worked in AppSec & DevSecOps at Five9 and full-stack SWE at Convoy.",
    image: abstractArch,
    link: "/make",
  },
  {
    title: "As much of a lifelong teacher as I am a lifelong learner.",
    description: "In high school, I wrote on Quora and garnered 6M+ views on my content. In college, I taught 3000+ students in Berkeley's two largest CS courses, creating content & slides to support our students in CS 61A & 61B's notoriously difficult projects. In MTC, I've created hundreds of pages of documentation, hosted office hours to advise chapters, and mentored new leaders directly. As AI takes over a lot of data-heavy tasks, I see writing, creativity, and good taste becoming exponentially more valuable.",
    image: abstractCode, 
    link: "/teach",
  },
  {
    title: "Past Speaking Engagements",
    description: (
      <>
        I've been a vibe coding evangelist since Karpathy first coined the term. I've had various speaking engagements in the past few years, including{" "}
        <a href="https://www.opensvforum.org/2024" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/100 transition-colors">OPEN SV in 2024</a>
        {" "}and{" "}
        <a href="https://www.opensvforum.org/2025" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/100 transition-colors">2025</a>
        ,{" "}
        <a href="https://icnawestconvention.org/speakers/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/100 transition-colors">ICNA West Convention 2025</a>
        , my{" "}
        <a href="https://www.ted.com/tedx/events/64065" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/100 transition-colors">TEDx talk</a>
        , my{" "}
        <a href="https://apexmosque.org/yps2025/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/100 transition-colors">Entrepreneurship 101 workshop at Apex Mosque's NC Young Professionals Summit</a>
        {" "}in Raleigh, and at{" "}
        <a href="https://msawest.net" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/100 transition-colors">MSA West's 26th Annual Conference</a>.
      </>
    ),
    image: abstractNet,
    link: "/connect",
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

                <div className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg font-sans">
                  {feature.description}
                </div>
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

          {/* Embedded Twitter Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mt-32"
          >
            <div className="max-w-2xl w-full">
              <blockquote className="twitter-tweet" data-theme="dark">
                <p lang="en" dir="ltr">
                  Just taught a vibe coding workshop using <a href="https://twitter.com/Replit?ref_src=twsrc%5Etfw">@Replit</a> to a class of ~20 middle schoolers<br/><br/>
                  Never seen an entire group of kids become so excited about coding<br/><br/>
                  Within 20 mins they were building apps like a 3D Minecraft clone, Flappy Bird but with Steve Harvey&#39;s face as the bird, Doom,… <a href="https://t.co/K5bxUMh13G">pic.twitter.com/K5bxUMh13G</a>
                </p>
                &mdash; Ali Khani (@alikhvni) <a href="https://twitter.com/alikhvni/status/1913328421062758720?ref_src=twsrc%5Etfw">April 18, 2025</a>
              </blockquote>
              <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
