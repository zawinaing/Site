import Image from "next/image";
import StarRating from "../StarRating/StarRating";
import HospitalLocations from "./HospitalLocations";
import Price from "./Price";
import ServiceCard from "./ServiceCard";
import Availability from "./Availability";
import {
  SlashIcon,
  MessageIcon,
  RibbonIcon,
  PhoneIcon,
  MeetingIcon,
  VideoIcon,
  AudioMessageIcon,
  TwentyFourIcon,
} from "../../../../assets/index.icon";
import { Fragment } from "react";

type ArrayItems = "text" | "phone" | "audio" | "video" | "meet" | "24h";

export default function UserCard({
  isRecommended,
  isOffer,
  description,
  fellowShip,
  hospitals,
  image,
  name,
  services,
  position,
  rating,
}: {
  isRecommended: boolean;
  isOffer: boolean;
  description: string;
  fellowShip: string[];
  hospitals: any[];
  image: string | null;
  name: string;
  services: ArrayItems[];
  position: string;
  rating: number;
  live?: boolean;
}) {
  const servicesComponents = {
    text: <ServiceCard icon={<MessageIcon />} price={25} />,
    phone: <ServiceCard icon={<AudioMessageIcon />} price={25} />,
    audio: <ServiceCard icon={<PhoneIcon />} price={25} />,
    video: <ServiceCard icon={<VideoIcon />} price={25} />,
    meet: <ServiceCard icon={<MeetingIcon />} price={25} />,
    "24h": <ServiceCard icon={<TwentyFourIcon />} price={25} />,
  };

  return (
    <div className="w-fit mr-auto">
      {isRecommended && (
        <div className="group uppercase text-xs font-semibold px-3 py-1 text-white w-full bg-[#E6111A] hover:bg-[#d44047] relative">
          <p className="font-medium">highly recommended</p>
          <div className="absolute top-0 right-0 -translate-y-[1px] -translate-x-[10px] z-[1000] group-hover:translate-x-[1px] transition-transform duration-500">
            <RibbonIcon />
          </div>
        </div>
      )}
      <article className="w-full flex bg-[#F2F2F2] rounded-[5px] space-x-3 h-[280px] mb-5 -z-[1000px]">
        <div className="px-3 py-2 flex flex-shrink-0 gap-3 rounded-[5px] justify-between">
          <div className="flex flex-col items-center justify-center bg-[#ffff] p-5 rounded-[inherit] border-2 border-[gray-400/60]">
            {/* TODO Live icon */}
            <Image
              width={100}
              height={50}
              src={image || "/demo.jpg"}
              alt="user"
              className="w-[120px] h-[130px] rounded-full object-cover"
            />
            <div className="mt-3">
              <h3 className="text-blue-700 font-bold">Live</h3>
            </div>
            <div className="mt-auto mb-3 text-center text-sm text-stone-700">
              <strong>Avg Rating {rating}/5</strong>
              <StarRating />
            </div>
          </div>

          <div className="min-w-[640px] group bg-[#fff] p-5 rounded-[inherit] border-2 border-[gray-400/60] space-y-3 relative">
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 absolute bottom-5 right-5 flex items-center gap-2">
              <button
                type="button"
                className="inline-flex items-center gap-1 text-xs text-gray-400 font-semibold hover:-translate-y-1 transition-[transform] duration-500"
              >
                hide this profile
                <SlashIcon />
              </button>
            </div>
            <strong className="text-3xl text-[#4D79DC] font-adelle cursor-pointer">
              <a href="https:www.supralife.com">{name}</a>
            </strong>
            <h3 className="font-poppins text-xl text-[#5f5d5d] font-medium tracking-wide capitalize">
              {position}
            </h3>
            <div className="uppercase font-medium text-stone-500 text-xs flex">
              <h3 className="mr-5">fellowship trained</h3>
              {fellowShip.map((data, index) => (
                <Fragment key={index}>
                  <div className="not-last:border-r-2 not-last:border-r-blue-500 px-1 uppercase text-[#2C4999] font-semibold tracking-wide">
                    {data}
                  </div>
                </Fragment>
              ))}
            </div>
            <div className="flex gap-5 -ml-3">
              {hospitals.map(({ name, subtitle }) => (
                <Fragment key={name}>
                  <HospitalLocations name={name} subtitle={subtitle} />
                </Fragment>
              ))}
            </div>
            <div className="flex items-center flex-shrink-0 max-w-[450px]">
              <p className="truncate text-[10px] font-bold text-stone-700 ">
                An expert witness issuing medico legal reports, appearing in
                court personal / sport injuries and clinical negligence
              </p>
              <a
                href="https://www.esupralife.com/doctor/naderkhandanpour"
                className="text-blue-600 font-bold tracking-wide text-sm whitespace-nowrap"
              >
                See more
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-3">
            {services.map((service, index) => (
              <Fragment key={index}>{servicesComponents[service]}</Fragment>
            ))}
          </div>

          <div className="border-l border-l-gray-400/60 pl-5 flex flex-shrink-0 gap-3 justify-between">
            <Price isLimitedTimeOffer={isOffer} />

            <div className="w-full h-full max-w-[200px] flex flex-col flex-shrink-0 justify-between">
              <Availability />
              <div className="bg-[#4F7DDB] hover:bg-[#6b91db] hover:-translate-y-[1px] font-poppins  w-full text-stone-200 font-semibold rounded-[20px] text-lg  p-2 text-center inline-flex items-center cursor-pointer active:">
                <p className="w-full text-center text-sm">View Profile</p>
              </div>
              <div className="bg-[#2B4C93] hover:bg-[#4264c4] hover:-translate-y-[1px] font-poppins  w-full text-stone-200 font-semibold rounded-[20px] text-lg  p-2 text-center inline-flex items-center cursor-pointer active:">
                <p className="w-full text-center text-sm">Order</p>
              </div>
              <div className="bg-[#2B4C93] hover:bg-[#4264c4] hover:-translate-y-[1px] font-poppins  w-full text-stone-200 font-semibold rounded-[20px] text-lg  p-2 text-center inline-flex items-center cursor-pointer active:">
                <p className="w-full text-center text-sm">Invite to Bid</p>
              </div>
              <div className="bg-[#2B4C93] hover:bg-[#4264c4] hover:-translate-y-[1px] font-poppins  w-full text-stone-200 font-semibold rounded-[20px] text-lg  p-2 text-center inline-flex items-center cursor-pointer active:">
                <p className="w-full text-center text-sm">
                  Propose Price Match
                </p>
              </div>
              <div className="bg-[#FFC300] hover:bg-[#f1cc53] hover:-translate-y-[1px] font-poppins  w-full text-stone-200 font-semibold rounded-[20px] text-lg  p-2 text-center inline-flex items-center cursor-pointer active:">
                <p className="w-full text-center text-sm">Enquire</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
