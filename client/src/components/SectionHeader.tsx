import { motion } from "framer-motion";

interface SectionHeaderProps {
  number: string;
  title: string;
}

export function SectionHeader({ number, title }: SectionHeaderProps) {
  return (
    <motion.div 
      className="flex items-center gap-4 mb-12 border-b border-white/10 pb-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <span className="text-primary font-mono-space text-lg font-bold">
        {number}.
      </span>
      <h2 className="text-3xl md:text-4xl text-white font-display uppercase tracking-wider glow-text">
        {title}
      </h2>
      <div className="flex-grow h-px bg-gradient-to-r from-primary/50 to-transparent ml-4" />
    </motion.div>
  );
}
