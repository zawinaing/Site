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
      link: "https://www.facebook.com",
      icon: <FacebookIcon />,
    },
    {
      key: 2,
      link: "https://www.twitter.com",
      icon: <TwitterIcon />,
    },
    {
      key: 3,
      link: "https://www.linkedin.com",
      icon: <LinkedInIcon />,
    },
    {
      key: 4,
      link: "https://www.instagram.com",
      icon: <InstagramIcon />,
    },
  ];

  return (
    <footer className="bg-[#05134b] px-20 pb-20 pt-12">
      <div className="max-w-[1600px] mx-auto flex flex-shrink-0 gap-28 h-full relative">
        <div className="text-[10px] text-gray-400 mt-auto absolute bottom-0">
          &copy;eSupralife 2011 All right reserved
        </div>
        <div className="flex flex-col h-full">
          <a href="https://www.esupralife.com" className="cursor-pointer">
            <Image
              width={20}
              height={20}
              src="/footer_logo.svg"
              alt="logo"
              className="w-28 h-w-28"
            />
          </a>
          <div className="space-x-2 mt-5">
            {icons.map(({ icon, link, key }) => (
              <Fragment key={key}>
                <SocialIcons icon={icon} link={link} />
              </Fragment>
            ))}
          </div>
        </div>

        <nav className="flex flex-col">
          <label aria-hidden htmlFor="#">
            <strong className="text-white font-serif tracking-wide">
              Navigation
            </strong>
          </label>

          <ul className="text-gray-400 text-xs space-y-2 font-semibold">
            <li className="mt-5 hover:text-white cursor-pointer">
              <a href="https://www.esupra.com/home">Home</a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <a href="https://www.esupra.com/about">About</a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <a href="https://www.esupra.com/pricacy">Resources</a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <a href="https://www.esupra.com/help">Help</a>
              /FAQS
            </li>
            <li className="hover:text-white cursor-pointer">
              <a href="https://www.esupra.com/testimonials">Testimonials</a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <a href="https://www.esupra.com/blog">Blog</a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <a href="https://www.esupra.com/newsletter">Newsletter</a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <a href="https://www.esupra.com/contact">Contact</a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <a href="https://www.esupra.com/sitemap">Sitemap</a>
            </li>
          </ul>
        </nav>
        <div>
          <label aria-hidden htmlFor="#">
            <strong className="text-white font-serif tracking-wide">
              Specialties
            </strong>
          </label>
          <p className="text-gray-300 text-xs mt-5 hover:text-white cursor-pointer">
            A-Z List
          </p>
        </div>
        <div className="flex flex-col items-start">
          <label aria-hidden htmlFor="#">
            <strong className="text-white font-serif tracking-wide">
              Portals
            </strong>
          </label>
          <a href="https://www.esupralife.com/singup">
            <button className="group mt-5 w-full rounded-[40px] bg-[#DF1119] hover:bg-[#c53f43] active:bg-[#661f1f] px-3 py-4 inline-flex items-center justify-between gap-2 font-poppins tracking-widest">
              <div className="group text-white text-xs font-semibold">
                Sign Up
              </div>
              <div className="group-hover:translate-x-2 transition-transform duration-200">
                <ChevronIcon />
              </div>
            </button>
          </a>
          <a href="https://www.esupralife.com/login" className="w-full">
            <button className="group mt-5 w-full rounded-[40px] bg-[#2A4C93] hover:bg-[#476cbd] active:bg-[#192c55] px-3 py-4 inline-flex items-center justify-between gap-2 font-poppins tracking-widest">
              <div className="group text-white text-xs font-semibold">
                Login
              </div>
              <div className="group-hover:translate-x-2 transition-transform duration-200">
                <ChevronIcon />
              </div>
            </button>
          </a>
        </div>
        <nav className="flex flex-col">
          <label aria-hidden htmlFor="#">
            <strong className="text-white font-serif tracking-wide">
              Legal
            </strong>
          </label>

          <ul className="text-gray-400 text-xs space-y-2 font-semibold">
            <li className="mt-5 hover:text-white cursor-pointer">
              <a href="https://www.esupra.com/privacy"></a>
              Privacy
            </li>
            <li className="hover:text-white cursor-pointer">
              <a href="https://www.esupra.com/poicy">Cookie Policy</a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <a href="https://www.esupra.com/terms">Terms & Conditions</a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <a href="https://www.esupra.com/accessiblity">Accessibility</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
