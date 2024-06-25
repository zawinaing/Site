// TODO: Change Type - "icon"
export default function Options({
  icon,
  color,
  text,
}: {
  icon?: any;
  color: string;
  text: string;
}) {
  return (
    <div
      style={{ backgroundColor: color }}
      className="w-full text-stone-200 font-semibold rounded-[20px] text-lg 
      px-2 py-1 text-center inline-flex items-center "
    >
      <div>{icon}</div>
      <p className="w-full text-center text-sm">{text}</p>
    </div>
  );
}
