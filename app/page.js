import Navbar from "@/components/navbar";
import { Manrope } from "next/font/google";

import { IoIosAlert } from "react-icons/io";
import { GoCheck } from "react-icons/go";
import { BsArrowRightCircleFill } from "react-icons/bs";

const manrope = Manrope();

export default function Home() {
  return (
    <>
      <section className="h-screen w-screen flex items-center flex-col justify-center">
        <section className="flex w-[85vw] md:w-180 bg-neutral-900 rounded-2xl border-1 border-neutral-800 flex-col">
          <header className="p-10 md:leading-8 leading-7">
            <h2 className={` text-2xl ${manrope.className} mb-3`}>
              They left clues.
            </h2>
            <p
              className={`text-[14px] md:text-base text-neutral-400 leading-6`}
            >
              Studying What Was Never Meant to Be Found
            </p>
          </header>
          <section className="p-10 pt-0">
            <input
              type="text"
              placeholder="Email address"
              className={`w-full p-5 py-3 outline-none border-b-1 border-neutral-700 mb-10 focus:border-sky-600`}
            />
            <input
              type="text"
              placeholder="New password"
              className="w-full p-5 py-3 outline-none border-b-1 border-neutral-700 focus:border-sky-600"
            />
            {/* <p className="p-5 pb-0 text-red-500 px-0 flex items-center gap-2">
              <IoIosAlert /> Invalid email address, try other.
            </p> */}
            <section className="md:flex flex-row-reverse items-center justify-between mt-5">
              <button className="p-5 bg-sky-600 py-3 rounded-xl md:float-right flex items-center gap-2 cursor-pointer">
                Enter <BsArrowRightCircleFill />
              </button>
              <p className="p-5 px-0 text-base text-neutral-400">
                Already have an account?{" "}
                <span className="underline text-neutral-200">Sign in</span>
              </p>
            </section>
          </section>
        </section>
      </section>
      <Navbar />
    </>
  );
}
