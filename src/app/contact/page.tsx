"use client";

import Reveal from "@/components/Reveal";

export default function ContactPage() {
  return (
    <main className="bg-white text-slate-800">
      <section className="px-6 py-24 text-center md:px-10 md:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal direction="up">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Contact Shalla Wellness
            </p>

            <h1 className="text-4xl font-bold text-slate-900 md:text-6xl">
              Visit our office or connect with our team directly.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              For appointments, partnerships, and general inquiries, you can
              contact us by email, phone, Telegram, or visit our office location.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="h-full rounded-[2rem] border border-emerald-100 bg-[#f4fbf7] p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-emerald-700">
                Office Information
              </h2>

              <div className="mt-8 space-y-6 text-slate-700">
                <div>
                  <p className="font-semibold text-slate-900">Address</p>
                  <p className="mt-1 leading-7">
                    Bole, Atlas, Platinum Plaza, 5th floor, House no. 386
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-slate-900">Email</p>
                  <p className="mt-1">Shallawell7@gmail.com</p>
                </div>

                <div>
                  <p className="font-semibold text-slate-900">Phone</p>
                  <p className="mt-1">+251 920 244 516 / +251 988 035 023</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:Shallawell7@gmail.com"
                  className="rounded-full bg-emerald-700 px-6 py-3 text-center font-medium text-white transition hover:bg-emerald-800"
                >
                  Email Us
                </a>

                <a
                  href="https://t.me/Shallawell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-emerald-700 px-6 py-3 text-center font-medium text-emerald-700 transition hover:bg-white"
                >
                  Reach Out on Telegram
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="rounded-[2rem] border border-emerald-100 bg-white p-4 shadow-sm">
              <iframe
                src="https://maps.google.com/maps?q=9.000318,38.779938&ll=9.000318,38.779938&z=16&output=embed"
                className="h-[520px] w-full rounded-[1.5rem] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f4fbf7] px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <Reveal direction="left">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-slate-900">
                Send an email request
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Use this option for appointment questions, partnership inquiries,
                or detailed messages.
              </p>

              <form className="mt-8 space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-gray-200 p-4 outline-none transition focus:border-emerald-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-gray-200 p-4 outline-none transition focus:border-emerald-500"
                />

                <textarea
                  rows={5}
                  placeholder="Write your message here"
                  className="w-full rounded-xl border border-gray-200 p-4 outline-none transition focus:border-emerald-500"
                />

                <button
                  type="submit"
                  className="rounded-full bg-emerald-700 px-7 py-3 font-medium text-white transition hover:bg-emerald-800"
                >
                  Send Message
                </button>
              </form>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="flex h-full flex-col justify-between rounded-[2rem] bg-emerald-800 p-8 text-white shadow-sm">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">
                  Faster option
                </p>

                <h2 className="mt-4 text-3xl font-bold">
                  Prefer direct chat?
                </h2>

                <p className="mt-4 leading-7 text-emerald-50">
                  Use Telegram if you want a faster, direct conversation with
                  the Shalla Wellness team.
                </p>
              </div>

              <a
                href="https://t.me/Shallawell"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 rounded-full bg-white px-7 py-3 text-center font-medium text-emerald-800 transition hover:bg-emerald-50"
              >
                Open Telegram
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}