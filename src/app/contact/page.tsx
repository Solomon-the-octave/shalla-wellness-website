import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import Breadcrumb from "@/components/Breadcrumb";
import { ArrowRight, Mail, MapPin, Phone, Send } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Visit Shalla Wellness Center at Platinum Plaza, Bole, Addis Ababa, or reach the team by email, phone or Telegram.",
};

export default function ContactPage() {
  return (
    <div className="bg-surface text-body">
      {/* HEADER */}
      <section className="page-band px-5 pb-14 pt-12 sm:px-6 md:px-10 md:pb-20 md:pt-24">
        <Breadcrumb current="Contact" center />
        <SectionIntro
          center
          as="h1"
          eyebrow="Contact Shalla Wellness"
          title="Visit our office or connect with our team directly."
          text="For appointments, partnerships, and general inquiries, you can contact us by email, phone, Telegram, or visit our office location."
        />
      </section>

      {/* OFFICE + MAP */}
      <section className="px-5 pb-20 sm:px-6 md:px-10 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal direction="left">
            <div className="h-full rounded-[2rem] border border-line bg-soft p-6 sm:p-8">
              <h2 className="font-serif text-2xl font-semibold text-brand sm:text-3xl">
                Office Information
              </h2>

              <div className="mt-7 space-y-3">
                <div className="action-chip">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-soft text-brand ring-1 ring-line">
                    <MapPin />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-muted">Address</span>
                    <span className="mt-0.5 block font-medium leading-6 text-ink">{site.address}</span>
                  </span>
                </div>

                <a href={`mailto:${site.email}`} className="action-chip">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-soft text-brand ring-1 ring-line">
                    <Mail />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-muted">Email</span>
                    <span className="mt-0.5 block break-all font-medium text-ink">{site.email}</span>
                  </span>
                </a>

                <div className="grid gap-3 sm:grid-cols-2">
                  {site.phones.map((p) => (
                    <a key={p.href} href={p.href} className="action-chip">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-soft text-brand ring-1 ring-line">
                        <Phone />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-muted">Phone</span>
                        <span className="mt-0.5 block whitespace-nowrap font-medium text-ink">{p.label}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={`mailto:${site.email}`} className="btn btn-primary">
                  Email Us <ArrowRight />
                </a>
                <a href={site.telegram} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <Send className="h-4 w-4" /> Reach Out on Telegram
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="h-full rounded-[2rem] border border-line bg-card p-3 sm:p-4">
              <iframe
                title="Map to Shalla Wellness Center, Platinum Plaza, Bole, Addis Ababa"
                src={site.map}
                className="h-80 w-full rounded-[1.5rem] border-0 sm:h-[420px] lg:h-full lg:min-h-[520px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FORM + TELEGRAM */}
      <section id="message" className="bg-soft px-5 py-20 sm:px-6 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-5 lg:gap-8">
          <Reveal direction="left" className="md:col-span-3">
            <div className="card h-full p-6 sm:p-10">
              <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
                Send an email request
              </h2>
              <p className="mt-3 leading-7">
                Use this option for appointment questions, partnership inquiries,
                or detailed messages.
              </p>
              <ContactForm />
            </div>
          </Reveal>

          <Reveal direction="right" className="md:col-span-2">
            <div className="relative isolate flex h-full flex-col justify-between overflow-hidden rounded-[2rem] bg-emerald-800 p-6 text-white sm:p-10">
              <div aria-hidden className="absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-lime-400/20 blur-3xl" />
              <div>
                <p className="section-label light">Faster option</p>
                <h2 className="mt-4 font-serif text-2xl font-semibold sm:text-3xl">Prefer direct chat?</h2>
                <p className="mt-4 leading-7 text-emerald-50/85">
                  Use Telegram if you want a faster, direct conversation with
                  the Shalla Wellness team.
                </p>
              </div>

              <a
                href={site.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light mt-10"
              >
                <Send className="h-4 w-4" /> Open Telegram
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
