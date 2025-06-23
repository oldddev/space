export default function Navbar() {
  return (
    <nav className="w-70 bg-neutral-900 border-1 border-neutral-700 h-10 rounded-3xl fixed bottom-10 left-[50%] -translate-x-[50%] grid grid-cols-4 overflow-hidden">
      <h2 className="text-base cursor-pointer border-r-1 border-neutral-700 hover:bg-[#006fff] flex items-center justify-center">
        1
      </h2>
      <h2 className="text-base cursor-pointer border-r-1 border-neutral-700 hover:bg-[#006fff] flex items-center justify-center">
        2
      </h2>
      <h2 className="text-base cursor-pointer border-r-1 border-neutral-700 hover:bg-[#006fff] flex items-center justify-center">
        3
      </h2>
      <h2 className="text-base cursor-pointer hover:bg-[#006fff] flex items-center justify-center">
        4
      </h2>
    </nav>
  );
}
