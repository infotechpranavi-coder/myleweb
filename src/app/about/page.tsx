import { PageHero } from "@/components/ui/PageHero";
import { InnerEnd, SplitSection } from "@/components/ui/SplitSection";
import { stats } from "@/data/site";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={"Who\nwe are."}
        description="AUTOPART makes the independent aftermarket better – with strong parts, smart data and a partnership culture engineered in Hamburg."
        image="/images/pages/about.jpg"
      />
      <section className="grid border-b border-line/15 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="border-b border-line/15 px-6 py-10 md:border-b-0 md:border-r md:last:border-r-0">
            <p className="font-display text-5xl font-black italic text-navy md:text-6xl">
              {stat.value}
            </p>
            <p className="mt-3 text-sm uppercase tracking-[0.14em] text-muted">
              {stat.label}
            </p>
          </div>
        ))}
      </section>
      <SplitSection
        title="A history of better parts"
        body="For more than 65 years we have worked the way our founders did: partnership first. From a Hamburg specialist to an international manufacturer, the goal has never changed – parts that make workshops stronger."
        image="/images/pages/factory.jpg"
        imageAlt="AUTOPART company history and manufacturing"
      />
      <SplitSection
        title="Manufacturing with intent"
        body="Development, specification and quality release happen under one roof. That is how AUTOPART stays a manufacturer – responsible for every part that carries our name."
        image="/images/pages/quality.jpg"
        imageAlt="AUTOPART manufacturing"
        reverse
      />
      <SplitSection
        title="Quality without compromise"
        body="Materials, coatings, kinematics and data: we treat every dimension as part of the product. Better parts are the result of better questions."
        image="/images/hero/workshop.jpg"
        imageAlt="Quality-focused automotive engineering"
        href="/quality"
        cta="Explore quality"
      />
      <InnerEnd />
    </>
  );
}
