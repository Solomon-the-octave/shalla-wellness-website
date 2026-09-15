import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import LogoMarquee from "@/components/LogoMarquee";
import PartnersSection from "@/components/PartnersSection";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import {
  ArrowRight,
  Award,
  Check,
  Flask,
  HeartPulse,
  Leaf,
  Shield,
  UserHeart,
} from "@/components/Icons";

const galleryImages = [
  "/images/gallery/DSC02430.jpg",
  "/images/hero/DSC02363.jpg",
  "/images/gallery/DSC02676.jpg",
];

const reasonIcons = [Flask, Shield, UserHeart, Award, Leaf, HeartPulse];

const reasons = [
  ["Evidence-Based Programs", "Science-backed wellness solutions."],
  [
    "Preventive Health Approach",
    "Helping prevent and reverse the risk factors for chronic diseases.",
  ],
  [
    "Personalized Guidance",
    "Support tailored to individual, workplace, and community needs.",
  ],
  [
    "Professional Expertise",
    "Led by experienced public health and wellness specialists.",
  ],
  [
    "Culturally Adapted",
    "Rooted in African lifestyle, food culture, and daily realities.",
  ],
  [
    "Metabolic Focus",
    "Specialized support for lifestyle-related health conditions.",
  ],
];

const programs = [
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
];

const assessmentPoints = [
  "Vital signs monitoring",
  "Body composition analysis",
  "Metabolic risk screening",
  "Nutrition assessment",
  "Lifestyle evaluation",
  "Personalized recommendations",
];

