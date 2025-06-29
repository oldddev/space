import { CgProfile } from "react-icons/cg";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";

export default function Research() {
  return (
    <div className="border-b-1 md:border-r-1 border-neutral-900 max-w-200">
      <header className="p-5 flex justify-between items-center">
        <p className="flex items-center gap-3 text-neutral-400">
          <CgProfile size={18} />
          Shaik Ali
        </p>
        <div>
          <BiDotsHorizontalRounded size={20} />
        </div>
      </header>
      <div className="p-5 pt-0 overflow-hidden md:w-200 h-full md:flex">
        <img
          src="https://cdn.esahubble.org/archives/images/screen/heic0702a.jpg"
          className="rounded-2xl object-cover w-full h-full"
        />
        <div className="mt-5 text-neutral-400 md:ml-5 md:mt-3">
          <div className="mb-4 flex items-center gap-5">
            <FaHeart size="20" color="red" />
            <FaComment size={20} color="" />
          </div>
          <p>
            Black holes are among the most mysterious cosmic objects, much
            studied but not fully understood. These objects aren’t really holes.
            They’re huge concentrations of matter packed into very tiny spaces.
          </p>
        </div>
      </div>
    </div>
  );
}
