import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Mail } from "lucide-react";

const navStructure = [
  { 
    name: "Making", 
    type: "dropdown",
    items: [
      { name: "Projects", href: "/projects" },
      { name: "Professional", href: "/professional" }
    ]
  },
  { 
    name: "Teaching", 
    href: "/teaching",
    type: "link"
  },
  { 
    name: "Connecting", 
    type: "dropdown",
    items: [
      { name: "Communities", href: "/communities" },
      { name: "Conferences", href: "/conferences" }
    ]
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
        isScrolled ? "bg-[#0B1419] border-[#F26207] py-3" : "bg-[#0B1419]/80 backdrop-blur-md border-transparent py-5"
      }`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group z-50 relative">
           <div className="h-8 w-8 bg-[#F26207] flex items-center justify-center transform -rotate-3 group-hover:rotate-0 transition-transform">
             <span className="font-bold text-black font-mono text-lg">AK</span>
           </div>
           <span className="font-bold text-white text-xl tracking-tight font-mono group-hover:text-[#F26207] transition-colors uppercase">
             ALI KHANI
           </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navStructure.map((item) => (
            <div 
              key={item.name} 
              className="relative group"
              onMouseEnter={() => item.type === 'dropdown' && setActiveDropdown(item.name)}
            >
              {item.type === 'dropdown' ? (
                <button 
                  className={`flex items-center gap-1 text-sm font-bold hover:text-[#F26207] px-2 py-1 transition-all font-mono uppercase tracking-wide ${
                    activeDropdown === item.name ? "text-[#F26207]" : "text-[#AEBEC7]"
                  }`}
                >
                  {item.name} <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                </button>
              ) : (
                <Link href={item.href || "#"}>
                  <a className="text-sm font-bold text-[#AEBEC7] hover:text-[#F26207] px-2 py-1 transition-all font-mono uppercase tracking-wide">
                    {item.name}
                  </a>
                </Link>
              )}

              {/* Dropdown Menu */}
              <AnimatePresence>
                {activeDropdown === item.name && item.items && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-[#1C232B] border border-[#2B323B] shadow-xl rounded-lg overflow-hidden py-2 z-50"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.items.map((subItem) => (
                      <Link key={subItem.name} href={subItem.href}>
                        <a className="block px-4 py-2 text-sm text-[#AEBEC7] hover:text-white hover:bg-[#2B323B] font-mono uppercase transition-colors">
                          {subItem.name}
                        </a>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <a 
            href="mailto:byalikhani@gmail.com"
            className="bg-transparent text-[#F26207] border-2 border-[#F26207] hover:bg-[#F26207] hover:text-white font-bold text-sm px-6 py-2 rounded-none transition-all font-mono uppercase tracking-wider flex items-center gap-2"
          >
            HIRE ALI <Mail className="w-4 h-4" />
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
            className="md:hidden bg-[#0B1419] border-b-2 border-[#F26207] overflow-hidden absolute top-full left-0 right-0 shadow-2xl"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
              {navStructure.map((item) => (
                <div key={item.name} className="flex flex-col space-y-2">
                   {item.type === 'dropdown' ? (
                     <>
                       <span className="text-2xl font-bold text-left text-white font-mono uppercase border-b border-white/10 pb-2 mb-2">
                         {item.name}
                       </span>
                       {item.items?.map((subItem) => (
                         <Link key={subItem.name} href={subItem.href}>
                           <a className="text-lg font-medium text-[#AEBEC7] hover:text-[#F26207] font-mono uppercase pl-4 block">
                             {subItem.name}
                           </a>
                         </Link>
                       ))}
                     </>
                   ) : (
                     <Link href={item.href || "#"}>
                        <a className="text-2xl font-bold text-left text-white hover:text-[#F26207] font-mono uppercase">
                          {item.name}
                        </a>
                     </Link>
                   )}
                </div>
              ))}
              
              <a 
                href="mailto:byalikhani@gmail.com"
                className="bg-[#F26207] text-white font-bold text-lg py-4 w-full text-center uppercase font-mono hover:bg-[#D95200] flex items-center justify-center gap-2"
              >
                HIRE ALI <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
