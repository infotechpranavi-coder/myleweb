import { notFound } from "next/navigation";
import { ProductGroupPage } from "@/components/pages/ProductGroupPage";
import {
  getProductGroup,
  productCategoryPages,
} from "@/data/categories";

export function generateStaticParams() {
  return productCategoryPages.flatMap((category) =>
    category.groups.map((group) => ({
      slug: category.slug,
      group: group.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; group: string }>;
}) {
  const { slug, group } = await params;
  const match = getProductGroup(slug, group);
  if (!match) {
    return { title: "Products" };
  }
  return {
    title: match.group.title,
    description: match.group.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; group: string }>;
}) {
  const { slug, group } = await params;
  const match = getProductGroup(slug, group);
  if (!match) {
    notFound();
  }
  return (
    <ProductGroupPage category={match.category} group={match.group} />
  );
}
