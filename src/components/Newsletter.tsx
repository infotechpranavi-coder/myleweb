import { ArrowButton } from "@/components/ArrowButton";

const points = [
  "Technical advice from the professionals",
  "Product updates & innovations",
  "Insights behind the scenes",
];

export function Newsletter() {
  return (
    <section className="bg-deep-navy text-white">
      <div className="mx-auto grid max-w-[1680px] gap-10 px-5 py-12 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-16 xl:px-14">
        <div>
          <p className="eyebrow text-turquoise">AUTOPART Newsletter</p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,4.8rem)] font-black italic uppercase leading-[0.92]">
            Always well informed
          </h2>
          <div className="mt-8">
            <ArrowButton href="/newsletter">Register now</ArrowButton>
          </div>
        </div>
        <ul className="space-y-4 border-t border-white/15 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3 text-lg">
              <span className="mt-2 h-4 w-[3px] -skew-x-[18deg] bg-turquoise" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
