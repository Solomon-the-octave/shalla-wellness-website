import Image from "next/image";
import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";

const partners = [
  { src: "/images/partners/bbrf.png", name: "BBRF" },
  { src: "/images/partners/haros.png", name: "Haros Fitness" },
  { src: "/images/partners/puratos.png", name: "Puratos Ethiopia" },
  { src: "/images/partners/ethio-istanbul.png", name: "Ethio-Istanbul Hospital" },
  { src: "/images/partners/doc.png", name: "DOC Medical Center" },
];

export default function PartnersSection({ className = "bg-soft" }: { className?: string }) {
  return (
    <section className={`px-5 py-20 sm:px-6 md:px-10 md:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          center
          eyebrow="Trusted by organizations"
          title="Brands and institutions we have collaborated with."
          text="Shalla Wellness Center has worked with trusted organizations across health, wellness, food, fitness, and community-focused sectors."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:mt-14 lg:grid-cols-5">
          {partners.map((partner, index) => (
            <Reveal
              key={partner.name}
              direction="up"
              delay={index * 0.06}
              className={index === partners.length - 1 ? "col-span-2 lg:col-span-1" : ""}
            >
              <div className="card card-hover card-accent flex h-full flex-col items-center gap-4 p-5 text-center sm:p-6">
                <div className="relative grid h-20 w-20 place-items-center rounded-2xl bg-white ring-1 ring-emerald-100">
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={56}
                    height={56}
                    className="h-14 w-14 object-contain"
                  />
                </div>
                <p className="text-sm font-semibold leading-6 text-ink sm:text-base">
                  {partner.name}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
