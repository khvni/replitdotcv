import { motion } from "framer-motion";
import { Send, ArrowRight, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#0B1419] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="bg-[#1B252B] border border-white/5 rounded-[4px] p-12 md:p-24 text-center relative overflow-hidden">
          {/* Abstract shapes for visual interest */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#F26207]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#F26207]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight">
              Ready to deploy?
            </h2>
            <p className="text-xl md:text-2xl text-[#AEBEC7] mb-12 font-light">
              I'm actively looking to join the Replit team. Let's turn this portfolio into an offer letter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="mailto:ali@example.com" 
                className="replit-button-primary text-lg flex items-center justify-center gap-3"
              >
                Start a Thread <MessageSquare className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank"
                rel="noreferrer"
                className="replit-button-secondary text-lg flex items-center justify-center gap-3"
              >
                DM on Twitter <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
