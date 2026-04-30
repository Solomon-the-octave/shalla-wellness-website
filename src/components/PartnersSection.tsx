"use client";

import Reveal from "./Reveal";

const partners = [
  {
    src: "/images/partners/bbrf.png",
    name: "BBRF",
    fullName: "Bleu Blanc Rouge Foundation",
  },
  {
    src: "/images/partners/bgi.jpg",
    name: "BGI Ethiopia",
    fullName: "BGI Ethiopia",
  },
  {
    src: "/images/partners/haros.png",
    name: "Haros Fitness",
    fullName: "Haros Fitness and Wellness Center",
  },
  {
    src: "/images/partners/puratos.png",
    name: "Puratos Ethiopia",
    fullName: "Puratos Ethiopia",
  },
  {
    src: "/images/partners/ethio-istanbul.png",
    name: "Ethio-Istanbul Hospital",
    fullName: "Ethio-Istanbul General Hospital",
  },
  {
    src: "/images/partners/wfp.png",
    name: "WFP",
    fullName: "World Food Programme",
  },
];

export default function PartnersSection() {
  return (
    <section className="bg-[#f4fbf7] px-6 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal direction="up" className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Trusted Partnerships
          </p>

          <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">
            Organizations we have worked with.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Shalla Wellness Center has collaborated with organizations across
            health, wellness, food, humanitarian, and community-focused sectors.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, index) => (
            <Reveal key={partner.name} direction="up" delay={index * 0.04}>
              <div className="flex h-full items-center gap-5 rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white ring-1 ring-emerald-100">
                  <img
                    src={partner.src}
                    alt={partner.fullName}
                    className="max-h-14 max-w-14 object-contain"
                  />
                </div>

                <div>
                  <p className="font-bold text-slate-900">{partner.name}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {partner.fullName}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}