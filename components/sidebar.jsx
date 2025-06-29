import { GiSpikedDragonHead } from "react-icons/gi";
import { GiPapers } from "react-icons/gi";
import { IoPeopleSharp } from "react-icons/io5";
import { RiHeartsFill } from "react-icons/ri";
import { MdCreate } from "react-icons/md";
import SettingsNav from "@/components/settings_nav";
export default function Sidebar() {
  return (
    <div className="w-17 h-full border-r-1 border-neutral-900 flex flex-col justify-between">
      <div>
        <div className="w-full h-17 border-b-1 border-neutral-900 flex items-center justify-center hover:bg-sky-600 min-w-17">
          <GiSpikedDragonHead size={20} />
        </div>
        <div className="w-full h-17 border-b-0 border-neutral-900 flex items-center justify-center hover:bg-sky-600 min-w-17">
          <GiPapers size={20} />
        </div>
        <div className="w-full h-17 border-b-0 border-neutral-900 flex items-center justify-center hover:bg-sky-600 min-w-17">
          <IoPeopleSharp size={20} />
        </div>
        <div className="w-full h-17 border-b-0 border-neutral-900 flex items-center justify-center hover:bg-sky-600 min-w-17">
          <RiHeartsFill size={20} />
        </div>
        <div className="w-full h-17 border-b-0 border-neutral-900 flex items-center justify-center hover:bg-sky-600 min-w-17">
          <MdCreate size={20} />
        </div>
      </div>
      <div>
        <SettingsNav />
      </div>
    </div>
  );
}
