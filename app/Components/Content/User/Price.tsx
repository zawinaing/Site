import { HeartIcon, TagIcon, StatsIcon } from "../../../../assets/index.icon";

export default function Price({
  isLimitedTimeOffer,
}: {
  isLimitedTimeOffer: boolean;
}) {
  return (
    <div className="flex flex-col justify-between h-full w-full">
      <div className="w-full  bg-stone-200 rounded-[10px] border border-gray-400/60">
        <div>{/* Limited time offer */}</div>
        <div className="rounded-t-[inherit] border border-b-gray-400/60 pl-3 pr-10 py-3">
          <div className="flex flex-col">
            <p className="text-[10px] font-semibold">First Order</p>
            <strong className="text-4xl">&#163;200</strong>
          </div>
        </div>
        <div className="rounded-b-[inherit] p-3">
          <div className="flex flex-col">
            <p className="text-[10px] font-semibold">First Order</p>
            <strong className="text-4xl">&#163;200</strong>
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
