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
    <header className="sticky top-0 z-50 w-full border-b border-emerald-100 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* LEFT SIDE */}
        <Link href="/" className="flex items-center gap-5">
          {/* LOGO FIXED */}
          <div className="relative h-16 w-32 overflow-hidden rounded-lg bg-white">
            <img
              src="/images/logo.png/Shalla%20Logo.jpg"
              alt="Shalla Wellness Center"
              className="absolute left-1/2 top-1/2 h-28 w-auto -translate-x-1/2 -translate-y-1/2 object-contain"
            />
          </div>

          {/* TEXT */}
          <div className="hidden border-l border-slate-200 pl-5 sm:block">
            <p className="text-xl font-semibold text-emerald-800">
              Shalla Wellness
            </p>
            <p className="text-sm text-gray-500">
              Preventive Health & Metabolic Wellness
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-6 text-sm font-medium text-gray-700 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition hover:text-emerald-700"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/#assessment"
            className="rounded-full bg-emerald-700 px-5 py-2 text-white transition hover:bg-emerald-800"
          >
            Book Assessment
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="font-medium text-emerald-800 md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-emerald-100 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-gray-700">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-emerald-700"
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