import { ArrowButton } from "@/components/ArrowButton";
import { InfoBanner } from "@/components/home/InfoBanner";
import { PageHero } from "@/components/ui/PageHero";
import { InnerEnd, SplitSection } from "@/components/ui/SplitSection";

const process = [
  { step: "01", title: "Analysis", text: "Identification of parts that are prone to failure." },
  { step: "02", title: "Technical specification & optimization", text: "Definition of technical specifications, requirements and improvements." },
  { step: "03", title: "Innovative product development", text: "Development of line parts: AUTOPART ORIGINAL, PD or HD." },
  { step: "04", title: "Prototyping & tests", text: "Production of a prototype and testing and evaluation." },
  { step: "05", title: "Highest quality standards", text: "Quality inspection to our own standards." },
  { step: "06", title: "Series production", text: "Start of series production." },
  { step: "07", title: "Go-to-market", text: "Market launch of parts in AUTOPART ORIGINAL, PD or HD." },
];

export default function ProductDevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality"
        title={"Product\ndevelopment"}
        description="This is where progress is made – part by part."
        image="/images/pages/quality.jpg"
      />
      <InfoBanner />
      <SplitSection
        title="Better parts, better data, better solutions"
        body="For us, everything revolves around better parts, product data and solutions with which we support our customers in the independent aftermarket. AUTOPART products are developed strictly in accordance with the requirements and specifications of our engineers, accompanied and tested during the production process."
        image="/images/pages/factory.jpg"
        imageAlt="AUTOPART product development"
        href="/contact"
        cta="Contact us"
      />
      <section className="px-5 py-16 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1680px]">
          <p className="eyebrow text-muted">Product development process</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.6rem)] font-black italic uppercase">
            01 – 07
          </h2>
          <div className="mt-10 grid border border-line/15 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <article key={item.step} className="border-b border-line/15 p-6 md:border-r">
                <p className="text-xs tracking-[0.16em] text-muted">{item.step} – 07</p>
                <h3 className="mt-4 font-display text-2xl font-black italic uppercase leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-12">
            <ArrowButton href="/quality">All quality topics</ArrowButton>
          </div>
        </div>
      </section>
      <InnerEnd />
    </>
  );
}
