"use client";

import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";

const heroImages = [
  "/images/office/DSC02244.jpg",     // entrance / environment
  "/images/gallery/DSC02445.jpg",    // smiling reception interaction
  "/images/hero/DSC02378.jpg",       // consultation image
  "/images/office/DSC02254.jpg",     // office space
  "/images/gallery/DSC02590.jpg",    // wellness interaction
];

const galleryImages = [
  "/images/gallery/DSC02430.jpg",
  "/images/hero/DSC02363.jpg",
  "/images/gallery/DSC02676.jpg",
];

const partnerLogos = [
  { name: "BBRF", image: "/images/partners/bbrf.png" },
  { name: "BGI Ethiopia", image: "/images/partners/bgi.jpg" },
  { name: "Haros Fitness", image: "/images/partners/haros.png" },
  { name: "Puratos Ethiopia", image: "/images/partners/puratos.png" },
  { name: "Ethio-Istanbul Hospital", image: "/images/partners/ethio-istanbul.png" },
  { name: "World Food Programme", image: "/images/partners/wfp.png" },

  // New partner
  { 
    name: "DOC Medical Center", 
    image: "/images/partners/doc.png" 
  },
];
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-white text-slate-800">
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt="Shalla Wellness Center environment"
              className="h-full w-full scale-105 object-cover animate-[slowZoom_9s_ease-in-out_infinite]"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/35" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-28 md:px-10">
          <Reveal direction="up">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
                Shalla Wellness Center
              </p>

              <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
                Preventive health for healthier, more productive lives.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                Science-based, culturally adapted wellness solutions focused on
                disease prevention, metabolic health, early detection, lifestyle
                change, and long-term wellbeing.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#assessment"
                  className="rounded-full bg-emerald-700 px-7 py-3 text-center font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-emerald-800"
                >
                  Start Assessment
                </a>

                <a
                  href="/services"
                  className="rounded-full border border-emerald-700 px-7 py-3 text-center font-medium text-emerald-700 transition-all duration-300 hover:scale-105 hover:bg-emerald-50"
                >
                  Explore Programs
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#f4fbf7] px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <Reveal direction="left">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Our approach
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">
              Wellness that starts before illness begins.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Shalla Wellness Center follows a preventive and root-cause approach
              to health. We focus on early detection of risk factors for
              non-communicable diseases, practical lifestyle change, and long-term
              wellness support.
            </p>
          </Reveal>

          <Reveal direction="right">
            <div className="overflow-hidden rounded-[2rem] shadow-xl">
              <img
                src="/images/team/DSC02567.jpg"
                alt="Shalla Wellness team"
                className="h-[420px] w-full object-cover transition-all duration-700 ease-out hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal direction="up" className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Why choose us
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">
              Built around trust, disease prevention, and practical care.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              ["Evidence-Based Programs", "Science-backed wellness solutions."],
              ["Preventive Health Approach", "Helping prevent and reverse the risk factors for chronic diseases."],
              ["Personalized Guidance", "Support tailored to individual, workplace, and community needs."],
              ["Professional Expertise", "Led by experienced public health and wellness specialists."],
              ["Culturally Adapted", "Rooted in African lifestyle, food culture, and daily realities."],
              ["Metabolic Focus", "Specialized support for lifestyle-related health conditions."],
            ].map(([title, text], index) => (
              <Reveal key={title} direction="up" delay={index * 0.04}>
                <div className="h-full rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-2xl">
                  <h3 className="text-xl font-bold text-emerald-700">
                    {title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
<section className="bg-[#f4fbf7] px-6 py-24 md:px-10">
  <div className="mx-auto max-w-7xl">
    <Reveal direction="up" className="max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
        Programs
      </p>

      <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">
        Preventive wellness programs for individuals, organizations, and
        communities.
      </h2>
    </Reveal>

    <div className="mx-auto mt-14 grid max-w-7xl gap-6 md:grid-cols-2">
      {[
        {
          title: "Corporate Wellness Programs",
          description:
            "Workplace wellness initiatives focused on improving employee health, productivity, stress management, and long-term wellbeing.",
        },
        {
          title: "Wellness Assessment Programs",
          description:
            "Comprehensive health screenings and evaluations designed to identify risks and support healthier lifestyle choices.",
        },
        {
          title: "Health Education & Seminars",
          description:
            "Interactive health education sessions that build awareness around nutrition, prevention, and sustainable healthy living.",
        },
        {
          title: "Community & Specialized Programs",
          description:
            "Tailored wellness initiatives designed to support communities, organizations, and specialized population groups.",
        },
      ].map((service, index) => (
        <Reveal key={service.title} direction="up" delay={index * 0.05}>
          <div className="h-full rounded-3xl bg-white p-8 shadow-sm transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-emerald-700">
              {service.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              {service.description}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>

      {/* CLEAN GALLERY */}
      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal direction="up" className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Our space
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">
              A calm, professional environment designed for care.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A welcoming setting where preventive health, assessment, and
              personalized wellness support come together.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {galleryImages.map((image, index) => (
              <Reveal key={image} direction="up" delay={index * 0.06}>
                <div className="group overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-emerald-100">
                  <img
                    src={image}
                    alt="Shalla Wellness Center environment"
                    className="h-72 w-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-[#f4fbf7] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal direction="up" className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Trusted by organizations
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">
              Brands and institutions we have collaborated with.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Shalla Wellness Center has worked with trusted organizations across
              health, wellness, food, humanitarian, and community-focused sectors.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partnerLogos.map((partner, index) => (
              <Reveal key={partner.name} direction="up" delay={index * 0.04}>
                <div className="flex h-full items-center gap-5 rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white ring-1 ring-emerald-100">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="max-h-14 max-w-14 object-contain"
                    />
                  </div>

                  <p className="font-semibold leading-6 text-slate-800">
                    {partner.name}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="bg-[#f4fbf7] px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <Reveal direction="left">
            <div className="overflow-hidden rounded-[2rem] shadow-xl">
              <img
                src="/images/founder/DSC02867.jpg"
                alt="Dr. Dawit Mengistu"
                className="h-[520px] w-full object-cover object-top transition-all duration-700 ease-out hover:scale-105"
              />
            </div>
          </Reveal>

          <Reveal direction="right">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Leadership
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">
              Dr. Dawit Mengistu
            </h2>

            <p className="mt-3 text-xl font-medium text-emerald-700">
              Founder & CEO, Shalla Wellness Center
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Consultant public health specialist, health researcher, and educator
              dedicated to holistic lifestyle medicine. His work promotes
              evidence based lifestyle interventions to prevent and manage
              non-communicable diseases (NCDs).
            </p>
          </Reveal>
        </div>
      </section>

      <div className="flex h-[260px] items-center justify-center rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-sm">
  <div className="text-center">
    <div className="mb-4 text-5xl">🩺</div>

    <h3 className="text-xl font-bold text-slate-900">
      Wellness Assessment
    </h3>

    <p className="mt-3 text-slate-600">
      Personalized assessment tool coming soon.
    </p>

    <a
      href="/contact"
      className="mt-6 inline-block rounded-full bg-emerald-700 px-6 py-3 text-white transition hover:bg-emerald-800"
    >
      Contact Us
    </a>
  </div>
</div>

      {/* CTA */}
      <section className="bg-emerald-800 px-6 py-20 text-white md:px-10">
        <Reveal direction="up">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold md:text-5xl">
              Ready to begin your wellness journey?
            </h2>

            <p className="mt-5 text-lg leading-8 text-emerald-50">
              Book an assessment, explore partnerships, or learn more about
              Shalla Wellness Center’s preventive health services.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="rounded-full bg-white px-7 py-3 font-medium text-emerald-800 transition-all duration-300 hover:scale-105 hover:bg-emerald-50"
              >
                Contact Us
              </a>

              <a
                href="/services"
                className="rounded-full border border-white px-7 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-white/10"
              >
                View Services
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}