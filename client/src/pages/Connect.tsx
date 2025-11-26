import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import DitherCanvas from "@/components/ui/DitherCanvas";
import StaticBackground from "@/components/ui/StaticBackground";
import GlitchHeader from "@/components/ui/GlitchHeader";
import { motion } from "framer-motion";

export default function Connect() {
  return (
    <div className="min-h-screen bg-[#0e1525] text-white flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 relative overflow-hidden">
        <DitherCanvas mode="net" className="opacity-20 mix-blend-screen fixed inset-0 pointer-events-none" />
        <StaticBackground />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20 text-center"
          >
            <GlitchHeader 
              text="CONNECT" 
              className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-4 font-display" 
            />
            <p className="text-xl text-[#AEBEC7] font-mono">Communities. Conferences. Socials.</p>
          </motion.div>

          {/* Communities Section */}
          <section id="communities" className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-[1px] flex-grow bg-[#2B323B]"></div>
              <h2 className="text-3xl font-bold text-[#F26207] font-mono uppercase tracking-wider">Communities</h2>
              <div className="h-[1px] flex-grow bg-[#2B323B]"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-[#1C232B] border border-[#2B323B] p-8 rounded-lg">
                    <h3 className="text-2xl font-bold mb-2">Muslim Tech Collaborative</h3>
                    <p className="text-gray-400">Building the largest community of Muslim technologists.</p>
                </div>
            </div>
          </section>

          {/* Conferences Section */}
          <section id="conferences" className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-[1px] flex-grow bg-[#2B323B]"></div>
              <h2 className="text-3xl font-bold text-[#F26207] font-mono uppercase tracking-wider">Conferences</h2>
              <div className="h-[1px] flex-grow bg-[#2B323B]"></div>
            </div>
             <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-[#1C232B] border border-[#2B323B] p-8 rounded-lg relative overflow-hidden group">
                    <div className="absolute top-4 right-4 bg-[#F26207] text-white text-xs font-bold px-2 py-1 rounded uppercase font-mono">
                        Spoke
                    </div>
                    <h3 className="text-2xl font-bold mb-2">TEDx Berkeley</h3>
                    <p className="text-gray-400">Shared insights on technology and community impact.</p>
                </div>
                 <div className="bg-[#1C232B] border border-[#2B323B] p-8 rounded-lg relative overflow-hidden group">
                    <div className="absolute top-4 right-4 bg-[#2B323B] border border-white/20 text-[#AEBEC7] text-xs font-bold px-2 py-1 rounded uppercase font-mono">
                        Attended
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Config 2024</h3>
                    <p className="text-gray-400">Exploring the future of design tools.</p>
                </div>
            </div>
          </section>

          {/* Socials Section */}
          <section id="socials" className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-[1px] flex-grow bg-[#2B323B]"></div>
              <h2 className="text-3xl font-bold text-[#F26207] font-mono uppercase tracking-wider">Socials</h2>
              <div className="h-[1px] flex-grow bg-[#2B323B]"></div>
            </div>
             <div className="grid gap-8 md:grid-cols-3">
                <a href="https://x.com/alikhvni" target="_blank" className="bg-[#1C232B] border border-[#2B323B] p-8 rounded-lg hover:border-[#F26207] transition-colors text-center">
                    <h3 className="text-xl font-bold">X / Twitter</h3>
                </a>
                <a href="https://linkedin.com/in/khvni" target="_blank" className="bg-[#1C232B] border border-[#2B323B] p-8 rounded-lg hover:border-[#F26207] transition-colors text-center">
                    <h3 className="text-xl font-bold">LinkedIn</h3>
                </a>
                <a href="https://github.com/khvni" target="_blank" className="bg-[#1C232B] border border-[#2B323B] p-8 rounded-lg hover:border-[#F26207] transition-colors text-center">
                    <h3 className="text-xl font-bold">GitHub</h3>
                </a>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
