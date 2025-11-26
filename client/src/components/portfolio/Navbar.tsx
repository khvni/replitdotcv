import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";

type NavItem = {
  name: string;
  type: "link";
  href: string;
};

const navStructure: NavItem[] = [
  { 
    name: "Make", 
    type: "link",
    href: "/make"
  },
  { 
    name: "Teach", 
    type: "link",
    href: "/teach"
  },
  { 
    name: "Connect", 
    type: "link",
    href: "/connect"
  }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b-2 ${
        isScrolled ? "bg-[#0e1525] border-[#F26207] py-3" : "bg-[#0e1525]/80 backdrop-blur-md border-transparent py-5"
      }`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="w-full max-w-7xl mx-auto px-6 relative flex items-center justify-between">
        {/* Logo aligned with IDE card */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center gap-3 group z-50 relative">
             <div className="h-8 w-8 bg-[#F26207] flex items-center justify-center transform -rotate-12 group-hover:rotate-0 transition-transform">
               <span className="font-bold text-black font-mono text-lg">AK</span>
             </div>
             <div className="flex flex-col leading-none">
                <span className="font-bold text-white text-sm tracking-tight font-mono group-hover:text-[#F26207] transition-colors uppercase">
                  ALI
                </span>
                <span className="font-bold text-white text-sm tracking-tight font-mono group-hover:text-[#F26207] transition-colors uppercase">
                  KHANI
                </span>
             </div>
          </Link>
        </div>

        {/* Desktop Nav - Centered */}
        <div className="hidden md:flex items-center justify-center gap-8 flex-1">
          {navStructure.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="text-sm font-bold text-[#AEBEC7] hover:text-[#F26207] px-2 py-1 transition-all font-mono uppercase tracking-wide"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Hire button - right aligned */}
        <div className="hidden md:flex justify-end flex-shrink-0">
          <a 
            href="mailto:byalikhani@gmail.com"
            className="bg-transparent text-[#F26207] border-2 border-[#F26207] hover:bg-[#F26207] hover:text-white font-bold text-sm px-6 py-2 rounded-none transition-all font-mono uppercase tracking-wider flex items-center gap-2"
          >
            HIRE <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 border border-white/20 rounded hover:bg-white/10 z-50 relative"
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
            className="md:hidden bg-[#0e1525] border-b-2 border-[#F26207] overflow-hidden absolute top-full left-0 right-0 shadow-2xl"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
              {navStructure.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="text-2xl font-bold text-left text-white hover:text-[#F26207] font-mono uppercase"
                >
                  {item.name}
                </Link>
              ))}
              
              <a 
                href="mailto:byalikhani@gmail.com"
                className="bg-[#F26207] text-white font-bold text-lg py-4 w-full text-center uppercase font-mono hover:bg-[#D95200] flex items-center justify-center gap-2"
              >
                HIRE <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
