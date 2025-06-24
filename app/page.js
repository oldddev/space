import Topbar from "@/components/topbar";

export default function Home() {
  return (
    <>
      <section className="flex md:flex-row flex-col">
        <section className="md:w-[60vw] w-screen h-screen bg-neutral-950 md:border-r-1 border-b-1 border-neutral-900">
          <section className="w-full">
            <header className="flex relative">
              <input
                type="text"
                placeholder="Search for anything..."
                className="w-full p-4 px-5 outline-none border-b border-neutral-900"
              />
              <Topbar />
            </header>
            <h2>Hello world</h2>
          </section>
        </section>
        <section className="md:w-[40vw] w-screen h-screen bg-neutral-950 flex justify-center relative">
          <nav className="w-70 h-15 absolute bottom-10 grid grid-cols-4 grid-rows-1">
            <p className="flex items-center justify-center border-1 border-r-0 border-neutral-900 hover:bg-sky-600">
              1
            </p>
            <p className="flex items-center justify-center border-1  border-r-0 border-neutral-900 hover:bg-sky-600">
              2
            </p>
            <p className="flex items-center justify-center border-1 border-r-0 border-neutral-900 hover:bg-sky-600">
              3
            </p>
            <p className="flex items-center justify-center border-1 border-neutral-900 hover:bg-sky-600">
              4
            </p>
          </nav>
        </section>
      </section>
    </>
  );
}
