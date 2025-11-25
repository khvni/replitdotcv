import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About"; // Keeping About as a secondary section if needed, or removing
import AgentSection from "@/components/portfolio/AgentSection";
import Contact from "@/components/portfolio/Contact";
import ReplitBadge from "@/components/portfolio/ReplitBadge";
import Terminal from "@/components/portfolio/Terminal";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B1419] text-foreground font-sans selection:bg-[#F26207]/30 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        {/* The AgentSection replaces the standard "Work" grid with the orange Replit-style layout */}
        <AgentSection /> 
        <Contact />
      </main>

      <footer className="py-8 border-t border-white/5 text-center text-[#AEBEC7] text-sm bg-[#0B1419]">
        <p>© 2025 Ali Khani. Built with Replit Agent.</p>
      </footer>

      <ReplitBadge />
      <Terminal />
    </div>
  );
}
