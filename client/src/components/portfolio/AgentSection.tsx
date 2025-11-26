import { motion } from "framer-motion";
import GlitchHeader from "../ui/GlitchHeader";

import mtcImage from "@assets/mtc_group_photo.jpg";
import aiImage from "@assets/ai_coding.JPG";
import sweImage from "@assets/tech_event.JPG";
import teachingImage from "@assets/cs61b_teaching.jpg";
import speakingImage from "@assets/formal_speaking.jpg";

const features = [
  {
    title: "Building North America's largest Muslim tech ecosystem with MTC.",
    description: "I founded MTC as a club in Berkeley to build solutions for local businesses, teach tech to youth, and help accelerate our members' career growth. In 2 years I've scaled it to 30+ universities in the US, and launched city chapters in SF, Seattle, Dallas, and NYC for founders, builders, & operators. We've also had Replit as a sponsor for hackathons at several of our chapters!",
    image: mtcImage,
    link: "https://mtc.so",
  },
  {
    title: "Shipping at the speed of AI.",
    description: "I'm no stranger to AI: I've shipped fast using Cursor, Replit, Claude Code, OpenAI Codex, Gemini, Cline, Windsurf, v0, Grok, you name it. There's something magical seeing so many ideas become reality in mere hours. Lately I've been been tinkering with voice agents and browser agents.",
    image: aiImage,
    link: "https://github.com/khvni",
  },
  {
    title: "Experience in SWE, infra, & security.",
    description: (
      <>
        Founded{" "}
      <a href="https://withbloom.app/techwadi" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/100 transition-colors">Bloom</a>
      {" "}to solve conference networking at TechWadi's Annual Forum 2025. (Amjad spoke there!) Before that, I worked in AppSec & DevSecOps at Five9 triaging vulnerabilities across 15 product engineering codebases, and before that I interned as a full-stack SWE at Convoy helping stop double-brokering and theft cases.
    </>),
    image: sweImage,
    link: "/make",
  },
  {
    title: "I'm both a lifelong teacher and a lifelong learner.",
    description: "In high school, I wrote on Quora and garnered 6M+ views on my content. In college, I taught 3000+ students in Berkeley's two largest CS courses, creating content & slides to support our students in CS 61A & 61B's notoriously difficult projects. In MTC, I've created documentation, hosted office hours, and mentored leaders.",
    image: teachingImage, 
    link: "/teach",
  },
  {
    title: "Public speaking and experience on-stage.",
    description: (
      <>
        I've had the opportunity to speak at multiple conferences these past few years, including at OPEN SV in{" "}
        <a href="https://www.opensvforums.org/af2024/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/100 transition-colors">2024</a>
        {" "}and{" "}
        <a href="https://www.opensvforum.org/2025" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/100 transition-colors">2025</a>
        ,{" "}
        <a href="https://icnawestconvention.org/speakers/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/100 transition-colors">ICNA West</a>
        , my{" "}
        <a href="https://www.ted.com/tedx/events/64065" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/100 transition-colors">TEDx talk</a>
        , the{" "}
        <a href="https://apexmosque.org/yps2025/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/100 transition-colors">NC Young Professionals Summit</a>
        {" "}in Raleigh, and at{" "}
        <a href="https://manarawest.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/100 transition-colors">MSA West's 26th Annual Conference</a> in San Francisco.
      </>
    ),
    image: speakingImage,
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
            className="flex flex-col items-center gap-12 md:gap-24 md:flex-row-reverse"
          >
            {/* Text Side */}
            <div className="flex-1 w-full text-left text-white">
              <GlitchHeader 
                text="Vibe coding evangelist since Karpathy first coined the term." 
                className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight" 
              />

              <div className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg font-sans">
                Never in human history has a classroom of middle schoolers been excited to do anything related to coding. I created & taught one of the first vibe coding workshops EVER to get kids to see the power of tech outside of writing rote for/while loops and basic algebra. My little sister got into coding by herself pre-2023 with Replit's Python turtle graphics templates; now, she brags to her classmates that she was on Replit before it was cool.
              </div>
            </div>

            {/* Twitter Embed Side */}
            <div className="flex-1 w-full">
              <div className="relative rounded-xl border border-white/20 bg-black/10 shadow-2xl max-w-md mx-auto md:mx-0 flex items-center justify-center p-4">
                <blockquote className="twitter-tweet" data-width="350" data-dnt="true"><p lang="en" dir="ltr">Just taught a vibe coding workshop using <a href="https://twitter.com/Replit?ref_src=twsrc%5Etfw">@Replit</a> to a class of ~20 middle schoolers<br/><br/>Never seen an entire group of kids become so excited about coding<br/><br/>Within 20 mins they were building apps like a 3D Minecraft clone, Flappy Bird but with Steve Harvey&#39;s face as the bird, Doom,… <a href="https://t.co/K5bxUMh13G">pic.twitter.com/K5bxUMh13G</a></p>&mdash; Ali Khani (@alikhvni) <a href="https://twitter.com/alikhvni/status/1913328421062758720?ref_src=twsrc%5Etfw">April 18, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
