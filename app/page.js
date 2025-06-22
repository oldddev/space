import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { IoBasketballOutline } from "react-icons/io5";
import { Manrope } from "next/font/google";
import { GoDotFill } from "react-icons/go";

const manrope = Manrope();

export default function Home() {
  return (
    <section className="flex">
      <section className="bg-neutral-900 w-[20vw] h-screen relative border-r-1 border-r-stone-700">
        <footer className="p-7 border-b-1 border-b-stone-700">
          <h2 className="text-xm">GET IN TOUCH</h2>
          <section className="flex mt-5">
            <div className="w-12 h-12 bg-[#3f3f3f] outline-1 outline-[#595959] flex items-center justify-center">
              <FaGithub size={23} />
            </div>
            <div className="w-12 h-12 bg-[#3f3f3f] outline-1 outline-[#595959] flex items-center justify-center">
              <FaInstagram />
            </div>
            <div className="w-12 h-12 bg-[#3f3f3f] outline-1 outline-[#595959] flex items-center justify-center">
              <BsTwitterX />
            </div>
            <div className="w-12 h-12 bg-[#3f3f3f] outline-1 outline-[#595959] flex items-center justify-center">
              <IoMdMail />
            </div>
            <div className="w-12 h-12 bg-[#3f3f3f] outline-1 outline-[#595959] flex items-center justify-center">
              <IoBasketballOutline />
            </div>
          </section>
        </footer>
        <section className="p-7 pb-0">
          <header className="mb-5 text-xm">
            <h2>PROGRAMMING LANAGUAGES</h2>
          </header>
          <section className="ml-3 text-stone-400  flex flex-col gap-2">
            <p className="flex items-center gap-2">
              <GoDotFill /> C++
            </p>
            <p className="flex items-center gap-2">
              <GoDotFill /> PYTHON
            </p>

            <p className="flex items-center gap-2">
              <GoDotFill /> JAVASCRIPT
            </p>
            <p className="flex items-center gap-2">
              <GoDotFill /> GO
            </p>
          </section>
        </section>
        <section className="p-7 pb-0">
          <header className="mb-5 text-xm">
            <h2>FRAMEWORKS & LIBRARIES</h2>
          </header>
          <section className="ml-3 text-stone-400  flex flex-col gap-2">
            <p className="flex items-center gap-2">
              <GoDotFill /> BOOST
            </p>
            <p className="flex items-center gap-2">
              <GoDotFill /> SFML
            </p>

            <p className="flex items-center gap-2">
              <GoDotFill /> REACT JS
            </p>
            <p className="flex items-center gap-2">
              <GoDotFill /> NEXT JS
            </p>
            <p className="flex items-center gap-2">
              <GoDotFill /> NODE JS
            </p>
          </section>
        </section>
        <section className="p-7 pb-0">
          <header className="mb-5 text-xm">
            <h2>DATABASES</h2>
          </header>
          <section className="ml-3 text-stone-400  flex flex-col gap-2">
            <p className="flex items-center gap-2">
              <GoDotFill /> SQL
            </p>
            <p className="flex items-center gap-2">
              <GoDotFill /> NO SQL ( MONGODB )
            </p>
          </section>
        </section>

        <section className="p-7">
          <header className="mb-5 text-xm">
            <h2>OTHERS</h2>
          </header>
          <section className="ml-3 text-stone-400  flex flex-col gap-2">
            <p className="flex items-center gap-2">
              <GoDotFill /> GIT / GITHUB
            </p>
            <p className="flex items-center gap-2">
              <GoDotFill /> REST APIs
            </p>
          </section>
        </section>
      </section>
      <section className="w-[80vw]"></section>
    </section>
  );
}
