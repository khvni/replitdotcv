import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import DitherCanvas from "@/components/ui/DitherCanvas";
import StaticBackground from "@/components/ui/StaticBackground";
import GlitchHeader from "@/components/ui/GlitchHeader";
import { motion } from "framer-motion";

export default function Make() {
  return (
    <div className="min-h-screen bg-[#0e1525] text-white flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 relative overflow-hidden">
        <DitherCanvas mode="city" className="opacity-20 mix-blend-screen fixed inset-0 pointer-events-none" />
        <StaticBackground />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20 text-center"
          >
            <GlitchHeader 
              text="MAKE" 
              className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-4 font-display" 
            />
            <p className="text-xl text-[#AEBEC7] font-mono">Projects. Experience. Content.</p>
          </motion.div>

          {/* Experience Section */}
          <section id="experience" className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-[1px] flex-grow bg-[#2B323B]"></div>
              <h2 className="text-3xl font-bold text-[#F26207] font-mono uppercase tracking-wider">Experience</h2>
              <div className="h-[1px] flex-grow bg-[#2B323B]"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
                {/* Placeholder for Experience items */}
                <div className="bg-[#1C232B] border border-[#2B323B] p-8 rounded-lg">
                    <h3 className="text-2xl font-bold mb-2">Replit</h3>
                    <p className="text-[#AEBEC7] font-mono mb-4">DevRel Engineer Application</p>
                    <p className="text-gray-400">Building this portfolio to demonstrate speed and design engineering skills.</p>
                </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-[1px] flex-grow bg-[#2B323B]"></div>
              <h2 className="text-3xl font-bold text-[#F26207] font-mono uppercase tracking-wider">Projects</h2>
              <div className="h-[1px] flex-grow bg-[#2B323B]"></div>
            </div>
             <div className="grid gap-8 md:grid-cols-2">
                {/* Placeholder for Project items */}
                <div className="bg-[#1C232B] border border-[#2B323B] p-8 rounded-lg">
                    <h3 className="text-2xl font-bold mb-2">MTC Platform</h3>
                    <p className="text-[#AEBEC7] font-mono mb-4">Full Stack App</p>
                    <p className="text-gray-400">Connecting Muslim tech communities across the nation.</p>
                </div>
            </div>
          </section>

          {/* Content Section */}
          <section id="content" className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-[1px] flex-grow bg-[#2B323B]"></div>
              <h2 className="text-3xl font-bold text-[#F26207] font-mono uppercase tracking-wider">Content</h2>
              <div className="h-[1px] flex-grow bg-[#2B323B]"></div>
            </div>
             <div className="grid gap-8 md:grid-cols-2">
                {/* Placeholder for Content items */}
                <div className="bg-[#1C232B] border border-[#2B323B] p-8 rounded-lg">
                    <h3 className="text-2xl font-bold mb-2">Blog Posts</h3>
                    <p className="text-[#AEBEC7] font-mono mb-4">Technical Writing</p>
                    <p className="text-gray-400">Deep dives into engineering challenges and community building.</p>
                </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
