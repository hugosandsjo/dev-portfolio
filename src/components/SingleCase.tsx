import Image from "next/image";

export default async function SingleCase({}) {
  return (
    <section className="col-span-full md:col-span-8 2xl:col-span-10 flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Singlecaseman</h1>
      <hr className="border-t-2 border-black" />

      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8">
        {/* Left column with all images */}
        <div className="flex flex-col gap-8">
          <div className="relative aspect-4/5 w-full">
            <Image
              src={"/dumkeramik/dumkeramik.png"}
              alt="Image"
              fill
              className="object-cover absolute object-center"
              priority
            />
          </div>

          <div className="relative aspect-4/5 w-full">
            <Image
              src={"/dumkeramik/dumkeramik.png"}
              alt="Image"
              fill
              className="object-cover absolute object-center"
              priority
            />
          </div>

          <div className="relative aspect-4/5 w-full">
            <Image
              src={"/dumkeramik/dumkeramik.png"}
              alt="Image"
              fill
              className="object-cover absolute object-center"
              priority
            />
          </div>

          <div className="relative aspect-4/5 w-full">
            <Image
              src={"/dumkeramik/dumkeramik.png"}
              alt="Image"
              fill
              className="object-cover absolute object-center"
              priority
            />
          </div>

          <div className="relative aspect-4/5 w-full">
            <Image
              src={"/dumkeramik/dumkeramik.png"}
              alt="Image"
              fill
              className="object-cover absolute object-center"
              priority
            />
          </div>
        </div>

        {/* Right column with sticky text */}
        <div
          className="w-full flex flex-col sticky top-5 h-fit gap-4"
          data-lenis-prevent
        >
          <h2 className="text-3xl font-semibold">Full koll!</h2>
          <p className="text-md leading-[1.5] font-light">
            Together with Gullersgrupp, I developed a set of illustrations and
            visual identity for the County Administrative Board and the Full
            Koll campaign. Intended to inform teenage parents about setting
            boundaries around alcohol and drugs and the importance of talking
            about the subject.
          </p>
        </div>
      </div>
    </section>
  );
}
