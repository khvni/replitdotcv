import { Github, Linkedin, Twitter, Instagram, Bookmark } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B1419] border-t border-white/10 py-12 z-20 relative">
      <div className="container mx-auto px-6 flex flex-col items-center">
        
        <div className="flex items-center space-x-8 mb-8">
          <a href="https://github.com/khvni" target="_blank" className="text-[#AEBEC7] hover:text-[#F26207] transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://x.com/alikhvni" target="_blank" className="text-[#AEBEC7] hover:text-[#F26207] transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/khvni" target="_blank" className="text-[#AEBEC7] hover:text-[#F26207] transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://instagram.com/alikha.ni" target="_blank" className="text-[#AEBEC7] hover:text-[#F26207] transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://substack.com/@khvni" target="_blank" className="text-[#AEBEC7] hover:text-[#F26207] transition-colors">
            <Bookmark className="w-6 h-6" />
          </a>
        </div>

        <div className="text-[#5D6C76] font-mono text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Ali Khani. Built with Replit.</p>
        </div>
      </div>
    </footer>
  );
}
