"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "./Icons";

const heroImages = [
  "/images/office/DSC02244.jpg",
  "/images/gallery/DSC02445.jpg",
  "/images/hero/DSC02378.jpg",
  "/images/office/DSC02254.jpg",
  "/images/gallery/DSC02590.jpg",
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const currentRef = useRef(0);
  // Only mount a photo just before it is shown, so the page doesn't
  // download five large images before anything appears.
  const [loaded, setLoaded] = useState<number[]>([0, 1]);

  const go = useCallback((index: number) => {
    currentRef.current = index;
    setCurrent(index);
    setLoaded((l) =>
      Array.from(new Set([...l, index, (index + 1) % heroImages.length]))
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      go((currentRef.current + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [go]);

  return (
    <section className="relative isolate flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden px-5 sm:px-6 md:px-10">
      {heroImages.map((src, index) =>
        loaded.includes(index) ? (
          <div
            key={src}
            aria-hidden={index !== current}
            className={`absolute inset-0 -z-20 transition-opacity duration-[1800ms] ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt="Shalla Wellness Center environment"
              fill
              priority={index === 0}
              sizes="100vw"
              quality={70}
              className={`object-cover ${index === current ? "kenburns" : ""}`}
            />
          </div>
        ) : null
      )}

      {/* Readability wash — stronger on phones where text covers the photo */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface/90 via-surface/80 to-surface/70 md:bg-gradient-to-r md:from-surface/95 md:via-surface/80 md:to-surface/25" />

      <div className="mx-auto w-full max-w-7xl py-20 md:py-28">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="section-label mb-5"
          >
            Shalla Wellness Center
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
            className="font-serif text-[2.5rem] font-semibold leading-[1.06] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Preventive health for healthier, more productive lives.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.35 }}
            className="mt-6 max-w-2xl text-base leading-8 text-body sm:text-lg"
          >
            Science-based, culturally adapted wellness solutions focused on
            disease prevention, metabolic health, early detection, lifestyle
            change, and long-term wellbeing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.5 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <Link href="#assessment" className="btn btn-primary">
              Start Assessment <ArrowRight />
            </Link>
            <Link href="/services" className="btn btn-outline bg-surface/40">
              Explore Programs
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2 md:bottom-10 md:left-auto md:right-10 lg:right-[max(2.5rem,calc((100vw-80rem)/2))] md:translate-x-0">
        {heroImages.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => go(index)}
            aria-label={`Show photo ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === current ? "w-8 bg-emerald-700" : "w-3 bg-emerald-700/30 hover:bg-emerald-700/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
