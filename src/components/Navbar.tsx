"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, site } from "@/lib/site";
import { ArrowRight, Moon, Sun } from "./Icons";
import ScrollProgress from "./ScrollProgress";

function subscribeTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

function ThemeToggle() {
  const dark = useSyncExternalStore(
    subscribeTheme,
    () => document.documentElement.classList.contains("dark"),
    () => false
  );

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage blocked — theme still switches for this visit */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="grid h-10 w-10 place-items-center rounded-full border border-line text-brand transition hover:bg-soft"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={dark ? "sun" : "moon"}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {dark ? <Sun /> : <Moon />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu when the route changes (e.g. browser back button)
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  // Lock page scroll while the mobile menu is open; Esc closes it
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b px-5 sm:px-6 md:px-10 backdrop-blur-xl backdrop-saturate-150 transition-[box-shadow,border-color,background-color] duration-500 ${
        scrolled || open
          ? "border-line bg-[var(--nav)] shadow-[0_10px_30px_-18px_rgba(6,78,59,0.35)]"
          : "border-transparent bg-[var(--nav)]"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 transition-[padding] duration-500 ${
          scrolled ? "py-2.5" : "py-3.5"
        }`}
        aria-label="Main"
      >
        <Link href="/" className="flex items-center gap-4" aria-label={site.name}>
          <span className="relative block h-12 w-24 overflow-hidden rounded-xl bg-white ring-1 ring-black/5 sm:h-14 sm:w-28">
            <Image
              src={site.logo}
              alt=""
              fill
              priority
              sizes="112px"
              className="scale-[1.55] object-contain"
            />
          </span>

          <span className="hidden border-l border-line pl-4 sm:block">
            <span className="block font-serif text-xl font-semibold leading-tight text-brand">
              Shalla Wellness
            </span>
            <span className="block text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Preventive Health
            </span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive(link.href) ? "text-brand" : "text-body hover:text-brand"
              }`}
            >
              {isActive(link.href) && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-soft ring-1 ring-line"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              {link.name}
            </Link>
          ))}

          <Link href="/#assessment" className="btn btn-primary ml-3 px-5 py-2.5 text-sm">
            Book Assessment
          </Link>

          <span className="ml-2">
            <ThemeToggle />
          </span>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative grid h-10 w-10 place-items-center rounded-full border border-line text-ink"
          >
            <span className="sr-only">Menu</span>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="absolute h-[2px] w-5 rounded-full bg-current transition-all duration-300"
                style={{
                  transform: open
                    ? i === 1
                      ? "scaleX(0)"
                      : `rotate(${i === 0 ? 45 : -45}deg)`
                    : `translateY(${(i - 1) * 6}px)`,
                  opacity: open && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      <ScrollProgress />

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="-mx-5 overflow-hidden border-t border-line sm:-mx-6 md:hidden"
          >
            <div className="flex max-h-[calc(100svh-5rem)] flex-col gap-2 overflow-y-auto px-5 py-5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`flex items-center justify-between rounded-2xl px-5 py-3.5 text-base font-medium transition ${
                      isActive(link.href)
                        ? "bg-emerald-700 text-white"
                        : "bg-soft text-ink hover:text-brand"
                    }`}
                  >
                    {link.name}
                    <ArrowRight className="h-4 w-4 opacity-60" />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
              >
                <Link
                  href="/#assessment"
                  onClick={() => setOpen(false)}
                  className="btn btn-primary mt-2 w-full"
                >
                  Book Assessment
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
