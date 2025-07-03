import Research from "@/components/research";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <section className="flex w-screen h-dvh">
      <Sidebar />
      <div className="w-full h-screen flex flex-col">
        <input
          type="text"
          placeholder="Search anything..."
          className="w-full h-[71px] px-6 p-4 border-b-1 border-neutral-900 outline-none"
        />
        <section className="h-screen overflow-x-hidden flex flex-col md:flex-row hide_scrollbar hide_scrollbar_">
          <div className="h-screen overflow-y-scroll hide_scrollbar hide_scrollbar_">
            <Research />
            <Research />
            <Research />
            <Research />
          </div>
          <section>
            <header className="p-10">
              <h2>BEST PICKS</h2>
            </header>
          </section>
        </section>
      </div>
    </section>
  );
}
