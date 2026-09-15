import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import Breadcrumb from "@/components/Breadcrumb";
import { Check } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Shalla Wellness Center promotes preventive healthcare and metabolic wellness through science-based, culturally adapted solutions.",
};

const pillars = [
  ["01", "Early Detection", "Identifying disease risk factors before they become chronic conditions."],
  ["02", "Lifestyle Modification", "Helping clients make practical and sustainable lifestyle changes."],
  ["03", "Nutrition-Centered Care", "Providing nutrition and lifestyle guidance customized to each disease group."],
  ["04", "Sustainable Practices", "Building wellness routines that people can maintain long term."],
];

const values = [
  "Evidence-based wellness programs",
  "Preventive health approach",
  "Personalized guidance",
  "Professional expertise",
  "Culturally adapted care",
  "Strong metabolic health focus",
];

const headingClass =
  "font-serif text-[1.9rem] font-semibold leading-[1.15] tracking-tight text-ink sm:text-4xl md:text-5xl";

export default function AboutPage() {
  return (
    <div className="bg-surface text-body">
      {/* HEADER */}
      <section className="page-band px-5 pb-20 pt-12 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16">
          <Reveal direction="left">
            <Breadcrumb current="About" />
            <p className="section-label mb-4">About Shalla Wellness Center</p>
            <h1 className="font-serif text-[2.35rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl">
              Preventive care designed for healthier everyday living.
            </h1>
            <p className="mt-6 text-base leading-8 sm:text-lg">
              Shalla Wellness Center promotes preventive healthcare and metabolic
              wellness through science-based, culturally adapted solutions. The
              center helps individuals, workplaces, and communities understand
              health risks early and build practical lifestyle habits that support
              long-term wellbeing.
            </p>
          </Reveal>

          <Reveal direction="right" className="frame-accent mr-2 sm:mr-3">
            <div className="photo h-80 shadow-2xl shadow-emerald-900/10 sm:h-[26rem] md:h-[500px]">
              <Image
                src="/images/hero/DSC02368.jpg"
                alt="Shalla Wellness Center environment"
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-soft px-5 py-20 sm:px-6 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-4 sm:gap-6 md:grid-cols-2">
          {[
            [
              "Our Vision",
              "To become a leading wellness and preventive health organization in Ethiopia and Africa that empowers people to live healthier and more productive lives.",
            ],
            [
              "Our Mission",
              "To improve community health by providing preventive wellness services, metabolic health education, and lifestyle interventions that reduce the burden of chronic diseases.",
            ],
          ].map(([title, text], index) => (
            <Reveal key={title} direction="up" delay={index * 0.08}>
              <div className="card card-hover card-accent h-full p-6 sm:p-10">
                <p className="section-label mb-4">{index === 0 ? "Vision" : "Mission"}</p>
                <h2 className="font-serif text-2xl font-semibold text-brand sm:text-3xl">{title}</h2>
                <p className="mt-4 text-base leading-8 sm:text-lg">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="px-5 py-20 sm:px-6 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16">
          <Reveal direction="left" className="order-2 md:order-1">
            <div className="photo h-80 shadow-2xl shadow-emerald-900/10 sm:h-[28rem] md:h-[540px]">
              <Image
                src="/images/gallery/DSC02430.jpg"
                alt="Wellness consultation"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal direction="right" className="order-1 md:order-2">
            <p className="section-label mb-4">Our philosophy</p>
            <h2 className={headingClass}>
              Healthcare should not only treat disease. It should help prevent it.
            </h2>
            <p className="mt-6 text-base leading-8 sm:text-lg">
              At Shalla Wellness we believe in a root-cause approach, early
              detection and disease reversal through personalized lifestyle
              modification programs.
            </p>
            <p className="mt-5 text-base leading-8 sm:text-lg">
              This approach supports prevention, management and reversal of most
              of the so-called lifestyle diseases such as diabetes, hypertension,
              obesity, cardiovascular risks, cancer, etc.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WELLNESS MODEL */}
      <section className="bg-soft px-5 py-20 sm:px-6 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Our wellness model"
            title="A practical framework for long-term wellness."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-6 md:mt-14 lg:grid-cols-4">
            {pillars.map(([number, title, text], index) => (
              <Reveal key={title} direction="up" delay={index * 0.06}>
                <div className="card card-hover card-accent h-full p-6 sm:p-7">
                  <p className="font-serif text-4xl font-semibold text-accent/80">{number}</p>
                  <h3 className="mt-4 text-lg font-semibold text-ink sm:text-xl">{title}</h3>
                  <p className="mt-3 leading-7">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="px-5 py-20 sm:px-6 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16">
          <Reveal direction="left">
            <p className="section-label mb-4">What makes us different</p>
            <h2 className={headingClass}>
              Evidence-based support that still feels personal and practical.
            </h2>
            <p className="mt-6 text-base leading-8 sm:text-lg">
              Shalla Wellness combines professional health expertise with
              practical education, culturally relevant nutrition guidance, and
              personalized wellness recommendations. We use a scientifically
              validated approach to improve health and wellbeing.
            </p>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {values.map((value, index) => (
              <Reveal key={value} direction="up" delay={index * 0.05}>
                <div className="card card-hover flex h-full items-center gap-3 p-4 sm:p-5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-soft text-brand ring-1 ring-line">
                    <Check className="h-4 w-4" />
                  </span>
                  <p className="font-semibold text-brand">{value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
