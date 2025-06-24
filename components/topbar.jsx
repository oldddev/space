"use client";
import { HiOutlineBars2 } from "react-icons/hi2";
import { TbPencilPlus } from "react-icons/tb";
import { MdAccountCircle } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

export default function Topbar() {
  const [active, setActive] = useState(false);
  return (
    <>
      <div
        className="p-5 border-1 border-r-0 border-neutral-900 cursor-pointer hover:bg-sky-600"
        onClick={() => setActive(!active)}
      >
        {!active && <HiOutlineBars2 size={20} />}
        {active && <RxCross2 size={20} />}
      </div>
      <div
        className={`absolute w-50 right-0 h-40 top-full bg-neutral-900 border-1 border-neutral-800 bottom-0 mr-3 mt-3 rounded-xl grid-rows-3 overflow-hidden ${
          active ? "grid" : "hidden"
        }`}
      >
        <p className="cursor-pointer flex items-center gap-2 p-4 border-b-1 border-neutral-800 hover:bg-sky-600">
          <TbPencilPlus /> Create research
        </p>
        <p className="cursor-pointer flex items-center gap-2 p-4 border-b-1 border-neutral-800  hover:bg-sky-600">
          <MdAccountCircle /> Edit your account
        </p>

        <p className="cursor-pointer flex items-center gap-2 p-4  hover:bg-red-500">
          <CiLogout /> Log out
        </p>
      </div>
    </>
  );
}
