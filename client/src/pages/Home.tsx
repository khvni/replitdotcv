import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Work from "@/components/portfolio/Work";
import Speaking from "@/components/portfolio/Speaking";
import Contact from "@/components/portfolio/Contact";
import ReplitBadge from "@/components/portfolio/ReplitBadge";
import Terminal from "@/components/portfolio/Terminal";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Work />
        <Speaking />
        <Contact />
      </main>

      <footer className="py-8 border-t border-white/10 text-center text-muted-foreground text-sm">
        <p>© 2025 DevRel Portfolio. Built for the Replit Team.</p>
      </footer>

      <ReplitBadge />
      <Terminal />
    </div>
  );
}
