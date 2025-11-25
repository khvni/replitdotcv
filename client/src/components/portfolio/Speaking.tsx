import { motion } from "framer-motion";
import { Mic, Video, Calendar } from "lucide-react";

const talks = [
  {
    event: "TEDxBerkeley 2024",
    title: "The Future of Coding Education",
    type: "Keynote",
    date: "Mar 2024",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop",
  },
  {
    event: "React Miami",
    title: "Building Communities with Code",
    type: "Conference Talk",
    date: "Apr 2024",
    image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    event: "Replit Developer Day",
    title: "From Student to Creator",
    type: "Lightning Talk",
    date: "Jan 2024",
    image: "https://images.unsplash.com/photo-1515168816178-54e7c0f3c9f0?q=80&w=2070&auto=format&fit=crop",
  }
];

export default function Speaking() {
  return (
    <section id="speaking" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Speaking
            </h2>
            <p className="text-xl text-muted-foreground max-w-lg">
              Sharing insights on education, community building, and the future of software development.
            </p>
          </motion.div>
          
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#"
            className="hidden md:flex items-center gap-2 text-primary font-medium hover:underline mt-4 md:mt-0"
          >
            Request a talk <Mic className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {talks.map((talk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-white/10 aspect-[4/5] flex flex-col justify-end p-6"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={talk.image} 
                  alt={talk.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 text-xs font-mono text-primary mb-2 opacity-80">
                  <Calendar className="w-3 h-3" /> {talk.date}
                </div>
                <h3 className="text-2xl font-bold leading-tight mb-2 text-white">
                  {talk.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {talk.event} • {talk.type}
                </p>
                <button className="flex items-center gap-2 text-sm font-medium text-white opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <Video className="w-4 h-4" /> Watch Recording
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
