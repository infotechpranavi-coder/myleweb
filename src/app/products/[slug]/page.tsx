import { notFound } from "next/navigation";
import { ProductCategoryPage } from "@/components/pages/ProductCategoryPage";
import {
  getProductCategory,
  productCategoryPages,
} from "@/data/categories";

export function generateStaticParams() {
  return productCategoryPages.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getProductCategory(slug);
  if (!category) {
    return { title: "Products" };
  }
  return {
    title: category.navLabel,
    description: category.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getProductCategory(slug);
  if (!category) {
    notFound();
  }
  return <ProductCategoryPage category={category} />;
}
