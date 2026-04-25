"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-100 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-10">
        <Link href="/" className="flex items-center gap-3">
          <div>
            <p className="text-lg font-bold text-emerald-800">
              Shalla Wellness
            </p>
            <p className="hidden text-xs text-slate-500 sm:block">
              Preventive Health & Metabolic Wellness
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition duration-300 hover:text-emerald-700"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/#assessment"
            className="rounded-full bg-emerald-700 px-5 py-2.5 text-white transition duration-300 hover:bg-emerald-800"
          >
            Book Assessment
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-emerald-100 px-3 py-2 text-sm font-medium text-emerald-800 md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-emerald-100 bg-white px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium text-slate-700">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="transition hover:text-emerald-700"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/#assessment"
              onClick={() => setOpen(false)}
              className="rounded-full bg-emerald-700 px-5 py-3 text-center text-white"
            >
              Book Assessment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}