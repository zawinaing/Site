import { HeartIcon, TagIcon, StatsIcon } from "../../../../assets/index.icon";

export default function Price({
  isLimitedTimeOffer,
}: {
  isLimitedTimeOffer: boolean;
}) {
  return (
    <div className="flex flex-col justify-between h-full w-full max-w-[200px]">
      <div className="w-full  bg-stone-200 rounded-[5px] border border-gray-400/60">
        <div
          style={
            isLimitedTimeOffer
              ? { visibility: "visible" }
              : { visibility: "hidden" }
          }
          className="w-full bg-[#E6111A] hover:bg-[#d44047] text-xs text-center text-white rounded-t-[inherit] border-t border-t-[#E6111A] py-[2px]"
        >
          Limited time offer
        </div>
        <div className="cursor-pointer hover:bg-white transition-colors duration-500 rounded-t-[inherit] border border-b-gray-400/60 pl-3 pr-8 py-[3px] flex gap-7 items-end">
          <div className="flex flex-col">
            <p className="text-[10px] font-semibold">First Order</p>
            <strong className="text-3xl">&#163;200</strong>
          </div>
          <div
            style={isLimitedTimeOffer ? { opacity: 100 } : { opacity: 0 }}
            className={`flex flex-col text-gray-600`}
          >
            <p className="text-[7px] font-semibold">First Order</p>
            <strong className="text-sm line-through">&#163;200</strong>
          </div>
        </div>
        <div className="cursor-pointer hover:bg-white transition-colors duration-500 rounded-b-[inherit] p-3">
          <div className="flex flex-col">
            <p className="text-[10px] font-semibold">First Order</p>
            <strong className="text-3xl">&#163;200</strong>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <button className="inline-flex items-center gap-1">
          <HeartIcon />
          <p className="text-[10px] font-semibold">Add to Favorite</p>
        </button>
        <button className="inline-flex items-center gap-1">
          <TagIcon />
          <p className="text-[10px] font-semibold">Special Offers Available</p>
        </button>
        <button className="inline-flex items-center gap-1">
          <StatsIcon />
          <p className="text-[10px] font-semibold">Compare</p>
        </button>
      </div>
    </div>
  );
}
