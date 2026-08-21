import { ContactForm } from "@/components/pages/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { InnerEnd } from "@/components/ui/SplitSection";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={"How can\nwe help you?"}
        description="Select a topic. Assembly, product questions, careers, press, partnerships, purchase of parts or claims – we will route you to the right form."
      />
      <section className="px-5 py-16 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1680px]">
          <ContactForm />
        </div>
      </section>
      <InnerEnd />
    </>
  );
}
