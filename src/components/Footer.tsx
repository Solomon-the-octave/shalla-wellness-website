import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { Mail, MapPin, Phone, Send } from "./Icons";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#04241b] px-5 text-white sm:px-6 md:px-10">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 py-14 md:grid-cols-2 md:py-16 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-4">
            <Image
              src={site.mark}
              alt=""
              width={399}
              height={586}
              className="h-14 w-auto shrink-0"
            />
            <h3 className="font-serif text-2xl font-semibold leading-tight">
              Shalla Wellness Center
            </h3>
          </div>
          <p className="mt-4 max-w-md leading-7 text-emerald-50/70">
            Promoting preventive healthcare and metabolic wellness through
            science-based, culturally adapted solutions.
          </p>
          <a
            href={site.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-emerald-50 transition hover:border-lime-300 hover:text-lime-200"
          >
            <Send className="h-4 w-4" /> Telegram
          </a>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-300">
            Quick Links
          </h4>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-emerald-50/70 transition hover:text-lime-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-300">
            Contact
          </h4>
          <ul className="mt-5 space-y-4 text-emerald-50/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-lime-300" />
              <span>
                {site.address}
                <br />
                {site.city}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-lime-300" />
              <span className="flex flex-col">
                {site.phones.map((p) => (
                  <a key={p.href} href={p.href} className="transition hover:text-lime-200">
                    {p.label}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-lime-300" />
              <a href={`mailto:${site.email}`} className="break-all transition hover:text-lime-200">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl border-t border-white/10 py-5 text-center text-sm text-emerald-50/50">
        © {new Date().getFullYear()} Shalla Wellness Center. All rights reserved.
      </div>
    </footer>
  );
}
