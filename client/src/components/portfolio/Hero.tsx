import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements - Subtle Grid/Globe hint */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0B1419]" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-[#1B252B]/30 to-transparent opacity-50" />
      </div>

      {/* Content */}
      <div className="container relative z-20 px-6 flex flex-col items-center text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-[#1B252B] border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#F26207] animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground">Ready to ship</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 text-white leading-[1.1]">
            From Idea to <br className="hidden md:block" />
            <span className="text-[#F26207]">Deployed</span> in Minutes.
          </h1>

          <p className="text-xl md:text-2xl text-[#AEBEC7] max-w-2xl mb-10 font-light">
            I'm Ali Khani. I don't just teach code—I empower creators. 
            <span className="hidden md:inline"> 1800+ students taught. 16k+ views. 100% high-agency.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button 
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#F26207] text-white font-semibold text-lg px-8 py-4 rounded-[4px] hover:bg-[#D95200] transition-all shadow-[0_0_20px_rgba(242,98,7,0.3)] hover:shadow-[0_0_30px_rgba(242,98,7,0.5)]"
            >
              See What I Build
            </button>
            <button 
               onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#1B252B] text-white border border-white/10 font-semibold text-lg px-8 py-4 rounded-[4px] hover:bg-[#232C30] hover:border-white/20 transition-all"
            >
              Start a Conversation
            </button>
          </div>
        </motion.div>
        
        {/* Code/Visual Element */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 w-full max-w-4xl rounded-t-lg border border-white/10 bg-[#000000] shadow-2xl overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-2 border-b border-white/10 bg-[#1B252B]">
             <div className="flex gap-1.5">
               <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
               <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
               <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
             </div>
             <div className="text-xs text-muted-foreground font-mono ml-2">main.tsx</div>
          </div>
          <div className="p-6 font-mono text-sm md:text-base overflow-x-auto">
            <div className="text-gray-400">
              <span className="text-[#F26207]">const</span> <span className="text-[#FFC600]">AliKhani</span> = <span className="text-[#F26207]">new</span> <span className="text-[#27C93F]">DevRel</span>({'{'}
            </div>
            <div className="pl-4 text-gray-300">
              mission: <span className="text-[#98C379]">"Democratize software creation"</span>,
            </div>
            <div className="pl-4 text-gray-300">
              impact: [<span className="text-[#98C379]">'1800+ Students'</span>, <span className="text-[#98C379]">'30+ Universities'</span>, <span className="text-[#98C379]">'MTC Founder'</span>],
            </div>
            <div className="pl-4 text-gray-300">
              superpower: <span className="text-[#98C379]">'Shipping at the speed of thought'</span>,
            </div>
            <div className="pl-4 text-gray-300">
              status: <span className="text-[#F26207]">READY_TO_DEPLOY</span>
            </div>
            <div className="text-gray-400">{'}'});</div>
            <div className="mt-4 text-gray-400">
              <span className="text-[#61AFEF]">AliKhani</span>.<span className="text-[#61AFEF]">inspireNextGen</span>();
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
