import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Twitter, Instagram } from "lucide-react";

const navItems = [
  { name: "WORK", href: "#work" },
  { name: "MTC", href: "#mtc" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b-2 ${
        isScrolled ? "bg-[#0B1419] border-[#F26207] py-3" : "bg-[#0B1419]/80 backdrop-blur-md border-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
           <div className="h-8 w-8 bg-[#F26207] flex items-center justify-center transform -rotate-3 group-hover:rotate-0 transition-transform">
             <span className="font-bold text-black font-display text-lg">AK</span>
           </div>
           <span className="font-bold text-white text-xl tracking-tight font-display group-hover:text-[#F26207] transition-colors uppercase">
             ALI KHANI
           </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-bold text-[#AEBEC7] hover:text-white hover:bg-[#F26207] hover:text-black px-2 py-1 transition-all font-display uppercase tracking-wide"
            >
              {item.name}
            </button>
          ))}
          <div className="flex items-center space-x-4 pl-6 border-l-2 border-white/10">
            <a href="https://github.com/khvni" target="_blank" className="text-[#AEBEC7] hover:text-[#F26207] transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://x.com/alikhvni" target="_blank" className="text-[#AEBEC7] hover:text-[#F26207] transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/khvni" target="_blank" className="text-[#AEBEC7] hover:text-[#F26207] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/alikha.ni" target="_blank" className="text-[#AEBEC7] hover:text-[#F26207] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <button 
            onClick={() => scrollToSection('#contact')}
            className="bg-transparent text-[#F26207] border-2 border-[#F26207] hover:bg-[#F26207] hover:text-white font-bold text-sm px-6 py-2 rounded-none transition-all font-display uppercase tracking-wider"
          >
            HIRE ALI
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 border border-white/20 rounded hover:bg-white/10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0B1419] border-b-2 border-[#F26207] overflow-hidden absolute top-full left-0 right-0 shadow-2xl"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-2xl font-bold text-left text-white hover:text-[#F26207] font-display uppercase"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex space-x-6 pt-6 border-t-2 border-white/10">
                <a href="https://github.com/khvni" className="text-[#AEBEC7] hover:text-white">
                  <Github className="w-8 h-8" />
                </a>
                <a href="https://x.com/alikhvni" className="text-[#AEBEC7] hover:text-white">
                  <Twitter className="w-8 h-8" />
                </a>
              </div>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="bg-[#F26207] text-white font-bold text-lg py-4 w-full text-center uppercase font-display hover:bg-[#D95200]"
              >
                HIRE ALI
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
