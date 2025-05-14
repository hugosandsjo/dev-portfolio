import SideMenu from "@/components/SideMenu";
import SingleCase from "@/components/SingleCase";
import { cases } from "@/data/caseData";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";

// Define the props for the page component
type PageProps = {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Generate metadata for the page
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string[] }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Resolve the params promise to get the slug
  const { slug } = await params;
  const caseItem = cases.find((c) => c.slug === slug[0]);

  if (!caseItem) {
    return {
      title: "Case Not Found",
    };
  }

  // Optionally access and extend parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${caseItem.title} | Portfolio`,
    description: caseItem.description,
    openGraph: {
      images: [caseItem.imagePath, ...previousImages],
    },
  };
}

// Generate static paths for all cases
export function generateStaticParams() {
  return cases.map((caseItem) => ({
    slug: [caseItem.slug],
  }));
}

// Page component - handling the Promise params
export default async function CasePage({ params, searchParams }: PageProps) {
  // Resolve the params Promise
  const { slug } = await params;

  // Get the first segment of the slug
  const caseSlug = slug[0];

  // Check if the case exists
  const caseExists = cases.some((c) => c.slug === caseSlug);
  if (!caseExists) {
    notFound();
  }

  return (
    <div className="bg-gray-200 flex flex-col items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="grid grid-cols-12 row-start-2 items-center md:items-start md:gap-10 w-full px-8 md:px-20 pb-20 md:pt-40">
        <div className="order-2 md:order-1 col-span-full md:col-span-4 2xl:col-span-2 h-full">
          <SideMenu />
        </div>
        <div className="order-1 md:order-2 col-span-full md:col-span-8 2xl:col-span-10 h-full">
          <SingleCase slug={caseSlug} />
        </div>
      </main>
    </div>
  );
}
