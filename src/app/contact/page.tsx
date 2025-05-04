export default function Contact() {
  return (
    <div className="bg-gray-200 flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-1 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="w-full flex flex-col gap-8 px-8">
        <h1 className="text-5xl md:text-6xl xl:text-9xl">Contact</h1>
        <p
          className="md:text-2xl font-inter leading-[1.5] "
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          I am always open to new opportunities and collaborations. If you have
          a project in mind or just want to say hello, feel free to reach out!
        </p>
      </div>
      <div className="w-full flex flex-col gap-4 p-8">
        <h2 className="text-3xl md:text-6xl xl:text-7xl">0707224289</h2>
        <h2 className="text-3xl md:text-6xl xl:text-7xl">
          hugosandsjo@gmail.com
        </h2>
        <h2 className="text-3xl md:text-6xl xl:text-7xl">Github</h2>
      </div>
    </div>
  );
}
