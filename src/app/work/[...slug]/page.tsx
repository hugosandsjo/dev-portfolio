import SideMenu from "@/components/SideMenu";
import SingleCase from "@/components/SingleCase";

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log("slug", slug);
  return (
    <div className="bg-gray-200 flex flex-col items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="grid grid-cols-12 row-start-2 items-center md:items-start md:gap-10 w-full px-8 md:px-20 pb-20 md:pt-40">
        <div className="order-2 md:order-1 col-span-full md:col-span-4 2xl:col-span-2">
          <SideMenu />
        </div>
        <div className="order-1 md:order-2 col-span-full md:col-span-8 2xl:col-span-10">
          <SingleCase />
        </div>
      </main>
    </div>
  );
}
