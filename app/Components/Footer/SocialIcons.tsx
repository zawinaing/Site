// TODO: Type
export default function SocialIcons({ icon, link }: any) {
  return (
    <a
      href={link}
      className="hover:scale-[1.3] transition-transform duration-75 cursor-pointer bg-white rounded-full w-[25px] h-[25px] p-[4.5px] inline-flex items-center justify-center"
    >
      {icon}
    </a>
  );
}
