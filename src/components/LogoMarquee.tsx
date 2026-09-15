import Image from "next/image";

const logos = [
  { src: "/images/partners/bbrf.png", name: "BBRF" },
  { src: "/images/partners/haros.png", name: "Haros Fitness" },
  { src: "/images/partners/puratos.png", name: "Puratos Ethiopia" },
  { src: "/images/partners/ethio-istanbul.png", name: "Ethio-Istanbul Hospital" },
  { src: "/images/partners/doc.png", name: "DOC Medical Center" },
];

/* Endless, gently scrolling strip of partner logos. Pauses on hover. */
export default function LogoMarquee() {
  return (
    <section aria-label="Trusted by organizations" className="border-y border-line bg-surface py-7">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 sm:px-6 md:flex-row md:gap-10 md:px-10">
        <p className="section-label shrink-0 whitespace-nowrap">Trusted by organizations</p>

        <div className="marquee relative w-full overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-4">
            {[0, 1].map((copy) =>
              logos.map((logo, i) => (
                <div
                  key={`${copy}-${i}`}
                  aria-hidden={copy === 1}
                  className="flex shrink-0 items-center gap-3 rounded-full border border-line bg-card py-2 pl-2 pr-5"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white ring-1 ring-emerald-100">
                    <Image src={logo.src} alt="" width={28} height={28} className="h-7 w-7 object-contain" />
                  </span>
                  <span className="whitespace-nowrap text-sm font-semibold text-ink">{logo.name}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
