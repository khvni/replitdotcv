import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";

const navItems = [
  { name: "WORK", href: "#work" },
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
        isScrolled ? "bg-[#0B1419] border-[#F26207] py-4" : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
           <div className="h-8 w-8 bg-[#F26207] rounded-none flex items-center justify-center">
             <span className="font-bold text-black font-display text-lg">AK</span>
           </div>
           <span className="font-bold text-white text-xl tracking-tighter font-display group-hover:text-[#F26207] transition-colors uppercase">
             ALI KHANI
           </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-base font-bold text-[#AEBEC7] hover:text-white hover:underline decoration-[#F26207] decoration-2 underline-offset-4 transition-all font-mono"
            >
              {item.name}
            </button>
          ))}
          <div className="flex items-center space-x-4 pl-6 border-l-2 border-white/10">
            <a href="https://github.com" target="_blank" className="text-[#AEBEC7] hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" className="text-[#AEBEC7] hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
          <button 
            onClick={() => scrollToSection('#contact')}
            className="bg-white text-black border-2 border-white hover:bg-transparent hover:text-white font-bold text-base px-6 py-2 rounded-none transition-all shadow-[4px_4px_0px_0px_#F26207] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none font-mono uppercase"
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
                <a href="#" className="text-[#AEBEC7] hover:text-white">
                  <Github className="w-8 h-8" />
                </a>
                <a href="#" className="text-[#AEBEC7] hover:text-white">
                  <Twitter className="w-8 h-8" />
                </a>
              </div>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="bg-[#F26207] text-white font-bold text-lg py-4 w-full text-center uppercase font-mono hover:bg-[#D95200]"
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
