import { Manrope } from "next/font/google";

const manrope = Manrope();

export default function Home() {
  return (
    <section className="h-dvh w-screen relative">
      <header>
        <h2
          className={`absolute md:bottom-30 bottom-15 md:left-30 left-[50%] transform translate-x-[-50%] md:translate-x-0 text-4xl md:text-6xl ${manrope.className}`}
        >
          SHAIKSPACE
        </h2>
      </header>
    </section>
  );
}
