import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import DitherCanvas from "@/components/ui/DitherCanvas";
import StaticBackground from "@/components/ui/StaticBackground";
import GlitchHeader from "@/components/ui/GlitchHeader";
import { motion } from "framer-motion";

export default function Teach() {
  return (
    <div className="min-h-screen bg-[#0e1525] text-white flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 relative overflow-hidden">
        <DitherCanvas mode="orb" className="opacity-20 mix-blend-screen fixed inset-0 pointer-events-none" />
        <StaticBackground />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20 text-center"
          >
            <GlitchHeader 
              text="TEACH" 
              className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-4 font-display" 
            />
            <p className="text-xl text-[#AEBEC7] font-mono">Replit. MTC. Berkeley.</p>
          </motion.div>

          {/* Replit Section */}
          <section id="replit" className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-[1px] flex-grow bg-[#2B323B]"></div>
              <h2 className="text-3xl font-bold text-[#F26207] font-mono uppercase tracking-wider">Replit</h2>
              <div className="h-[1px] flex-grow bg-[#2B323B]"></div>
            </div>
            <div className="bg-[#1C232B] border border-[#2B323B] p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">DevRel Engineering</h3>
                <p className="text-gray-400">Empowering the next billion software creators through education and community.</p>
            </div>
          </section>

          {/* MTC Section */}
          <section id="mtc" className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-[1px] flex-grow bg-[#2B323B]"></div>
              <h2 className="text-3xl font-bold text-[#F26207] font-mono uppercase tracking-wider">MTC</h2>
              <div className="h-[1px] flex-grow bg-[#2B323B]"></div>
            </div>
             <div className="bg-[#1C232B] border border-[#2B323B] p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Founder & Lead</h3>
                <p className="text-gray-400">Teaching and connecting Muslim technologists across 30+ chapters.</p>
            </div>
          </section>

          {/* Berkeley Section */}
          <section id="berkeley" className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-[1px] flex-grow bg-[#2B323B]"></div>
              <h2 className="text-3xl font-bold text-[#F26207] font-mono uppercase tracking-wider">Berkeley</h2>
              <div className="h-[1px] flex-grow bg-[#2B323B]"></div>
            </div>
             <div className="bg-[#1C232B] border border-[#2B323B] p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">CS 61B Teaching Assistant</h3>
                <p className="text-gray-400">Taught Data Structures to over 1800 students with a focus on empathy and understanding.</p>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
