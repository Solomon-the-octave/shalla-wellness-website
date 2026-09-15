"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/* Thin reading-progress line along the bottom of the navbar. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="absolute inset-x-0 bottom-[-1px] h-[2px] origin-left bg-gradient-to-r from-emerald-600 via-emerald-500 to-lime-400"
    />
  );
}
