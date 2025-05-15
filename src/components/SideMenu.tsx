export default function SideMenu() {
  return (
    <section className="flex flex-col gap-8 sticky top-0 h-fit ">
      <div className="flex flex-col pt-5 bg-gray-200 gap-4">
        <h1 className="text-2xl font-semibold">About</h1>
        <hr className="border-t-2 border-black" />
        <p className="text-md leading-[1.5] font-light">
          With a background in arts and crafts i bring my knowledge in classic
          design techniques into the digital landscape. I get excited about
          visual problem solving and depending on the needs of the project I use
          design, code and animation to deliver the desired result.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Education</h1>
        <hr className="border-t-2 border-black" />
        <div className="flex flex-col gap-1">
          <h4 className="text-xl font-medium">YRGO</h4>
          <div className="flex justify-between">
            <h5 className="text-md font-light">Web developer</h5>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-xl font-medium">Kunsthøgskolen i Oslo</h4>
          <div className="flex gap-1 items-baseline">
            <h5 className="text-md font-light">Bachelor in Graphic Design</h5>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-xl font-medium">School Of Motion</h4>
          <div className="flex gap-1 items-baseline">
            <h5 className="text-md font-light">Animation bootcamp</h5>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <hr className="border-t-2 border-black" />
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold">hugosandsjo@gmail.com</h3>
          <h3 className="text-lg font-semibold">0707224289</h3>
          <h3 className="text-lg font-semibold">Instagram</h3>
        </div>
      </div>
    </section>
  );
}
