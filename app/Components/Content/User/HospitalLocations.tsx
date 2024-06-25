import { LocationIcon } from "../../../../assets/index.icon";

export default function HospitalLocations({ title, address }: { title: string; address: string }) {
   return (
      <div className="flex items-start gap-3">
         <LocationIcon  width="15" height="15"/>
         <div>
            <strong className="capitalize text-stone-700">{title}</strong>
            <p className="capitalize text-stone-500 text-xs">{address}</p>
         </div>
      </div>
   );
}
