import { ArrowButton } from "@/components/ArrowButton";
import { NewsCard } from "@/components/NewsCard";
import { SmartImage } from "@/components/ui/SmartImage";
import { InnerEnd } from "@/components/ui/SplitSection";
import {
  newsArticles,
  type NewsBodyBlock,
  type NewsItem,
} from "@/data/news";

function ArticleBlock({ block }: { block: NewsBodyBlock }) {
  switch (block.type) {
    case "heading": {
      const Tag = block.level === 2 ? "h2" : "h3";
      const className =
        block.level === 2
          ? "mt-2 font-sans text-[clamp(1.5rem,2.8vw,2rem)] font-semibold leading-snug tracking-[-0.02em] text-deep-navy"
          : "mt-10 font-sans text-[clamp(1.25rem,2vw,1.5rem)] font-semibold leading-snug tracking-[-0.01em] text-deep-navy";
      return <Tag className={className}>{block.text}</Tag>;
    }
    case "paragraph":
      return (
        <p className="mt-5 font-sans text-[16px] leading-8 text-text/80 md:text-[17px]">
          {block.text}
        </p>
      );
    case "emphasis":
      return (
        <p className="mt-5 font-sans text-[16px] font-medium italic leading-8 text-text/85 md:text-[17px]">
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul className="mt-5 list-disc space-y-3 pl-5 font-sans text-[16px] leading-8 text-text/80 md:text-[17px]">
          {block.items.map((item) => (
            <li key={item.slice(0, 64)}>{item}</li>
          ))}
        </ul>
      );
    case "image":
      return (
        <figure className="my-12">
          <div className="relative aspect-[16/9] overflow-hidden bg-off-white">
            <SmartImage
              src={block.src}
              alt={block.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 960px, 100vw"
            />
          </div>
          <figcaption className="mt-3 font-sans text-[13px] leading-5 text-muted">
            {block.alt}
          </figcaption>
        </figure>
      );
    case "sources":
      return (
        <div className="mt-12 border-t border-line/15 pt-8">
          <p className="font-sans text-[13px] font-semibold text-deep-navy">
            <em>{block.title ?? "List of sources"}</em>
          </p>
          <div className="mt-4 space-y-4 font-sans text-[14px] italic leading-7 text-muted">
            {block.items.map((item, index) => (
              <p key={item.text.slice(0, 48)}>
                <span className="mr-1 not-italic">
                  {"*".repeat(index + 1)}
                </span>
                {item.text}
                {item.url ? (
                  <>
                    <br />
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all not-italic underline underline-offset-2 hover:text-navy"
                    >
                      {item.url}
                    </a>
                  </>
                ) : null}
              </p>
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
}

function splitIntro(body: NewsBodyBlock[]) {
  const imageIndex = body.findIndex((block) => block.type === "image");
  if (imageIndex !== -1) {
    return {
      intro: body.slice(0, imageIndex),
      heroImage: body[imageIndex] as Extract<NewsBodyBlock, { type: "image" }>,
      rest: body.slice(imageIndex + 1),
    };
  }

  // No mid-article image: keep lead heading + first two paragraphs beside the feature photo
  let paragraphs = 0;
  let cut = Math.min(body.length, 3);
  for (let i = 0; i < body.length; i++) {
    if (body[i].type === "paragraph") {
      paragraphs += 1;
      if (paragraphs >= 2) {
        cut = i + 1;
        break;
      }
    }
  }

  return {
    intro: body.slice(0, cut),
    heroImage: null as null | Extract<NewsBodyBlock, { type: "image" }>,
    rest: body.slice(cut),
  };
}

function blockKey(block: NewsBodyBlock, index: number) {
  if ("text" in block) return `${block.type}-${index}-${block.text.slice(0, 32)}`;
  if ("src" in block) return `${block.type}-${index}-${block.src}`;
  if ("title" in block) return `${block.type}-${index}-${block.title}`;
  return `${block.type}-${index}`;
}

export function NewsArticlePage({ article }: { article: NewsItem }) {
  const related = newsArticles
    .filter((item) => item.id !== article.id)
    .slice(0, 3);
  const tags = article.tags?.length ? article.tags : [article.category];
  const { intro, heroImage, rest } = splitIntro(article.body);
  const featureImage = heroImage ?? {
    type: "image" as const,
    src: article.image,
    alt: article.title,
  };

  return (
    <>
      <header className="bg-off-white">
        <div className="mx-auto max-w-[1680px] px-5 pb-10 pt-14 lg:px-10 lg:pb-14 lg:pt-20 xl:px-14">
          <h1 className="max-w-[20ch] font-sans text-[clamp(2.1rem,4.2vw,3.6rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-deep-navy">
            {article.title}
          </h1>
        </div>
        <div className="relative h-10 overflow-hidden lg:h-12">
          <div
            aria-hidden
            className="absolute bottom-0 left-0 h-full w-[4.5%] bg-turquoise"
            style={{ clipPath: "polygon(0 0, 100% 0, 55% 100%, 0 100%)" }}
          />
          <div
            aria-hidden
            className="absolute bottom-0 left-[2.8%] h-full w-full bg-deep-navy"
            style={{ clipPath: "polygon(3% 0, 100% 0, 100% 100%, 0 100%)" }}
          />
        </div>
        <div className="border-b border-line/10 bg-[#eceae6]">
          <div className="mx-auto flex max-w-[1680px] flex-wrap items-center gap-x-6 gap-y-2 px-5 py-4 lg:px-10 xl:px-14">
            <p className="font-sans text-[13px] font-medium text-deep-navy">
              {article.date}
            </p>
            <span className="hidden h-4 w-px bg-line/25 sm:block" aria-hidden />
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-[12px] font-semibold uppercase tracking-[0.06em] text-deep-navy"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* MEYLE-style intro: text left, image right */}
      <section className="border-b border-line/10 bg-off-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="flex flex-col justify-center px-5 py-12 lg:px-10 lg:py-16 xl:px-14">
            {intro.map((block, index) => (
              <ArticleBlock key={blockKey(block, index)} block={block} />
            ))}
          </div>
          <div className="relative min-h-[280px] lg:min-h-[520px]">
            <SmartImage
              src={featureImage.src}
              alt={featureImage.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {rest.length || article.cta ? (
        <article className="bg-white px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
          <div className="mx-auto max-w-[960px]">
            {rest.map((block, index) => (
              <ArticleBlock key={blockKey(block, index + 100)} block={block} />
            ))}
            {article.cta ? (
              <div className="mt-12">
                <ArrowButton href={article.cta.href}>
                  {article.cta.label}
                </ArrowButton>
              </div>
            ) : null}
          </div>
        </article>
      ) : null}

      {related.length ? (
        <section className="border-t border-line/15 bg-off-white px-5 py-16 lg:px-10 xl:px-14">
          <div className="mx-auto max-w-[1680px]">
            <h2 className="font-sans text-[clamp(1.6rem,3vw,2.2rem)] font-semibold tracking-[-0.02em] text-deep-navy">
              More insights
            </h2>
            <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {related.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
      <InnerEnd />
    </>
  );
}
