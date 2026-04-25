"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  direction?: "left" | "right" | "up";
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: RevealProps) {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -60 : direction === "right" ? 60 : 0,
      y: direction === "up" ? 40 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}