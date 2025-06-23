import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="w-70 bg-neutral-900 border-1 border-neutral-700 h-10 rounded-3xl fixed bottom-10 left-[50%] -translate-x-[50%] grid grid-cols-4 overflow-hidden">
      <h2 className="text-base cursor-pointer border-r-1 border-neutral-700 hover:bg-sky-600 flex items-center justify-center">
        <FaInstagram />
      </h2>
      <h2 className="text-base cursor-pointer border-r-1 border-neutral-700 hover:bg-sky-600 flex items-center justify-center">
        <FaGithub />
      </h2>
      <h2 className="text-base cursor-pointer border-r-1 border-neutral-700 hover:bg-sky-600 flex items-center justify-center">
        <BsTwitterX />
      </h2>
      <h2 className="text-base cursor-pointer hover:bg-sky-600 flex items-center justify-center">
        <FaLinkedin />
      </h2>
    </nav>
  );
}
