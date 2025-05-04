import Image from "next/image";
import profilePic from "../../public/profile_image.jpg";

export default function Home() {
  return (
    <div className="bg-gray-200 flex flex-col items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex-col lg:flex-row flex row-start-2 items-center sm:items-start gap-10 w-full mt-20 px-8 md:px-20">
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <h1 className="text-5xl md:text-6xl xl:text-9xl">Developer</h1>
          <p
            className="md:text-2xl font-inter leading-[1.5] "
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            With a background in arts and crafts i bring my knowledge in classic
            design techniques into the digital landscape. I get excited about
            visual problem solving and having a broad spectrum of clients.
            Depending on the needs of the project I use graphic design,
            illustration and animation to deliver the desired result.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <Image src={profilePic} height={400} width={400} alt="profile" />
        </div>
      </main>
    </div>
  );
}
