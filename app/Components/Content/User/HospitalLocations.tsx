import { LocationIcon } from "../../../../assets/index.icon";

export default function HospitalLocations({
  name,
  subtitle,
}: {
  name: string;
  subtitle: string;
}) {
  return (
    <div className="cursor-pointer flex items-start gap-3 bg-transparent hover:bg-gray-300 transition-colors duration-500 p-2 rounded-md">
      <LocationIcon width="15" height="15" />
      <div>
        <strong className="capitalize text-stone-700">{name}</strong>
        <p className="capitalize text-stone-500 text-xs">{subtitle}</p>
      </div>
    </div>
  );
}
