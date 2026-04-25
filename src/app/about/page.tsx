import Reveal from "@/components/Reveal";

export default function AboutPage() {
  const pillars = [
    ["01", "Early Detection", "Identifying metabolic risks before they become chronic conditions."],
    ["02", "Lifestyle Modification", "Helping clients make practical and sustainable changes to daily habits."],
    ["03", "Nutrition-Centered Care", "Providing food and lifestyle guidance adapted to African culture and everyday realities."],
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

  return (
    <main className="bg-white text-slate-800">
      <section className="px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <Reveal direction="left">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              About Shalla Wellness Center
            </p>

            <h1 className="text-4xl font-bold text-slate-900 md:text-6xl">
              Preventive care designed for healthier everyday living.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Shalla Wellness Center promotes preventive healthcare and metabolic
              wellness through science-based, culturally adapted solutions. The
              center helps individuals, workplaces, and communities understand
              health risks early and build practical lifestyle habits that support
              long-term wellbeing.
            </p>
          </Reveal>

          <Reveal direction="right">
            <div className="overflow-hidden rounded-[2rem] shadow-xl">
              <img
                src="/images/gallery/DSC02445.jpg"
                alt="Shalla Wellness Center environment"
                className="h-[480px] w-full object-cover transition-all duration-700 ease-out hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f4fbf7] px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
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
            <Reveal key={title} direction="up" delay={index * 0.05}>
              <div className="h-full rounded-3xl bg-white p-8 shadow-sm transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-2xl">
                <h2 className="text-2xl font-bold text-emerald-700">
                  {title}
                </h2>
                <p className="mt-4 leading-8 text-slate-600">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <Reveal direction="left">
            <div className="overflow-hidden rounded-[2rem] shadow-xl">
              <img
                src="/images/gallery/DSC02454.jpg"
                alt="Wellness consultation"
                className="h-[520px] w-full object-cover transition-all duration-700 ease-out hover:scale-105"
              />
            </div>
          </Reveal>

          <Reveal direction="right">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Our philosophy
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">
              Healthcare should not only treat disease. It should help prevent it.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Shalla Wellness follows a preventive and root-cause approach to
              health. Instead of waiting until illness becomes severe, the center
              helps people identify risks early, understand their lifestyle
              patterns, improve nutrition, and take realistic steps toward better
              health.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              This approach supports prevention and management of lifestyle-related
              conditions such as diabetes, hypertension, obesity, cardiovascular
              risks, and other non-communicable diseases.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f4fbf7] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal direction="up" className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Our wellness model
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">
              A practical framework for long-term wellness.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {pillars.map(([number, title, text], index) => (
              <Reveal key={title} direction="up" delay={index * 0.04}>
                <div className="h-full rounded-3xl bg-white p-7 shadow-sm transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-2xl">
                  <p className="text-sm font-bold text-emerald-600">{number}</p>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    {title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <Reveal direction="left">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                What makes us different
              </p>

              <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">
                Science-based support that still feels personal and practical.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Shalla Wellness combines professional health expertise with
                practical education, culturally relevant nutrition guidance, and
                personalized wellness recommendations. The goal is not to create
                complicated routines, but to help people make healthier choices
                that fit their real lives.
              </p>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((value, index) => (
                <Reveal key={value} direction="up" delay={index * 0.03}>
                  <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl">
                    <p className="font-semibold text-emerald-700">{value}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}