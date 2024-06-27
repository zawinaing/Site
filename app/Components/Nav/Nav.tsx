import Image from "next/image";
import {
  GlobeIcon,
  PatientIcon,
  SearchIcon,
  UkIcon,
  LocationIcon,
  TriangleIcon,
} from "../../../assets/index.icon";

export default function Nav() {
  return (
    <header>
      <nav className="bg-[#0b1b3c] flex justify-between px-5 py-3">
        <a href="https://www.esupralife.com" className="cursor-pointer">
          <Image
            className="cursor-pointer hover:-translate-y-[1px] transition-transform duration-200"
            width={160}
            height={80}
            src="/header_logo.svg"
            alt="logo"
          />
        </a>
        <div className="flex items-center justify-center gap-4 ">
          <div className="block text-[#DD5A19] hover:text-[#f3905f] transition-color duration-200 font-semibold text-xs cursor-pointer">
            Provide&apos s Console
          </div>
          <div className="bg-white rounded-[20px] flex items-center justify-between px-2 py-1 h-full">
            <input
              className="bg-transparent border-none outline-none text-xs text-black w-[250px] hover:placeholder:text-black"
              type="search"
              placeholder="Search Health Provider Officers"
            />
            <button className="bg-[#D91417] hover:bg-[#c53f43] active:bg-[#661f1f] rounded-full w-fit p-[5px]">
              <SearchIcon />
            </button>
          </div>
          <div className="group h-full flex items-center justify-center gap-2 bg-[#2B4E93] hover:bg-[#2b65db] transition-colors duration-200 cursor-pointer rounded-[20px] px-2">
            <div className="flex items-center justify-center">
              <div className="mx-[3px] -rotate-180">
                <TriangleIcon />
              </div>
              <div className="relative">
                <input
                  type="checkbox"
                  className="absolute peer w-full h-full opacity-0"
                />
                <GlobeIcon />
                <div className="absolute top-[19px] left-0 hidden peer-checked:block w-[50px] h-[50px] bg-[#2B4E93] -translate-x-[25px] shadow-lg drop-shadow-lg"></div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <input
                  type="checkbox"
                  className="absolute peer w-full h-full opacity-0"
                />
                <UkIcon />
                <div className="absolute top-[19px] left-0 hidden peer-checked:block w-[50px] h-[50px] bg-[#2B4E93] shadow-lg drop-shadow-lg"></div>
              </div>
              <div className="mx-[3px] -rotate-180">
                <TriangleIcon />
              </div>
            </div>
          </div>
          <div className="group  h-full flex items-center justify-center gap-2 bg-[#2B4E93] hover:bg-[#2b65db] transition-colors duration-200 cursor-pointer rounded-[20px] px-[10px]">
            <PatientIcon />
            <p className="font-medium text-stone-200 group-hover:text-white">{`I'm a Patient`}</p>
          </div>
          <div className="group h-full flex items-center justify-center gap-2 bg-[#2B4E93] hover:bg-[#2b65db] transition-colors duration-200 cursor-pointer rounded-[20px] px-[10px]">
            <PatientIcon />
            <p className="font-medium text-stone-200 group-hover:text-white">{`I'm a Provider`}</p>
          </div>
        </div>
      </nav>
      <section className="bg-[#2B4C93] py-5 px-20">
        <div className="max-w-[1600px] mx-auto">
          <div className="bg-white flex justify-between w-full pl-10 pr-2 py-1 rounded-[40px]">
            <input
              className="bg-transparent border-none outline-none text-md text-black placeholder:text-gray-500 placeholder:font-semibold text-sm hover:placeholder:text-black"
              type="search"
              placeholder="Search Department"
            />
            <input
              className="bg-transparent border-none outline-none text-md text-black placeholder:text-gray-500 placeholder:font-semibold text-sm hover:placeholder:text-black"
              type="search"
              placeholder="Specialty/Illness/Name"
            />
            <div className="w-fit flex items-center justify-center ">
              <input
                className="bg-transparent border-none outline-none text-md text-black placeholder:text-gray-500 placeholder:font-semibold text-sm hover:placeholder:text-black"
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
                  className="cursor-pointer text-xs font-medium text-gray-800 ml-2 block hover:text-black"
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
                  className="cursor-pointer text-xs font-medium text-gray-800 ml-2 block hover:text-black"
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
                  className="cursor-pointer text-xs font-medium text-gray-800 ml-2 block hover:text-black"
                >
                  Near me
                </label>
              </div>
            </div>
            <div className="w-14 h-auto border border-[#E6111A] hover:border-[#d17075] rounded-[30px] flex items-center justify-center cursor-pointer">
              <svg
                className="stroke-[#E6111A] hover:stroke-[#d17075]  transition-transform duration-200  hover:scale-[.95]"
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
        </div>
      </section>
    </header>
  );
}
