import { NumberThreeIcon, NumberFourIcon } from "@/assets/index.icon";
import React from "react";

export default function Vacant({ number }: { number: "three" | "four" }) {
  const numbers = {
    three: <NumberThreeIcon />,
    four: <NumberFourIcon />,
  };

  return (
    <div className="w-[200px] max-h-[350px] relative p-5 flex items-center justify-center gap-3 border border-stone-200 text-center rounded-[5px]">
      {numbers[number]}
    </div>
  );
}
