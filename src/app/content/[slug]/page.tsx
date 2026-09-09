import { notFound } from "next/navigation";
import { NewsArticlePage } from "@/components/pages/NewsArticlePage";
import { getNewsArticle, newsArticles } from "@/data/news";

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getNewsArticle(slug);
  if (!article) return { title: "News & Insights" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getNewsArticle(slug);
  if (!article) notFound();
  return <NewsArticlePage article={article} />;
}
