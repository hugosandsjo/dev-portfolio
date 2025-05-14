import SideMenu from "@/components/SideMenu";
import SingleCase from "@/components/SingleCase";
import { cases } from "@/data/caseData";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Updated to reflect Next.js 15 prop types
type PageProps = {
  params: Promise<{ slug: string[] }>;
};

// Define props type for metadata generation
type MetadataProps = {
  params: { slug: string[] };
};

// Generate metadata for the page
export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const slug = params.slug[0];
  const caseItem = cases.find((c) => c.slug === slug);

  if (!caseItem) {
    return {
      title: "Case Not Found",
    };
  }

  return {
    title: `${caseItem.title} | Portfolio`,
    description: caseItem.description,
    openGraph: {
      images: [caseItem.imagePath],
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
export default async function CasePage({ params }: PageProps) {
  // Resolve the params Promise
  const resolvedParams = await params;
  // Get the first segment of the slug
  const slug = resolvedParams.slug[0];

  // Check if the case exists
  const caseExists = cases.some((c) => c.slug === slug);
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
          <SingleCase slug={slug} />
        </div>
      </main>
    </div>
  );
}
