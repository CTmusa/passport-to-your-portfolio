import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps extends MotionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "li";
}

export function Reveal({ children, delay = 0, className, as = "div", ...rest }: RevealProps) {
  const Comp = motion[as];
  return (
    <Comp
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  );
}
