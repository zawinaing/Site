import Image from "next/image";
import {
  GlobeIcon,
  PatientIcon,
  SearchIcon,
  UkIcon,
  LocationIcon,
  SearchIconLg,
} from "../../../assets/index.icon";

export default function Nav() {
  return (
    <header>
      <nav className="bg-[#0b1b3c] flex justify-between px-5 py-3">
        <Image
          className="cursor-pointer opacity-90 hover:opacity-100"
          width={160}
          height={80}
          src="/header_logo.svg"
          alt="logo"
        />
        <div className="flex items-center justify-center gap-4 ">
          <div className="block text-[#DD5A19] font-semibold text-xs ">
            Provide&apos s Console
          </div>
          <div className="bg-white rounded-[20px] flex items-center justify-between px-2 py-1 h-full">
            <input
              className="bg-transparent border-none outline-none text-xs text-black w-[250px]"
              type="search"
              placeholder="Search Health Provider Officers"
            />
            <div className="bg-[#D91417] rounded-full w-fit p-[5px]">
              <SearchIcon />
            </div>
          </div>
          <div className="h-full flex items-center justify-center gap-2 bg-blue-400/50 rounded-[20px] px-2">
            <div>
              <GlobeIcon />
            </div>
            <div>
              <UkIcon />
            </div>
          </div>
          <div className=" h-full flex items-center justify-center gap-2 bg-blue-400/50 rounded-[20px] px-[10px]">
            <PatientIcon />
            <p className="font-medium text-stone-200">{`I'm a Patient`}</p>
          </div>
          <div className="h-full flex items-center justify-center gap-2 bg-blue-400/50 rounded-[20px] px-[10px]">
            <PatientIcon />
            <p className="font-medium text-stone-200">{`I'm a Provider`}</p>
          </div>
        </div>
      </nav>
      <section className="bg-[#2B4C93] py-5 px-20">
        <div className="bg-white flex justify-between w-full pl-10 pr-2 py-1 rounded-[40px]">
          <input
            className="bg-transparent border-none outline-none text-md text-black placeholder:text-gray-500 placeholder:font-semibold text-sm"
            type="search"
            placeholder="Search Department"
          />
          <input
            className="bg-transparent border-none outline-none text-md text-black placeholder:text-gray-500 placeholder:font-semibold text-sm"
            type="search"
            placeholder="Specialty/Illness/Name"
          />
          <div className="w-fit flex items-center justify-center ">
            <input
              className="bg-transparent border-none outline-none text-md text-black placeholder:text-gray-500 placeholder:font-semibold text-sm"
              type="search"
              placeholder="Type or Use my location"
            />
            <LocationIcon />
          </div>
          <div>
            <div className="flex items-center">
              <input
                id="country-option-1"
                type="radio"
                name="countries"
                value="Global"
                className=" border-gray-300 focus:ring-2 focus:ring-blue-300 bg-transparent checked:before:bg-red-400"
                aria-labelledby="country-option-1"
                aria-describedby="country-option-1"
              />
              <label
                htmlFor="country-option-1"
                className="text-xs font-medium text-gray-800 ml-2 block"
              >
                Global
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="country-option-2"
                type="radio"
                name="countries"
                value="National"
                className=" border-gray-300 focus:ring-2 focus:ring-blue-300"
                aria-labelledby="country-option-2"
                aria-describedby="country-option-2"
              />
              <label
                htmlFor="country-option-2"
                className="text-xs font-medium text-gray-800 ml-2 block"
              >
                National
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="country-option-3"
                type="radio"
                name="countries"
                value="Near me"
                className=" border-gray-300 focus:ring-2 focus:ring-blue-300"
                aria-labelledby="country-option-3"
                aria-describedby="country-option-3"
              />
              <label
                htmlFor="country-option-3"
                className="text-xs font-medium text-gray-800 ml-2 block"
              >
                Near me
              </label>
            </div>
          </div>
          <div className="w-14 h-auto  border border-red-400/70 rounded-[30px] flex items-center justify-center">
            {/* TODO: Change Icon Component */}
            <svg
              className="stroke-red-400"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>
      </section>
    </header>
  );
}
