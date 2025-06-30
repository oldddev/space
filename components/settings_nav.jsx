"use client";
import { GiDragonHead } from "react-icons/gi";
import { FaDoorOpen } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { RxDotsHorizontal } from "react-icons/rx";

export default function SettingsNav() {
  const [active, setActive] = useState("");

  return (
    <>
      <div
        className="w-full h-17 border-t-1 border-neutral-900 flex items-center justify-center hover:bg-sky-600 relative cursor-pointer min-w-17"
        onClick={() => setActive(!active)}
      >
        <RxDotsHorizontal size={20} />
      </div>
      <div
        className={`fixed left-20 bottom-2 w-52 rounded-xl overflow-hidden bg-neutral-900 flex-col ${
          active ? "flex" : "hidden"
        }`}
      >
        <div className="p-4 px-8 flex items-center gap-3 border-b-1 border-neutral-800 hover:bg-sky-600">
          <GiDragonHead />
          <p>Dev</p>
        </div>
        <div className="p-4 px-8 flex items-center gap-3 border-b-1 border-neutral-800 hover:bg-sky-600">
          <FaGithub />
          <p>Github</p>
        </div>
        <div className="p-4 px-8 flex items-center gap-3 hover:bg-red-500">
          <FaDoorOpen />
          <p>Log out</p>
        </div>
      </div>
    </>
  );
}
