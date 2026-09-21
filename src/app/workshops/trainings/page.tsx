import { ArrowButton } from "@/components/ArrowButton";
import { InfoBanner } from "@/components/home/InfoBanner";
import { InnerEnd } from "@/components/ui/SplitSection";
import { SmartImage } from "@/components/ui/SmartImage";

const courses = [
  {
    duration: "2 hours",
    title: "Vehicle check-in dialogue",
    text: "Increase the efficiency of your customer communication and improve service at your workshop.",
  },
  {
    duration: "4-8 hours",
    title: "Suspension and assistance systems",
    text: "Bring your workshop up to date with the latest technology standards for measurement and calibration.",
  },
  {
    duration: "2-4 hours",
    title: "Steering & suspension know-how",
    text: "Maximise driving comfort and safety with shock absorber and strut training.",
  },
  {
    duration: "2-3 hours",
    title: "Braking system components",
    text: "Optimise brake component maintenance with manufacturer expertise.",
  },
  {
    duration: "2 hours",
    title: "Damping parts",
    text: "Understand the function and maintenance of shock absorbers and struts.",
  },
  {
    duration: "2-3 hours",
    title: "Cooling and belt drive",
    text: "Optimise your maintenance process with professional cooling and belt-drive training.",
  },
  {
    duration: "2-8 hours",
    title: "Automatic transmission oil change",
    text: "Maximise performance and service life of automatic transmissions.",
  },
  {
    duration: "2 hours",
    title: "Drive components",
    text: "Increase expertise in suspension joints and drive shafts.",
  },
  {
    duration: "2 hours",
    title: "Electronics and sensors",
    text: "Optimise safety and efficiency with electronics and sensor training.",
  },
  {
    duration: "3 days",
    title: "EV Experience Center",
    text: "Prepare your workshop for electric vehicles and high-voltage maintenance.",
  },
];

export default function TrainingsPage() {
  return (
    <>
      <section className="bg-off-white">
        <div className="mx-auto max-w-[1680px] px-5 pb-8 pt-12 lg:px-10 lg:pb-10 lg:pt-16 xl:px-14">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">
            Workshops
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.2rem,5vw,4.6rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
            MEYLE Training
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-text/75">
            Practical knowledge that makes a difference – on-site, online or at
            our training facilities.
          </p>
        </div>
        <div className="relative h-14 bg-deep-navy lg:h-16">
          <div
            aria-hidden
            className="absolute left-0 top-0 h-full w-10 -skew-x-12 bg-turquoise lg:w-14"
          />
        </div>
      </section>

      <section className="relative aspect-[21/8] min-h-[240px] w-full overflow-hidden bg-deep-navy md:min-h-[360px] lg:min-h-[445px]">
        <SmartImage
          src="/images/meyle/workshops/training.webp"
          alt="Three MEYLE trainers stand in front of their training van and smile into the camera"
          fill
          loading="eager"
          fetchPriority="high"
          className="object-cover object-center"
          sizes="100vw"
        />
      </section>

      <InfoBanner />

      <section className="border-b border-line/15 bg-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              Practical knowledge that makes a difference
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-text/75">
              Developed by automotive experts, master mechanics and technicians,
              MEYLE training offers practical knowledge, clever repair solutions
              and real insights into vehicle technology. In German, English or
              Spanish.
            </p>
            <ul className="mt-8 max-w-xl space-y-3 text-[15px] leading-7 text-text/80">
              <li>
                <strong className="text-deep-navy">From professionals for professionals:</strong>{" "}
                training courses with real workshop professionals.
              </li>
              <li>
                <strong className="text-deep-navy">Hands-on instead of theory:</strong>{" "}
                practical content, directly applicable.
              </li>
              <li>
                <strong className="text-deep-navy">State-of-the-art technology:</strong>{" "}
                so that your workshop is always up to date.
              </li>
            </ul>
            <div className="mt-10">
              <ArrowButton href="/contact">Request training</ArrowButton>
            </div>
          </div>
          <div className="relative min-h-80 aspect-[4/3] lg:aspect-auto lg:min-h-[560px]">
            <SmartImage
              src="/images/meyle/workshops/training.webp"
              alt="MEYLE technical training"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-line/15 px-5 py-16 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1680px]">
          <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase text-deep-navy">
            Training courses
          </h2>
          <div className="mt-10 grid border border-line/15 md:grid-cols-2">
            {courses.map((course) => (
              <article
                key={course.title}
                className="border-b border-line/15 p-6 md:border-r md:even:border-r-0"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy">
                  {course.duration}
                </p>
                <h3 className="mt-3 font-display text-2xl font-black italic uppercase leading-tight text-deep-navy">
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
