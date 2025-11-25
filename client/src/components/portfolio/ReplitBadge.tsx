import { motion } from "framer-motion";
import { Bot } from "lucide-react";

export default function ReplitBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a 
        href="https://replit.com" 
        target="_blank" 
        rel="noreferrer"
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 border border-white/20 backdrop-blur-md text-xs font-mono text-white hover:bg-black hover:border-primary/50 transition-all duration-300 group shadow-lg"
      >
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        Built with <span className="font-bold text-primary">Replit Agent</span>
        <div className="w-px h-4 bg-white/20 mx-1" />
        <span className="text-muted-foreground group-hover:text-white transition-colors">
          v0.1
        </span>
      </a>
    </motion.div>
  );
}
