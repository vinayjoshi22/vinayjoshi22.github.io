import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TerminalCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  title?: string;
}

export function TerminalCard({ children, className, delay = 0, title }: TerminalCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className={cn(
        "retro-border bg-card/50 backdrop-blur-sm p-6 relative group hover:bg-white/5 transition-colors duration-300",
        className
      )}
    >
      {title && (
        <div className="absolute -top-3 left-4 bg-background px-2 text-xs font-mono-space text-primary uppercase tracking-widest border border-primary/20">
          {title}
        </div>
      )}
      {children}
    </motion.div>
  );
}
