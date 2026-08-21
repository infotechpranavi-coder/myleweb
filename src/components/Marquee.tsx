function Track({
  outlined = false,
  phrase,
}: {
  outlined?: boolean;
  phrase: string;
}) {
  const line = Array.from({ length: 10 }, () => phrase).join("");
  return (
    <div
      className={`flex w-max whitespace-nowrap ${
        outlined
          ? "animate-[marquee-reverse_36s_linear_infinite]"
          : "animate-[marquee_32s_linear_infinite]"
      }`}
    >
      <span
        className={`font-display pr-[0.25em] text-[clamp(2.1rem,4.4vw,3.75rem)] font-black italic uppercase leading-[0.82] tracking-[-0.04em] ${
          outlined ? "marquee-outline" : "text-white"
        }`}
      >
        {line}
      </span>
      <span
        aria-hidden
        className={`font-display pr-[0.25em] text-[clamp(2.1rem,4.4vw,3.75rem)] font-black italic uppercase leading-[0.82] tracking-[-0.04em] ${
          outlined ? "marquee-outline" : "text-white"
        }`}
      >
        {line}
      </span>
    </div>
  );
}

export function Marquee({
  phrase = "DRIVING INNOVATION. ",
}: {
  phrase?: string;
}) {
  return (
    <section className="overflow-hidden bg-navy py-3 md:py-4">
      <div className="flex overflow-hidden">
        <Track phrase={phrase} />
      </div>
      <div className="-mt-1 flex overflow-hidden">
        <Track outlined phrase={phrase} />
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}

export function MarqueeText() {
  return <Marquee />;
}
