import { notFound } from "next/navigation";
import PortfolioDetail from "@/components/PortfolioDetail";
import { findPortfolioProject, portfolioProjectParams } from "@/content/portfolio";

// Only the gallery's known project slugs are valid pages.
export const dynamicParams = false;

export function generateStaticParams() {
  return portfolioProjectParams();
}

export default async function PortfolioProjectPage({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project } = await params;
  const found = findPortfolioProject(project);

  if (!found) notFound();

  return <PortfolioDetail project={found} />;
}