export default function Home() {
  return (
    <div className="bg-surface text-body">
      <HeroSlider />
      <LogoMarquee />

      {/* INTRO */}
      <section className="bg-soft px-5 py-20 sm:px-6 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16">
          <Reveal direction="left">
            <p className="section-label mb-4">Our approach</p>
            <h2 className="font-serif text-[1.9rem] font-semibold leading-[1.15] tracking-tight text-ink sm:text-4xl md:text-5xl">
              Wellness that starts before illness begins.
            </h2>
            <p className="mt-6 text-base leading-8 sm:text-lg">
              Shalla Wellness Center follows a preventive and root-cause
              approach to health. We focus on early detection of risk factors for
              non-communicable diseases, practical lifestyle change, and
              long-term wellness support.
            </p>
            <Link href="/about" className="btn btn-outline mt-8">
              About us <ArrowRight />
            </Link>
          </Reveal>

          <Reveal direction="right">
            <div className="frame-accent mr-2 sm:mr-3">
              <div className="photo h-72 shadow-2xl shadow-emerald-900/10 sm:h-96 md:h-[440px]">
                <Image
                  src="/images/team/DSC02567.jpg"
                  alt="Shalla Wellness team"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-line bg-card/90 px-4 py-3 shadow-xl shadow-emerald-900/10 backdrop-blur sm:left-6">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-700 text-white">
                  <HeartPulse className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-serif text-base font-semibold leading-tight text-ink">Shalla Wellness</span>
                  <span className="block text-xs font-medium uppercase tracking-[0.16em] text-muted">Preventive Health</span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="px-5 py-20 sm:px-6 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            center
            eyebrow="Why choose us"
            title="Built around trust, disease prevention, and practical care."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-6 md:mt-14 lg:grid-cols-3">
            {reasons.map(([title, text], index) => {
              const Icon = reasonIcons[index];
              return (
              <Reveal key={title} direction="up" delay={index * 0.05}>
                <div className="card card-hover card-accent group h-full p-6 sm:p-8">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-soft text-brand ring-1 ring-line transition-colors duration-500 group-hover:bg-emerald-700 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink sm:text-xl">{title}</h3>
                  <p className="mt-3 leading-7">{text}</p>
                </div>
              </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-soft px-5 py-20 sm:px-6 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Programs"
            title="Preventive wellness programs for individuals, organizations, and communities."
          />

          <div className="mt-12 grid gap-4 sm:gap-6 md:mt-14 md:grid-cols-2">
            {programs.map((service, index) => (
              <Reveal key={service.title} direction="up" delay={index * 0.06}>
                <Link
                  href="/services"
                  className="card card-hover card-accent group flex h-full flex-col p-6 sm:p-8"
                >
                  <span className="font-serif text-sm font-semibold text-accent">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 font-serif text-2xl font-semibold text-brand">
                    {service.title}
                  </h3>
                  <p className="mt-4 flex-1 leading-7">{service.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                    View Services
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-5 py-20 sm:px-6 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            center
            eyebrow="Our space"
            title="A calm, professional environment designed for care."
            text="A welcoming setting where preventive health, assessment, and personalized wellness support come together."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-6 md:mt-14 lg:grid-cols-3 lg:grid-rows-2">
            {galleryImages.map((image, index) => (
              <Reveal
                key={image}
                direction="up"
                delay={index * 0.08}
                className={
                  index === 0
                    ? "sm:col-span-2 lg:col-span-2 lg:row-span-2"
                    : ""
                }
              >
                <div
                  className={`photo group ring-1 ring-line ${
                    index === 0 ? "h-72 sm:h-96 lg:h-full lg:min-h-[34rem]" : "h-60 sm:h-64 lg:h-full"
                  }`}
                >
                  <Image
                    src={image}
                    alt="Shalla Wellness Center environment"
                    fill
                    sizes={index === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <PartnersSection />

      {/* FOUNDER */}
      <section className="px-5 py-20 sm:px-6 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16">
          <Reveal direction="left">
            <div className="frame-accent mr-2 sm:mr-3">
              <div className="photo h-[26rem] shadow-2xl shadow-emerald-900/10 sm:h-[32rem] md:h-[560px]">
                <Image
                  src="/images/founder/DSC02867.jpg"
                  alt="Dr. Dawit Mengistu"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <p className="section-label mb-4">Leadership</p>
            <h2 className="font-serif text-[1.9rem] font-semibold leading-[1.15] tracking-tight text-ink sm:text-4xl md:text-5xl">
              Dr. Dawit Mengistu
            </h2>
            <p className="mt-3 text-lg font-medium text-brand sm:text-xl">
              Founder & CEO, Shalla Wellness Center
            </p>
            <div className="my-6 h-px w-16 bg-accent" />
            <p className="relative text-base leading-8 sm:text-lg">
              <span aria-hidden className="pointer-events-none absolute -left-2 -top-10 select-none font-serif text-8xl leading-none text-accent/25">
                “
              </span>
              Consultant public health specialist, health researcher, and
              educator dedicated to holistic lifestyle medicine. His work
              promotes evidence-based lifestyle interventions to prevent and
              manage non-communicable diseases.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ASSESSMENT */}
      <section id="assessment" className="bg-soft px-5 py-20 sm:px-6 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal direction="up">
            <div className="card grid overflow-hidden md:grid-cols-2">
              <div className="relative h-60 sm:h-80 md:h-auto md:min-h-[440px]">
                <Image
                  src="/images/gallery/DSC02445.jpg"
                  alt="Wellness Assessment"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6 sm:p-10">
                <p className="section-label mb-4">Wellness Assessment</p>
                <h2 className="font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                  Wellness Assessment
                </h2>
                <p className="mt-4 leading-7">
                  Comprehensive health screenings and evaluations designed to
                  identify risks and support healthier lifestyle choices.
                </p>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {assessmentPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm font-medium text-ink">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contact?topic=assessment#message" className="btn btn-primary">
                    Book Assessment <ArrowRight />
                  </Link>
                  <Link href="/contact" className="btn btn-outline">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-emerald-800 px-5 py-20 text-white sm:px-6 md:px-10 md:py-24">
        <div aria-hidden className="absolute -left-24 -top-24 -z-10 h-80 w-80 rounded-full bg-lime-400/15 blur-3xl" />
        <div aria-hidden className="absolute -bottom-32 -right-16 -z-10 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />

        <Reveal direction="up">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-[1.9rem] font-semibold leading-tight sm:text-4xl md:text-5xl">
              Ready to begin your wellness journey?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-emerald-50/85 sm:text-lg">
              Book an assessment, explore partnerships, or learn more about
              Shalla Wellness Center’s preventive health services.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Link href="/contact" className="btn btn-light">
                Contact Us <ArrowRight />
              </Link>
              <Link href="/services" className="btn btn-ghost-light">
                View Services
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
