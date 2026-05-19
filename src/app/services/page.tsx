import Reveal from "@/components/Reveal";

export default function ServicesPage() {
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
      "Nutrition and lifestyle guidance.",
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
    image: "/images/gallery/DSC02445.jpg"
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
      "Stress management and men’s Health",
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

  return (
    <main className="bg-white text-slate-800">
      <section className="px-6 py-24 text-center md:px-10 md:py-28">
        <div className="mx-auto max-w-4xl">
          <Reveal direction="up">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Our Services
            </p>

            <h1 className="text-4xl font-bold text-slate-900 md:text-6xl">
              Preventive wellness programs built for real life.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Shalla Wellness Center offers science-based, culturally adapted
              programs focused on prevention, early detection, nutritional
              therapy and disease reversal.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-7xl space-y-16">
          {services.map((service, index) => (
            <Reveal key={service.title} direction="up">
              <div
                className={`grid items-center gap-10 rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-sm md:grid-cols-2 md:p-8 ${
                  index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="overflow-hidden rounded-[1.5rem]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-[360px] w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900">
                    {service.title}
                  </h2>

                  <p className="mt-5 text-lg leading-8 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {service.points.map((point) => (
                      <div
                        key={point}
                        className="rounded-2xl bg-[#f4fbf7] px-4 py-3 text-sm font-medium text-slate-700"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#f4fbf7] px-6 py-24 text-center md:px-10">
        <div className="mx-auto max-w-4xl">
          <Reveal direction="up">
            <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">
              Not sure where to begin?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Start with the self-assessment questionnaire or contact the Shalla
              Wellness team for guidance on the right program for your needs.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/#assessment"
                className="rounded-full bg-emerald-700 px-7 py-3 font-medium text-white transition hover:bg-emerald-800"
              >
                Start Assessment
              </a>

              <a
                href="/contact"
                className="rounded-full border border-emerald-700 px-7 py-3 font-medium text-emerald-700 transition hover:bg-emerald-50"
              >
                Contact Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}