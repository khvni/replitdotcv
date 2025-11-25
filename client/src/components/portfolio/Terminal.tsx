import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Minimize2, Send } from "lucide-react";

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "system", content: "Welcome to the Interactive DevRel Terminal." },
    { type: "system", content: "Try asking: 'experience', 'skills', 'why-replit', or 'contact'" },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    const newHistory = [...history, { type: "user", content: cmd }];

    let response = "";
    switch (cleanCmd) {
      case "help":
        response = "Available commands: experience, skills, why-replit, contact, clear";
        break;
      case "experience":
        response = "CS 61B Head TA (Berkeley), Founder (MTC), Freelance DevRel. Taught 1800+ students.";
        break;
      case "skills":
        response = "React, TypeScript, Node.js, Python, Community Building, Technical Writing, Public Speaking.";
        break;
      case "why-replit":
        response = "Because I believe in democratizing software creation. I've used Replit to teach thousands, and I want to help scale that impact.";
        break;
      case "contact":
        response = "Email: hello@devrel.io | Twitter: @devrel_engineer";
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        response = `Command not found: ${cleanCmd}. Type 'help' for options.`;
    }

    setHistory([...newHistory, { type: "system", content: response }]);
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) handleCommand(input);
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-black border border-white/20 text-white hover:bg-primary hover:border-primary transition-colors shadow-lg"
        title="Open Terminal"
      >
        <TerminalIcon className="w-5 h-5" />
      </motion.button>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 left-6 w-[90vw] md:w-[500px] h-[400px] bg-[#0e0e11] border border-white/20 rounded-xl shadow-2xl overflow-hidden z-50 flex flex-col font-mono text-sm"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-muted-foreground text-xs">visitor@portfolio:~</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <button onClick={() => setIsOpen(false)} className="hover:text-white"><Minimize2 className="w-4 h-4" /></button>
                <button onClick={() => setIsOpen(false)} className="hover:text-white"><X className="w-4 h-4" /></button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-4 overflow-y-auto" ref={scrollRef}>
              {history.map((entry, i) => (
                <div key={i} className={`mb-2 ${entry.type === "user" ? "text-white" : "text-green-400"}`}>
                  <span className="opacity-50 mr-2">{entry.type === "user" ? ">" : "$"}</span>
                  {entry.content}
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 bg-white/5 border-t border-white/10 flex gap-2">
              <span className="text-green-500">{">"}</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/20"
                placeholder="Type a command..."
                autoFocus
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
