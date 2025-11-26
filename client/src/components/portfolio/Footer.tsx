import { Github, Linkedin, Twitter, Instagram, Bookmark } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0e1525] border-t border-white/10 py-12 z-20 relative">
      <div className="container mx-auto px-6 flex flex-col items-center">
        
        <div className="flex items-center space-x-8 mb-8">
          <a href="https://github.com/khvni" target="_blank" className="text-[#AEBEC7] hover:text-[#F26207] transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://x.com/alikhvni" target="_blank" className="text-[#AEBEC7] hover:text-[#F26207] transition-colors">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
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
          <p>&copy; {new Date().getFullYear()} Ali Khani.</p>
          <p className="mt-2 text-[#F26207]/80">PS: This whole site was designed with Replit. ;)</p>
        </div>
      </div>
    </footer>
  );
}
