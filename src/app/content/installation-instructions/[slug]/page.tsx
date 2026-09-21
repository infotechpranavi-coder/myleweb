import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowButton } from "@/components/ArrowButton";
import { InnerEnd } from "@/components/ui/SplitSection";
import { SmartImage } from "@/components/ui/SmartImage";
import { installationInstructions } from "@/data/installationInstructions";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return installationInstructions.map((item) => ({ slug: item.slug }));
}

export default async function InstallationInstructionDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const item = installationInstructions.find((entry) => entry.slug === slug);
  if (!item) notFound();

  return (
    <>
      <section className="bg-off-white">
        <div className="mx-auto max-w-[1680px] px-5 pb-10 pt-12 lg:px-10 lg:pb-12 lg:pt-16 xl:px-14">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">
            Installation instruction
          </p>
          <p className="mt-3 text-[13px] text-muted">{item.date}</p>
          <h1 className="mt-4 max-w-4xl font-sans text-[clamp(1.8rem,3.6vw,3rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-deep-navy">
            Installation instruction for {item.title}
          </h1>
        </div>
      </section>

      <section className="border-t border-line/15 px-5 py-14 lg:px-10 xl:px-14">
        <div className="mx-auto grid max-w-[1680px] gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h2 className="font-display text-2xl font-black italic uppercase text-deep-navy">
              Installation instruction
            </h2>
            <p className="mt-6 text-[15px] leading-7 text-text/80">
              <strong className="text-deep-navy">Product:</strong> {item.title}
            </p>
            <p className="mt-4 text-[15px] leading-7 text-text/75">
              {item.note ??
                "Installation must only be carried out by trained professionals. Follow the vehicle manufacturer's instructions carefully."}
            </p>
            {item.pdfLabel ? (
              <p className="mt-8 text-[15px] font-medium text-navy underline underline-offset-4">
                {item.pdfLabel}
              </p>
            ) : null}
            <div className="mt-10">
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-deep-navy">
                Item numbers
                {item.itemCount != null ? ` (${item.itemCount} Numbers)` : ""}
              </p>
              {item.itemNumbers?.length ? (
                <p className="mt-3 text-[14px] leading-7 text-muted">
                  {item.itemNumbers.join(", ")}
                  {item.itemCount != null &&
                  item.itemCount > item.itemNumbers.length
                    ? ", …"
                    : ""}
                </p>
              ) : (
                <p className="mt-3 text-[14px] leading-7 text-muted">
                  See the full instruction PDF for the complete item number list.
                </p>
              )}
            </div>
            <div className="mt-12">
              <ArrowButton href="/content/installation-instructions">
                Back to installation instructions
              </ArrowButton>
            </div>
          </div>
          <div className="relative min-h-80 aspect-[4/3] overflow-hidden bg-deep-navy lg:min-h-[420px]">
            <SmartImage
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              sizes="45vw"
            />
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-[1680px]">
          <Link
            href="/content"
            className="text-[12px] font-semibold uppercase tracking-[0.14em] text-muted hover:text-navy"
          >
            Discover all content →
          </Link>
        </div>
      </section>

      <InnerEnd />
    </>
  );
}
