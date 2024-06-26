import { GridViewIcon, ListViewIcon } from "../../../../assets/index.icon";
import "./chevron.css";

export default function Operations() {
  return (
    <nav>
      <div className="flex justify-between bg-[#F2F2F2] p-3">
        <div className="w-full flex gap-8">
          <div className="flex items-center gap-3">
            <label htmlFor="#" className="font-poppins font-bold text-xs">
              Show
            </label>
            <button className="bg-[#D4D4D4] hover:bg-[#e6dddd] border border-t-[2px] border-gray-400 rounded-[5px] w-[40px] h-[30px]">
              50
            </button>
            <button className="border border-gray-300 rounded-[5px] w-[40px] h-[30px]">
              300
            </button>
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="#" className="font-poppins font-bold text-xs">
              View
            </label>
            <button className="bg-[#D4D4D4] hover:bg-[#e6dddd] border border-t-[2px] border-gray-400 rounded-[5px] px-2 py-[3px]">
              <ListViewIcon />
            </button>
            <button className="border border-t-[2px] border-gray-300 rounded-[5px] px-2 py-[3px]">
              <GridViewIcon />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="#" className="font-poppins font-bold text-xs">
              Map View
            </label>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer outline-none border-none ring-0"
              />
              <div className="active:cursor-grab relative w-10 h-3 bg-[#D4D4D4] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#6F6F6F] after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all  peer-checked:bg-gray-400 after:-translate-y-[8px] after:-translate-x-1 after:hover:bg-gray-400"></div>
              <span
                title="toggle map view"
                className="ms-3 text-xs font-semibold text-gray-900 "
              >
                On
              </span>
            </label>
          </div>
        </div>

        <div className="w-full flex gap-8">
          <div className="flex items-center gap-3">
            <label
              htmlFor="#"
              className="font-poppins font-bold text-xs whitespace-nowrap"
            >
              Verified Provider Only
            </label>
            <input type="checkbox" className="accent-gray-500 w-4 h-4" />
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="#" className="font-poppins font-bold text-xs">
              Sort
            </label>
            <div className="border border-gray-400 rounded-[20px] px-5 min-w-[170px] inline-flex justify-between items-center">
              <label
                htmlFor="sort"
                className="text-[10px] cursor-pointer hover:placeholder:text-black"
              >
                Sort by
              </label>
              <select
                name="sort"
                id="sort"
                className="customChevron cursor-pointer hover:placeholder:text-black"
              ></select>
              <svg
                className="cursor-pointer hover:translate-y-[1px]"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99499 15C9.58431 15 9.24374 14.8567 8.92321 14.5511L1.38063 7.19675C1.1202 6.94842 1 6.65234 1 6.29895C1 5.58262 1.59098 5 2.34224 5C2.71285 5 3.05342 5.15282 3.32387 5.4107L9.98498 11.9436L16.6661 5.4107C16.9366 5.15282 17.2671 5 17.6477 5C18.399 5 19 5.58262 19 6.29895C19 6.65234 18.8698 6.94842 18.6093 7.19675L11.0668 14.5511C10.7462 14.8663 10.4057 15 9.99499 15Z"
                  fill="#4C4C4C"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="#" className="font-poppins font-bold text-xs">
              Distance
            </label>
            <div className="border border-gray-400 rounded-[20px] px-5 min-w-[170px] inline-flex justify-between items-center">
              <label
                htmlFor="sort"
                className="text-[10px] cursor-pointer hover:placeholder:text-black"
              >
                Distance between
              </label>
              <select
                name="sort"
                id="sort"
                className="customChevron cursor-pointer hover:placeholder:text-black"
              ></select>
              <svg
                className="cursor-pointer hover:translate-y-[1px]"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99499 15C9.58431 15 9.24374 14.8567 8.92321 14.5511L1.38063 7.19675C1.1202 6.94842 1 6.65234 1 6.29895C1 5.58262 1.59098 5 2.34224 5C2.71285 5 3.05342 5.15282 3.32387 5.4107L9.98498 11.9436L16.6661 5.4107C16.9366 5.15282 17.2671 5 17.6477 5C18.399 5 19 5.58262 19 6.29895C19 6.65234 18.8698 6.94842 18.6093 7.19675L11.0668 14.5511C10.7462 14.8663 10.4057 15 9.99499 15Z"
                  fill="#4C4C4C"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <article className="p-3 mt-3 mb-5">
        Showing 1-50 of over 150 results of{" "}
        <span
          title="search query  - 'specialist'"
          className="cursor-pointer font-bold text-[#2C4999] hover:text-[#4968be]"
        >
          Specialists
        </span>{" "}
        in{" "}
        <span
          title="search query doctor - 'Neurology'"
          className="cursor-pointer font-bold text-[#2C4999] hover:text-[#4968be]"
        >
          Neurology
        </span>{" "}
        in{" "}
        <span
          title="search query location - 'London'"
          className="cursor-pointer font-bold text-[#2C4999] hover:text-[#4968be]"
        >
          London
        </span>
      </article>
    </nav>
  );
}
