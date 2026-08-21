import { ArrowButton } from "@/components/ArrowButton";
import { InfoBanner } from "@/components/home/InfoBanner";
import { PageHero } from "@/components/ui/PageHero";
import { InnerEnd, SplitSection } from "@/components/ui/SplitSection";

const courses = [
  { duration: "2 hours", title: "Vehicle check-in dialogue", text: "Increase the efficiency of your customer communication and improve service at your workshop." },
  { duration: "4-8 hours", title: "Suspension and assistance systems", text: "Bring your workshop up to date with the latest technology standards for measurement and calibration." },
  { duration: "2-4 hours", title: "Steering & suspension know-how", text: "Maximise driving comfort and safety with shock absorber and strut training." },
  { duration: "2-3 hours", title: "Braking system components", text: "Optimise brake component maintenance with manufacturer expertise." },
  { duration: "2 hours", title: "Damping parts", text: "Understand the function and maintenance of shock absorbers and struts." },
  { duration: "2-3 hours", title: "Cooling and belt drive", text: "Optimise your maintenance process with professional cooling and belt-drive training." },
  { duration: "2-8 hours", title: "Automatic transmission oil change", text: "Maximise performance and service life of automatic transmissions." },
  { duration: "2 hours", title: "Drive components", text: "Increase expertise in suspension joints and drive shafts." },
  { duration: "2 hours", title: "Electronics and sensors", text: "Optimise safety and efficiency with electronics and sensor training." },
  { duration: "3 days", title: "EV Experience Center", text: "Prepare your workshop for electric vehicles and high-voltage maintenance." },
];

export default function TrainingsPage() {
  return (
    <>
      <PageHero
        eyebrow="Workshops"
        title={"AUTOPART\nTraining"}
        description="Practical knowledge that makes a difference – on-site, online or at our training facilities."
        image="/images/pages/training.jpg"
      />
      <InfoBanner />
      <SplitSection
        title="Practical knowledge that makes a difference"
        body="Developed by automotive experts, master mechanics and technicians, AUTOPART training offers practical knowledge, clever repair solutions and real insights into vehicle technology. In German, English or Spanish."
        image="/images/hero/workshop.jpg"
        imageAlt="AUTOPART technical training"
        href="/contact"
        cta="Request training"
      />
      <section className="px-5 py-16 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1680px]">
          <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase">
            Training courses
          </h2>
          <div className="mt-10 grid border border-line/15 md:grid-cols-2">
            {courses.map((course) => (
              <article key={course.title} className="border-b border-line/15 p-6 md:border-r md:even:border-r-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy">
                  {course.duration}
                </p>
                <h3 className="mt-3 font-display text-2xl font-black italic uppercase leading-tight">
                  {course.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{course.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-12">
            <ArrowButton href="/workshops">Advantages for workshops</ArrowButton>
          </div>
        </div>
      </section>
      <InnerEnd />
    </>
  );
}
