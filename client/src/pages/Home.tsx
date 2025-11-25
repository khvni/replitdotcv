import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About"; 
import AgentSection from "@/components/portfolio/AgentSection";
import Contact from "@/components/portfolio/Contact";
import ReplitBadge from "@/components/portfolio/ReplitBadge";
import Terminal from "@/components/portfolio/Terminal";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B1419] text-foreground font-sans selection:bg-[#F26207]/30 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <AgentSection /> 
        <Contact />
      </main>

      <Footer />

      <ReplitBadge />
      <Terminal />
    </div>
  );
}
