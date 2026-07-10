import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import { findProductPoint, productPointParams } from "@/content/products";

// Only the catalogue's known category/point slugs are valid pages.
export const dynamicParams = false;

export function generateStaticParams() {
  return productPointParams();
}

export default async function ProductPointPage({
  params,
}: {
  params: Promise<{ category: string; point: string }>;
}) {
  const { category, point } = await params;
  const product = findProductPoint(category, point);

  if (!product) notFound();

  return <ProductDetail product={product} />;
}
