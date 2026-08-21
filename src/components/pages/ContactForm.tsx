"use client";

import { useMemo, useState } from "react";
import { ArrowButton } from "@/components/ArrowButton";
import { contactTopics } from "@/data/site";

export function ContactForm() {
  const [topic, setTopic] = useState<(typeof contactTopics)[number]["id"] | null>(null);
  const [sent, setSent] = useState(false);
  const selected = useMemo(
    () => contactTopics.find((item) => item.id === topic),
    [topic],
  );

  if (sent) {
    return (
      <div className="border border-line/15 bg-off-white px-6 py-16 text-center">
        <p className="eyebrow text-navy">Thank you</p>
        <h2 className="mt-4 font-display text-4xl font-black italic uppercase">
          We have received your message.
        </h2>
        <p className="mt-4 text-muted">Our team will get back to you personally.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid border border-line/15 sm:grid-cols-2 lg:grid-cols-4">
        {contactTopics.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setTopic(item.id)}
            className={`min-h-[120px] border-b border-line/15 px-5 py-6 text-left font-display text-2xl font-black italic uppercase leading-tight sm:border-r sm:odd:border-r lg:[&:nth-child(4n)]:border-r-0 ${
              topic === item.id ? "bg-navy text-white" : "bg-white hover:bg-off-white"
            }`}
          >
            {item.title}
            <span className={`mt-2 block font-sans text-[12px] font-medium normal-case tracking-normal ${
              topic === item.id ? "text-white/70" : "text-muted"
            }`}>
              {item.subtitle}
            </span>
          </button>
        ))}
      </div>

      {selected ? (
        <form
          className="mt-10 grid gap-5 border border-line/15 p-6 md:grid-cols-2 md:p-10"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >
          <p className="eyebrow md:col-span-2 text-navy">{selected.title}</p>
          <label className="block text-xs font-semibold uppercase tracking-[0.14em]">
            First name
            <input required name="firstName" className="mt-2 h-12 w-full border border-line/20 bg-white px-3" />
          </label>
          <label className="block text-xs font-semibold uppercase tracking-[0.14em]">
            Last name
            <input required name="lastName" className="mt-2 h-12 w-full border border-line/20 bg-white px-3" />
          </label>
          <label className="block text-xs font-semibold uppercase tracking-[0.14em]">
            Email
            <input required type="email" name="email" className="mt-2 h-12 w-full border border-line/20 bg-white px-3" />
          </label>
          <label className="block text-xs font-semibold uppercase tracking-[0.14em]">
            Company
            <input name="company" className="mt-2 h-12 w-full border border-line/20 bg-white px-3" />
          </label>
          <label className="block text-xs font-semibold uppercase tracking-[0.14em] md:col-span-2">
            Message
            <textarea required name="message" rows={5} className="mt-2 w-full border border-line/20 bg-white px-3 py-3" />
          </label>
          <div className="md:col-span-2">
            <button type="submit" className="group inline-flex h-14 items-stretch text-[13px] font-semibold uppercase tracking-[0.14em]">
              <span className="flex items-center bg-turquoise px-7 text-deep-navy">Send message</span>
              <span className="flex w-14 items-center justify-center border-l border-deep-navy/10 bg-turquoise text-deep-navy">
                →
              </span>
            </button>
          </div>
        </form>
      ) : (
        <p className="mt-8 text-muted">Select a topic to open the appropriate form.</p>
      )}

      <div className="mt-10">
        <ArrowButton href="/parts-catalog" variant="navy">
          Parts catalog
        </ArrowButton>
      </div>
    </div>
  );
}
