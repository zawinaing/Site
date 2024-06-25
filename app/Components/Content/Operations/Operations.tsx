import { GridViewIcon, ListViewIcon } from "../../../../assets/index.icon";

export default function Operations() {
   return (
      // TODO make more semantic tags
      <nav className="flex justify-between">
         <div className="w-full flex gap-8">
            <div className="flex items-center gap-3">
               <label htmlFor="#" className="font-bold text-xs">
                  Show
               </label>
               <button className="bg-[#D4D4D4] hover:bg-[#e6dddd] border border-t-[2px] border-gray-400 rounded-[5px] w-[40px] h-[30px]">50</button>
               <button className="border border-gray-300 rounded-[5px] w-[40px] h-[30px]">300</button>
            </div>
            <div className="flex items-center gap-3">
               <label htmlFor="#" className="font-bold text-xs">
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
               <label htmlFor="#" className="font-bold text-xs">
                  Map View
               </label>
               <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer outline-none border-none ring-0" />
                  <div className="relative w-12 h-3 bg-gray-700 peer-focus:outline-none rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-gray-500 after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-gray-400 after:-translate-y-[8px] after:-translate-x-1"></div>
                  <span className="ms-3 text-xs font-medium text-gray-900 dark:text-gray-300">On</span>
               </label>
            </div>
         </div>

         <div className="w-full flex gap-8">
            <div className="flex items-center gap-3">
               <label htmlFor="#" className="font-bold text-xs">
                  Verified Provider Only
               </label>
               <input type="checkbox" className="accent-gray-500 w-4 h-4" />
            </div>
            <div className="flex items-center gap-3">
               <label htmlFor="#" className="font-bold text-xs">
                  Sort
               </label>
               <div className="border border-gray-400 rounded-[20px] px-5 min-w-[170px] inline-flex justify-between items-center">
                  <label htmlFor="sort" className="text-[10px]">
                     Sort by
                  </label>
                  <select name="sort" id="sort"></select>
               </div>
            </div>
            <div className="flex items-center gap-3">
               <label htmlFor="#" className="font-bold text-xs">
                  Distance
               </label>
               <div className="border border-gray-400 rounded-[20px] px-5 min-w-[170px] inline-flex justify-between items-center">
                  <label htmlFor="sort" className="text-[10px]">
                     Distance between
                  </label>
                  <select name="sort" id="sort"></select>
               </div>
            </div>
         </div>
      </nav>
   );
}
