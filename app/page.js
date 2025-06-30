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
          className="w-full h-[71px] p-4 border-b-1 border-neutral-900 outline-none"
        />
        <section className="h-screen overflow-x-hidden flex flex-col md:flex-row">
          <div className="h-screen overflow-y-scroll">
            <Research />
            <Research />
            <Research />
            <Research />
          </div>
          <p>HELLO WORLD</p>
        </section>
      </div>
    </section>
  );
}
