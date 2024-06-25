import Image from "next/image";
import { CrossIcon } from "@/assets/index.icon";

// TODO: Props
export default function ChosenDoctorCard() {
  return (
    <div className="w-fit max-w-[200px] relative p-5 flex flex-col items-center gap-3 border border-stone-200 text-center rounded-[5px]">
      <button
        type="button"
        className="bg-white border border-stone-200 rounded-full p-1 absolute top-0 right-0 -translate-y-2 translate-x-2"
      >
        <CrossIcon />
      </button>
      <Image
        width={100}
        height={100}
        src="/demo.jpg"
        alt="doctor"
        className="rounded-full object-cover w-[150px] h-[150px]"
      />
      <strong className="text-lg text-blue-500">Dr Nader Khandanpour</strong>

      <p className="text-xs font-semibold">
        Consultant <br /> Neuroradiobgist
      </p>

      <div>
        <p className="text-[10px] font-semibold text-stone-500">Fist Order</p>
        <strong className="text-2xl font-extrabold">&#163;200</strong>
      </div>

      <a href="#" className="underline  text-blue-500 text-[10px]">
        View Public Offers
      </a>
    </div>
  );
}
