"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/site";
import { ArrowUp, Send } from "./Icons";

/* Telegram + back-to-top buttons that slide in once the visitor scrolls. */
export default function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 flex flex-col items-center gap-3 sm:right-6"
        >
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-card text-brand shadow-lg shadow-emerald-900/10 transition hover:-translate-y-0.5"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
          <a
            href={site.telegram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on Telegram"
            className="group relative grid h-14 w-14 place-items-center rounded-full bg-emerald-700 text-white shadow-xl shadow-emerald-900/30 transition hover:-translate-y-0.5 hover:bg-emerald-800"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/30 [animation-duration:2.5s]" />
            <Send className="relative h-6 w-6 -translate-x-px translate-y-px" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
