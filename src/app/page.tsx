import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="bg-gray-200 flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navigation />
      <main className="flex-col lg:flex-row flex row-start-2 items-center sm:items-start w-full">
        <div className="w-full md:w-1/2  flex flex-col gap-8 p-8">
          <h1 className="text-7xl md:text-6xl xl:text-9xl">Developer</h1>
          <p
            className="text-2xl font-inter leading-[1.5] "
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div className="w-full md:w-1/2  bg-gray-300 h-[540px]"></div>
      </main>
    </div>
  );
}
