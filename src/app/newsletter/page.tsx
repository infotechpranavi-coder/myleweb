"use client";

import { useState } from "react";
import Link from "next/link";
import { Marquee } from "@/components/Marquee";
import { InnerEnd } from "@/components/ui/SplitSection";
import { cn } from "@/lib/cn";

const benefits = [
  {
    title: "Technical tips",
    body: "Technical information and expert tips from MEYLE trainers and engineers.",
  },
  {
    title: "Industry news",
    body: "Current developments in the automotive aftermarket, compressed and clear.",
  },
  {
    title: "Product world",
    body: "Insights into the MEYLE product world – launches, upgrades and KITs.",
  },
  {
    title: "Practice-ready",
    body: "Practical application examples you can use in the workshop tomorrow.",
  },
];

const backgrounds = ["Workshop", "Wholesaler", "Private"] as const;

const fieldClass =
  "h-12 w-full border-0 border-b border-deep-navy/20 bg-transparent px-0 py-3 text-[15px] text-deep-navy outline-none transition-[border-color] placeholder:text-muted/80 focus:border-turquoise";

export default function NewsletterPage() {
  const [sent, setSent] = useState(false);
  const [background, setBackground] = useState<
    (typeof backgrounds)[number] | null
  >(null);
  const [error, setError] = useState<string | null>(null);
  const [emailFocus, setEmailFocus] = useState(false);

  return (
    <>
      {/* Immersive hero */}
      <section className="relative overflow-hidden bg-deep-navy text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 60% at 85% 20%, rgba(0,230,195,0.35), transparent 55%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(255,255,255,0.08), transparent 50%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-turquoise/20"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-8 top-1/2 h-[280px] w-[280px] -translate-y-1/2 rounded-full border border-turquoise/30"
        />

        <div className="relative mx-auto grid max-w-[1680px] gap-12 px-5 pb-16 pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16 lg:px-10 lg:pb-20 lg:pt-20 xl:px-14">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-turquoise">
              Always informed
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.4rem,5.5vw,4.8rem)] font-black italic uppercase leading-[0.92] tracking-[-0.02em]">
              Subscribe to the MEYLE newsletter
            </h1>
            <p className="mt-6 max-w-xl text-[16px] leading-7 text-white/75 md:text-[17px]">
              Secure the benefits. Fill up on knowledge – quickly, compactly and
              clearly, straight to your mailbox.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {benefits.map((item, index) => (
              <div
                key={item.title}
                className="border border-white/15 bg-white/5 p-4 backdrop-blur-sm transition-colors hover:border-turquoise/40 hover:bg-white/10 sm:p-5"
                style={{
                  animationDelay: `${index * 80}ms`,
                }}
              >
                <span className="font-display text-[22px] font-black italic text-turquoise">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-[14px] font-semibold text-white sm:text-[15px]">
                  {item.title}
                </p>
                <p className="mt-2 hidden text-[13px] leading-5 text-white/60 sm:block">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-3 bg-turquoise" />
      </section>

      {/* Form band */}
      <section className="relative border-b border-line/15 bg-off-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-28deg, transparent, transparent 72px, rgba(5,5,61,0.04) 72px, rgba(5,5,61,0.04) 73px)",
          }}
        />

        <div className="relative mx-auto grid max-w-[1680px] gap-10 px-5 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-10 lg:py-20 xl:px-14">
          <div className="lg:pt-4">
            <p className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              Fill up on knowledge!
            </p>
            <p className="mt-5 max-w-md text-[15px] leading-7 text-text/70 md:text-[16px]">
              With the MEYLE newsletter, you receive all important information
              directly in your mailbox – product news, workshop tips and industry
              updates.
            </p>
            <ul className="mt-10 space-y-0 border-t border-deep-navy/15">
              {benefits.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-4 border-b border-deep-navy/15 py-4"
                >
                  <span
                    aria-hidden
                    className="mt-1 h-5 w-2 shrink-0 -skew-x-12 bg-turquoise"
                  />
                  <span className="text-[15px] leading-6 text-deep-navy">
                    {item.body}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-px bg-linear-to-br from-turquoise/40 via-deep-navy/10 to-transparent opacity-80" />
            <div className="relative border border-deep-navy/10 bg-white p-6 shadow-[0_24px_80px_rgba(5,5,61,0.08)] sm:p-8 lg:p-10">
              {sent ? (
                <div className="py-10 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center bg-turquoise text-deep-navy">
                    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden>
                      <path
                        d="M5 12.5l5 5L19 7"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.18em] text-navy">
                    Thank you
                  </p>
                  <h2 className="mt-3 font-display text-[clamp(1.8rem,3vw,2.8rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
                    You are registered.
                  </h2>
                  <p className="mx-auto mt-4 max-w-sm text-[15px] leading-7 text-muted">
                    Welcome to MEYLE insights. The next newsletter is on its way
                    to your inbox.
                  </p>
                </div>
              ) : (
                <form
                  className="space-y-7"
                  onSubmit={(event) => {
                    event.preventDefault();
                    if (!background) {
                      setError("Please indicate your background.");
                      return;
                    }
                    setError(null);
                    setSent(true);
                  }}
                >
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">
                      Sign up
                    </p>
                    <p className="mt-2 text-[20px] font-semibold tracking-[-0.02em] text-deep-navy">
                      Create your newsletter profile
                    </p>
                  </div>

                  <label className="block">
                    <span
                      className={cn(
                        "text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors",
                        emailFocus ? "text-turquoise" : "text-muted",
                      )}
                    >
                      E-mail*
                    </span>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="name@company.com"
                      className={fieldClass}
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                    />
                  </label>

                  <label className="block">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                      Salutation
                    </span>
                    <select
                      name="salutation"
                      defaultValue=""
                      className={cn(fieldClass, "mt-0 appearance-none")}
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="mrs">Mrs</option>
                      <option value="mr">Mr</option>
                      <option value="neutral">Neutral Salutation</option>
                    </select>
                  </label>

                  <div className="grid gap-7 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                        First name
                      </span>
                      <input
                        name="firstName"
                        placeholder="First name"
                        className={fieldClass}
                      />
                    </label>
                    <label className="block">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                        Surname
                      </span>
                      <input
                        name="surname"
                        placeholder="Surname"
                        className={fieldClass}
                      />
                    </label>
                  </div>

                  <div className="grid gap-7 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                        Company
                      </span>
                      <input
                        name="company"
                        placeholder="Company"
                        className={fieldClass}
                      />
                    </label>
                    <label className="block">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                        Country
                      </span>
                      <input
                        name="country"
                        placeholder="Country"
                        className={fieldClass}
                      />
                    </label>
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                      Your background*
                    </p>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {backgrounds.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => {
                            setBackground(item);
                            setError(null);
                          }}
                          className={cn(
                            "relative overflow-hidden px-2 py-3.5 text-[11px] font-semibold uppercase tracking-[0.1em] transition-all sm:text-[12px]",
                            background === item
                              ? "bg-deep-navy text-white"
                              : "bg-off-white text-deep-navy hover:bg-deep-navy/5",
                          )}
                        >
                          {background === item ? (
                            <span
                              aria-hidden
                              className="absolute bottom-0 left-0 h-0.5 w-full bg-turquoise"
                            />
                          ) : null}
                          {item}
                        </button>
                      ))}
                    </div>
                    {error ? (
                      <p className="mt-3 text-[13px] text-red-700">{error}</p>
                    ) : null}
                  </div>

                  <label className="flex items-start gap-3 text-[13px] leading-6 text-text/70">
                    <input
                      required
                      type="checkbox"
                      name="privacy"
                      className="mt-1 h-4 w-4 shrink-0 accent-deep-navy"
                    />
                    <span>
                      By submitting this form, I agree to the{" "}
                      <Link
                        href="/data-protection"
                        className="font-medium text-deep-navy underline decoration-turquoise/60 underline-offset-4 transition-colors hover:decoration-turquoise"
                      >
                        privacy policy
                      </Link>
                      .
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="group relative inline-flex h-14 w-full items-center justify-center overflow-hidden bg-deep-navy text-[13px] font-semibold uppercase tracking-[0.16em] text-white transition-transform hover:scale-[1.01] active:scale-[0.99] sm:w-auto sm:min-w-[220px]"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-y-0 left-0 w-1.5 bg-turquoise transition-all group-hover:w-full group-hover:opacity-20"
                    />
                    <span className="relative flex items-center gap-3">
                      Sign up
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Marquee phrase="MEYLE Newsletter. " />
      <InnerEnd />
    </>
  );
}
