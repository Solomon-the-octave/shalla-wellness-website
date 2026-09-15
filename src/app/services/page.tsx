import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import Breadcrumb from "@/components/Breadcrumb";
import { ArrowRight, Check } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Corporate wellness, wellness assessments, health education and community programs focused on prevention, early detection, nutritional therapy and disease reversal.",
};

const services = [
  {
    title: "Corporate Wellness Programs",
    description:
      "Workplace-focused wellness initiatives that support employee health, productivity, and long-term wellbeing.",
    points: [
      "Employee wellness screening",
      "Metabolic health assessments",
      "Lifestyle risk evaluation",
      "Workplace wellness education",
      "Stress prevention programs",
      "Nutrition and lifestyle guidance",
    ],
    image: "/images/hero/DSC02716.jpg",
  },
  {
    title: "Wellness Assessment Programs",
    description:
      "Comprehensive assessments that help individuals understand their current health status, lifestyle risks, and wellness needs.",
    points: [
      "Vital signs monitoring",
      "Body composition analysis",
      "Metabolic risk screening",
      "Nutrition assessment",
      "Lifestyle evaluation",
      "Personalized recommendations",
    ],
    image: "/images/gallery/DSC02445.jpg",
  },
  {
    title: "Health Education & Seminars",
    description:
      "Practical learning sessions that build awareness around prevention, nutrition, metabolic health, and sustainable wellbeing.",
    points: [
      "Metabolic health education",
      "Nutrition and chronic disease prevention",
      "Women’s health and hormonal wellness",
      "Healthy pregnancy and maternal wellness",
      "Gut health and immune support",
      "Stress management and men’s health",
    ],
    image: "/images/hero/DSC02378.jpg",
  },
  {
    title: "Community & Specialized Programs",
    description:
      "Outreach and specialized wellness programs designed to support communities, institutions, and vulnerable groups.",
    points: [
      "Health awareness for community health center",
      "Nursing home wellness support",
      "Health fairs",
      "Nutrition and supplement tracking",
      "Corporate wellness program",
      "Targeted lifestyle support",
    ],
    image: "/images/gallery/DSC02590.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-surface text-body">
      {/* HEADER */}
      <section className="page-band px-5 pb-14 pt-12 sm:px-6 md:px-10 md:pb-20 md:pt-24">
        <Breadcrumb current="Services" center />
        <SectionIntro
          center
          as="h1"
          eyebrow="Our Services"
          title="Preventive wellness programs built for real life."
          text="Shalla Wellness Center offers science-based, culturally adapted programs focused on prevention, early detection, nutritional therapy and disease reversal."
          className="max-w-4xl"
        />

        {/* Quick jump chips */}
        <Reveal direction="up" delay={0.15}>
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2 sm:gap-3">
            {services.map((s, i) => (
              <a
                key={s.title}
                href={`#service-${i + 1}`}
                className="rounded-full border border-line bg-card px-4 py-2 text-sm font-medium text-ink transition hover:border-accent hover:text-brand"
              >
                {s.title}
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* SERVICES */}
      <section className="px-5 pb-20 pt-4 sm:px-6 md:px-10 md:pb-28">
        <div className="mx-auto max-w-7xl space-y-8 md:space-y-14">
          {services.map((service, index) => (
            <Reveal key={service.title} direction="up">
              <article
                id={`service-${index + 1}`}
                className="card grid items-center gap-6 p-4 sm:p-6 md:grid-cols-2 md:gap-12 md:p-8"
              >
                <div className={`photo h-60 sm:h-80 md:h-[400px] ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="px-2 pb-2 sm:px-0 sm:pb-0">
                  <span className="font-serif text-sm font-semibold text-accent">
                    0{index + 1}
                  </span>
                  <h2 className="mt-2 font-serif text-[1.7rem] font-semibold leading-tight text-ink sm:text-3xl md:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 sm:text-lg">{service.description}</p>

                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 sm:gap-3">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 rounded-2xl bg-soft px-4 py-3 text-sm font-medium text-ink"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-soft px-5 py-20 text-center sm:px-6 md:px-10 md:py-28">
        <div className="mx-auto max-w-4xl">
          <Reveal direction="up">
            <h2 className="font-serif text-[1.9rem] font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
              Not sure where to begin?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 sm:text-lg">
              Start with the self-assessment questionnaire or contact the Shalla
              Wellness team for guidance on the right program for your needs.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Link href="/#assessment" className="btn btn-primary">
                Start Assessment <ArrowRight />
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
