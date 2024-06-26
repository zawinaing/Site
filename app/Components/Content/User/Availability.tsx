import { CalendarIcon } from "@/assets/index.icon";
import React from "react";

export default function Availability() {
  return (
    <div
      className="hover:-translate-y-[1px] bg-[#0B1B3C] hover:bg-[#1b3a7e] w-full text-stone-200 font-semibold rounded-[20px] text-lg 
              p-2 text-center inline-flex items-center justify-center relative cursor-pointer"
    >
      <CalendarIcon />
      <p className=" w-full text-center text-sm">Check Availability</p>
      <input
        type="checkbox"
        id="modal"
        className="peer w-full h-full absolute opacity-0 cursor-pointer"
      />
      <div className="hidden peer-checked:block absolute top-[28.5px] right-0 bg-white px-1 pt-5 pb-10 text-3xl rounded-[10px] shadow-[0px_20px_20px_10px_#00000024]">
        <div className="flex items-center justify-center mx-[10px] space-x-5">
          <div className="text-center w-8">
            <p className="font-bold text-[11px] text-black leading-[2px]">
              Mon
            </p>
            <p className="font-medium text-gray-700 text-[8px]">11th Apr</p>
          </div>
          <div className="text-center w-8">
            <p className="font-bold text-[11px] text-black leading-[2px]">
              Tue
            </p>
            <p className="font-medium text-gray-700 text-[8px]">11th Apr</p>
          </div>
          <div className="text-center w-8">
            <p className="font-bold text-[11px] text-black leading-[2px]">
              Wed
            </p>
            <p className="font-medium text-gray-700 text-[8px]">11th Apr</p>
          </div>
          <div className="text-center w-8">
            <p className="font-bold text-[11px] text-black leading-[2px]">
              Thu
            </p>
            <p className="font-medium text-gray-700 text-[8px]">11th Apr</p>
          </div>
          <div className="text-center w-8">
            <p className="font-bold text-[11px] text-black leading-[2px]">
              Fri
            </p>
            <p className="font-medium text-gray-700 text-[8px]">11th Apr</p>
          </div>
          <div className="text-center w-8">
            <p className="font-bold text-[11px] text-black leading-[2px]">
              Sat
            </p>
            <p className="font-medium text-gray-700 text-[8px]">11th Apr</p>
          </div>
        </div>
        <div className="bg-gray-300 grid grid-cols-6 grid-rows-4 text-[11px] text-center">
          <div className="bg-[#2C4999] border-l border-l-gray-400 border-b border-b-white px-2 py-1">
            09:00
          </div>
          <div className="border-l border-l-gray-400 px-2 py-1"></div>
          <div className="border-l border-l-gray-400 px-2 py-1"></div>
          <div className="border-l border-l-gray-400 px-2 py-1"></div>
          <div className="border-l border-l-gray-400 px-2 py-1"></div>
          <div className="border-l border-l-gray-400 px-2 py-1"></div>
          <div className="bg-[#2C4999] border-l border-l-gray-400 px-2 py-1 border-b border-b-white">
            09.30
          </div>
          <div className="border-l border-l-gray-400 px-2 py-1"></div>
          <div className="bg-[#2C4999] border-l border-l-gray-400 px-2 py-1 border-b border-b-white">
            09.30
          </div>
          <div className="border-l border-l-gray-400 px-2 py-1"></div>
          <div className="border-l border-l-gray-400 px-2 py-1"></div>
          <div className="border-l border-l-gray-400 px-2 py-1"></div>
          <div className="bg-[#2C4999] border-l border-l-gray-400 border-b border-b-white px-2 py-1">
            10.00
          </div>
          <div className="border-l border-l-gray-400 px-2 py-1"></div>
          <div className="bg-[#73A3FD] border-l border-l-gray-400 px-2 py-1">
            10.00
          </div>
          <div className="bg-[#2C4999] border-l border-l-gray-400 px-2 py-1">
            10.00
          </div>
          <div className="border-l border-l-gray-400 px-2 py-1"></div>
          <div className="border-l border-l-gray-400 px-2 py-1"></div>

          <div className="bg-[#2C4999] border-l border-l-gray-400 border-b border-b-white px-2 py-1">
            10.30
          </div>
          <div className="border-l border-l-gray-400 px-2 py-1"></div>
          <div className="border-l border-l-gray-400 px-2 py-1"></div>
          <div className="border-l border-l-gray-400 px-2 py-1"></div>
          <div className="bg-[#2C4999] border-l border-l-gray-400 border-b border-b-white px-2 py-1">
            10.30
          </div>
          <div className="border-l border-l-gray-400 px-2 py-1"></div>
        </div>
      </div>
    </div>
  );
}
