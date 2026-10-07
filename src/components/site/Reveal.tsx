import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps extends MotionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "li";
}

export function Reveal({ children, delay = 0, className, as = "div", ...rest }: RevealProps) {
  const Comp = motion[as];
  const reducedMotion = useReducedMotion();
  return (
    <Comp
      initial={reducedMotion ? false : { opacity: 1, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: reducedMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1], delay: reducedMotion ? 0 : delay }}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  );
}
