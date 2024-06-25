import React from "react";

export default function Operations() {
  return (
    <div className="relative p-5 flex flex-col justify-center gap-3 text-center rounded-[5px]">
      <button className="py-1 px-9 rounded-[20px] text-white w-full bg-[#0B1B3C] font-semibold text-xs">
        Compare Items
      </button>
      <button className="py-1 px-9 rounded-[20px] text-white w-full bg-[#E2101B] font-semibold text-xs">Clear All</button>
    </div>
  );
}
