"use client";

import { IoIosAlert } from "react-icons/io";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { useRef, useState } from "react";
import Navbar from "@/components/navbar";

export default function Home() {
  const emailInput = useRef();
  const passwordInput = useRef();

  const [error, setError] = useState("");
  const handleFormSubmit = () => {
    if (!emailInput.current.value || !emailInput.current.value.includes("@"))
      return setError("Invalid email address.");
    if (!passwordInput.current.value || passwordInput.current.value.length < 8)
      return setError("Password must be greater than 8 characters.");
    setError("");
  };

  return (
    <>
      <section className="h-dvh md:h-screen w-screen flex items-center flex-col justify-center">
        <section className="flex w-[85vw] md:w-150 bg-neutral-900 rounded-2xl border-1 border-neutral-800 flex-col">
          <header className="p-10 leading-7">
            <h2 className={` text-2xl mb-2`}>They left us clues</h2>
            <p className={`text-base md:text-base text-neutral-400 leading-6`}>
              Studying what was never meant to be found.
            </p>
          </header>
          <section className="p-10 pt-0">
            <input
              ref={emailInput}
              type="text"
              placeholder="Email address"
              className={`w-full p-5 py-3 text-base outline-none border-b-1 border-neutral-700 mb-10 focus:border-sky-600`}
            />
            <input
              ref={passwordInput}
              type="text"
              placeholder="New password"
              className="w-full p-5 py-3 text-base outline-none border-b-1 border-neutral-700 focus:border-sky-600"
            />
            {error && (
              <p className="p-5 pb-0 text-red-500 px-0 flex items-center gap-2">
                <IoIosAlert /> {error}
              </p>
            )}

            <section className="md:flex flex-row-reverse items-center justify-between mt-5">
              <button
                className="p-5 bg-sky-600 py-3 rounded-xl md:float-right flex items-center gap-2 cursor-pointer"
                onClick={handleFormSubmit}
              >
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
