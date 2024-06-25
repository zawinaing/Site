import Image from "next/image";
import { Fragment } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  ChevronIcon,
} from "@/assets/index.icon";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  const icons = [
    {
      key: 1,

      icon: <FacebookIcon />,
    },
    {
      key: 2,

      icon: <TwitterIcon />,
    },
    {
      key: 3,

      icon: <LinkedInIcon />,
    },
    {
      key: 4,

      icon: <InstagramIcon />,
    },
  ];

  return (
    <footer className="bg-[#05134b] px-20 pb-20 pt-12 flex flex-shrink-0 gap-28 h-full relative">
      <div className="text-[10px] text-gray-400 mt-auto absolute bottom-0">
        &copy;eSupralife 2011 All right reserved
      </div>
      <div className="flex flex-col h-full">
        <Image
          width={20}
          height={20}
          src="/bottom_logo.svg"
          alt="logo"
          className="w-28 h-w-28"
        />
        <div className="space-x-2 mt-5">
          {icons.map(({ icon, key }) => (
            <Fragment key={key}>
              <SocialIcons icon={icon} />
            </Fragment>
          ))}
        </div>
      </div>

      <nav className="flex flex-col">
        <label aria-hidden htmlFor="#">
          <strong className="text-white">Navigation</strong>
        </label>

        <ul className="text-gray-400 text-xs space-y-2 font-semibold">
          <li className="mt-5">Home</li>
          <li>About</li>
          <li>Resources</li>
          <li>Help/FAQS</li>
          <li>Testimonials</li>
          <li>Blog</li>
          <li>Newsletter</li>
          <li>Contact</li>
          <li>Sitemap</li>
        </ul>
      </nav>
      <div>
        <label aria-hidden htmlFor="#">
          <strong className="text-white">Specialties</strong>
        </label>
        <p className="text-gray-300 text-xs mt-5">A-Z List</p>
      </div>
      <div className="flex flex-col items-start">
        <label aria-hidden htmlFor="#">
          <strong className="text-white">Portals</strong>
        </label>
        <button className="mt-5 w-full rounded-[40px] bg-[#DF1119] px-3 py-1 inline-flex items-center justify-between gap-2">
          <div className=" text-white text-xs font-semibold">Sign Up</div>
          <ChevronIcon />
        </button>
        <button className="mt-5 w-full rounded-[40px] bg-[#2A4C93] px-3 py-1 inline-flex items-center justify-between gap-2">
          <div className=" text-white text-xs font-semibold">Login</div>
          <ChevronIcon />
        </button>
      </div>
      <nav className="flex flex-col">
        <label aria-hidden htmlFor="#">
          <strong className="text-white">Legal</strong>
        </label>

        <ul className="text-gray-400 text-xs space-y-2 font-semibold">
          <li className="mt-5">Privacy</li>
          <li>Cookie Policy</li>
          <li>Terms & Conditions</li>
          <li>Accessibility</li>
        </ul>
      </nav>
    </footer>
  );
}
