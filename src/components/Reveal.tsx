"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  direction?: "left" | "right" | "up";
  className?: string;
};

/* Scroll-in animation. Offsets are kept small so sections never push the
   page wider than the phone screen, and movement is dropped for visitors who
   ask their device to reduce motion (MotionConfig in template.tsx). */
export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x: direction === "left" ? -32 : direction === "right" ? 32 : 0,
        y: direction === "up" ? 28 : 0,
      }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
