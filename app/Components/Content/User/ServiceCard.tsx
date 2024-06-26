export default function ServiceCard({
  icon,
  price,
}: {
  icon: any;
  price: number;
}) {
  return (
    <div className="group cursor-pointer flex flex-col justify-between border-[3px] border-[#2C4999] hover:border-[#4264c4] hover:-translate-y-[1px] transition-transform duration-100 rounded-[5px] h-full overflow-hidden">
      <div className="bg-stone-200 inline-flex items-center justify-center w-full h-full min-w-[30px] rounded-[inherit] p-[4px]">
        {icon}
      </div>
      <div className=" bg-[#2C4999] group-hover:bg-[#4264c4] w-full h-full text-stone-200 text-center font-semibold text-[8px]">
        <h3>${price}</h3>
      </div>
    </div>
  );
}
