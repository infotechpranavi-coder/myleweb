"use client";

import { useState } from "react";

export default function NewsletterPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="bg-deep-navy px-5 py-20 text-white lg:px-10 xl:px-14">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow text-turquoise">AUTOPART Newsletter</p>
          <h1 className="hero-title mt-4 text-[clamp(2.8rem,6vw,5.5rem)]">
            Always well informed
          </h1>
          {sent ? (
            <p className="mt-8 text-lg text-white/75">You are registered. Welcome to AUTOPART insights.</p>
          ) : (
            <form
              className="mt-10 grid gap-4"
              onSubmit={(event) => {
                event.preventDefault();
                setSent(true);
              }}
            >
              <input required type="email" placeholder="Email address" className="h-14 border border-white/20 bg-transparent px-4" />
              <label className="flex items-start gap-3 text-sm text-white/70">
                <input required type="checkbox" className="mt-1" />
                I agree to receive the AUTOPART newsletter and have read the data protection information.
              </label>
              <button className="h-14 bg-turquoise px-8 text-sm font-semibold uppercase tracking-[0.14em] text-deep-navy">
                Register now →
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
