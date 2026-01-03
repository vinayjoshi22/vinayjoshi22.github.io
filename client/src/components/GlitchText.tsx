import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      <motion.span
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {text}
      </motion.span>
      <span className="absolute top-0 left-0 -z-10 opacity-50 text-primary translate-x-[2px] animate-pulse">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 opacity-50 text-secondary -translate-x-[2px] animate-pulse delay-75">
        {text}
      </span>
    </div>
  );
}
