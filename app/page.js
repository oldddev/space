import Navbar from "@/components/navbar";
import { Manrope } from "next/font/google";

import { IoIosAlert } from "react-icons/io";

const manrope = Manrope();

export default function Home() {
  return (
    <>
      <section className="h-screen w-screen flex items-center flex-col justify-center">
        <section className="flex h-130 w-[85vw] md:w-200 bg-neutral-900 rounded-2xl border-1 border-neutral-800 flex-col">
          <header className="p-10 md:leading-8 leading-7">
            <h2 className={` text-2xl ${manrope.className} mb-3`}>
              They left clues.
            </h2>
            <p className={`text-xm text-neutral-400 leading-6`}>
              Studying What Was Never Meant to Be Found
            </p>
          </header>
          <section className="p-10 pt-0">
            <input
              type="text"
              placeholder="Email address"
              className={`w-full p-5 py-3 outline-none border-b-1 border-neutral-700 mb-10 focus:border-[#006fff]`}
            />
            <input
              type="text"
              placeholder="New password"
              className="w-full p-5 py-3 outline-none border-b-1 border-neutral-700 focus:border-[#006fff]"
            />
            <p className="p-5 text-red-500 px-0 flex items-center gap-2">
              <IoIosAlert /> Invalid email address, try other.
            </p>
            <button className="p-5 bg-sky-600 py-3 rounded-xl float-right mt-6">
              Enter
            </button>
          </section>
        </section>
      </section>
      <Navbar />
    </>
  );
}
