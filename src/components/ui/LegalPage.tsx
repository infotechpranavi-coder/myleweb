import { PageHero } from "@/components/ui/PageHero";
import { InnerEnd } from "@/components/ui/SplitSection";

export function LegalPage({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <>
      <PageHero title={title} description={body} />
      <InnerEnd />
    </>
  );
}
