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
      className="hover:-translate-y-[1px]  w-full text-stone-200 font-semibold rounded-[20px] text-lg 
      p-2 text-center inline-flex items-center cursor-pointer active:"
    >
      <div>{icon}</div>
      <p className="w-full text-center text-sm">{text}</p>
    </div>
  );
}
