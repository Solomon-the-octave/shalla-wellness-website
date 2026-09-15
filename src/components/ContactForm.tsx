"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { ArrowRight, Check } from "./Icons";

const topics = [
  "General inquiry",
  "Wellness Assessment",
  "Corporate Wellness Programs",
  "Health Education & Seminars",
  "Community & Specialized Programs",
  "Partnership",
];

/* If NEXT_PUBLIC_FORM_ENDPOINT is set (e.g. a Formspree form URL), messages
   are posted there and arrive in the inbox directly. Without it, the form
   opens the visitor's email app with everything already filled in, so a
   message is never silently lost. */
const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

type Status = "idle" | "sending" | "sent" | "opened" | "error";

export default function ContactForm() {
  const [topic, setTopic] = useState(topics[0]);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("topic") === "assessment") setTopic("Wellness Assessment");
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    if (endpoint) {
      setStatus("sending");
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error(String(res.status));
        form.reset();
        setTopic(topics[0]);
        setStatus("sent");
      } catch {
        setStatus("error");
      }
      return;
    }

    const body = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      ...(data.phone ? [`Phone: ${data.phone}`] : []),
      "",
      data.message,
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `${data.topic} — ${data.name}`
    )}&body=${encodeURIComponent(body)}`;
    setStatus("opened");
  }

  if (status === "sent") {
    return (
      <div className="mt-8 rounded-2xl border border-line bg-soft p-6 text-center">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-emerald-700 text-white">
          <Check className="h-6 w-6" />
        </span>
        <p className="mt-4 font-semibold text-ink">Thank you — your message has been sent.</p>
        <p className="mt-1 text-sm text-body">The Shalla Wellness team will get back to you soon.</p>
        <button type="button" onClick={() => setStatus("idle")} className="btn btn-outline mt-5">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="sr-only">Full Name</span>
          <input name="name" type="text" required autoComplete="name" placeholder="Full Name" className="field" />
        </label>
        <label className="block">
          <span className="sr-only">Email Address</span>
          <input name="email" type="email" required autoComplete="email" placeholder="Email Address" className="field" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="sr-only">Phone (optional)</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="Phone (optional)" className="field" />
        </label>
        <label className="block">
          <span className="sr-only">Topic</span>
          <select
            name="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="field appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2310b981' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
            }}
          >
            {topics.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className="sr-only">Message</span>
        <textarea name="message" rows={5} required placeholder="Write your message here" className="field resize-y" />
      </label>

      <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full disabled:opacity-60 sm:w-auto">
        {status === "sending" ? "Sending…" : "Send Message"} <ArrowRight />
      </button>

      <p aria-live="polite" className="text-sm text-body">
        {status === "opened" &&
          "Your email app should open with the message ready — just press send. If nothing opened, email us directly at " +
            site.email +
            "."}
        {status === "error" &&
          `Sorry, the message could not be sent. Please email ${site.email} or reach us on Telegram.`}
      </p>
    </form>
  );
}
