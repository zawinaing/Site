import Image from "next/image";
import StarRating from "../StarRating/StarRating";
import HospitalLocations from "./HospitalLocations";
import Options from "./Options";
import Price from "./Price";
import ServiceCard from "./ServiceCard";
import {
  SlashIcon,
  MessageIcon,
  CalendarIcon,
} from "../../../../assets/index.icon";

export default function UserCard({
  isRecommended = false,
}: {
  isRecommended: boolean;
}) {
  return (
    <>
      {isRecommended && (
        <div className="uppercase text-xs font-semibold px-3 py-2 text-white w-full bg-[#DD5A19] relative">
          highly recommended
        </div>
      )}
      <article className="flex bg-[#F2F2F2] rounded-[5px] space-x-3 h-[250px] mb-5">
        <div className="px-3 py-2 flex flex-shrink-0 gap-3 rounded-[5px] justify-between">
          <div className="flex flex-col items-center justify-center bg-[#ffff] p-5 rounded-[inherit] border-2 border-[gray-400/60]">
            {/* TODO Live icon */}
            <Image
              width={100}
              height={50}
              src="/demo.jpg"
              alt="user"
              className="w-[120px] h-[130px] rounded-full object-cover"
            />
            <div className="mt-3">
              <h3 className="text-blue-700 font-bold">Live</h3>
            </div>
            <div className="mt-auto mb-3 text-center text-sm text-stone-700">
              <strong>Avg Rating 4/5</strong>
              <StarRating />
            </div>
          </div>

          <div className="min-w-[680px] group bg-[#fff] p-5 rounded-[inherit] border-2 border-[gray-400/60] space-y-3 relative">
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 absolute bottom-5 right-5 flex items-center gap-2">
              <div className="text-xs text-gray-400 font-semibold">
                hide this profile
              </div>
              <SlashIcon />
            </div>
            <strong className="text-3xl text-[#4D79DC]">
              Dr Nader Khandanpour
            </strong>
            <h3 className="text-xl text-stone-700 font-semibold tracking-wide">
              Consultant Neuroradiobgist
            </h3>
            <div className="uppercase font-medium text-stone-500 text-xs flex">
              <h3 className="mr-5">fellowship trained</h3>
              <div className="not-last:border-r-2 not-last:border-r-blue-500 px-1 uppercase text-[#2C4999] font-semibold tracking-wide">
                vascular neurology
              </div>
              <div className="not-last:border-r-2 not-last:border-r-blue-500 px-1 uppercase text-[#2C4999] font-semibold tracking-wide">
                headache medicine
              </div>
              <div className="not-last:border-r-2 not-last:border-r-blue-500 px-1 uppercase text-[#2C4999] font-semibold tracking-wide">
                epilepsy
              </div>
            </div>
            <div className="flex gap-5">
              <HospitalLocations
                title="Spire Little Aston hospital"
                address="Sutton Conldfield little aston halt"
              />
              <HospitalLocations
                title="Spire Little Aston hospital"
                address="Sutton Conldfield little aston halt"
              />
            </div>
            <p className="truncate text-[10px] font-bold text-stone-700">
              An expert witness issuing medico legal reports, appearing in court
              personal / sport injuries and clinical negligence
            </p>
            <span className="text-blue-600 font-bold tracking-wide text-sm">
              See more
            </span>
          </div>

          <div className="flex flex-col justify-between gap-3">
            <ServiceCard icon={<MessageIcon />} price={25} />
            <ServiceCard icon={<MessageIcon />} price={25} />
            <ServiceCard icon={<MessageIcon />} price={25} />
            <ServiceCard icon={<MessageIcon />} price={25} />
            <ServiceCard icon={<MessageIcon />} price={25} />
            <ServiceCard icon={<MessageIcon />} price={25} />
          </div>

          <div className="w-fit border-l border-l-gray-400/60 pl-5 flex flex-shrink-0 gap-3 justify-between">
            <div className="flex flex-col justify-between gap-3">
              <Price isLimitedTimeOffer={false} />
            </div>

            <div className="flex flex-col justify-between relative">
              <div
                style={{ backgroundColor: "#0B1B3C" }}
                className="w-full text-stone-200 font-semibold rounded-[20px] text-lg 
              px-2 py-1 text-center inline-flex items-center relative"
              >
                <CalendarIcon />
                <p className="w-full text-center text-sm">Check Avalibility</p>
                <div className="absolute top-[28.5px] right-0 bg-white p-5 text-3xl rounded-[10px] shadow-[0px_20px_20px_10px_#00000024]">
                  <div className="flex items-center justify-center mx-[10px] space-x-5">
                    <div className="text-center w-8">
                      <p className="font-bold text-[11px] text-black leading-[2px]">
                        Mon
                      </p>
                      <p className="font-medium text-gray-700 text-[8px]">
                        11th Apr
                      </p>
                    </div>
                    <div className="text-center w-8">
                      <p className="font-bold text-[11px] text-black leading-[2px]">
                        Tue
                      </p>
                      <p className="font-medium text-gray-700 text-[8px]">
                        11th Apr
                      </p>
                    </div>
                    <div className="text-center w-8">
                      <p className="font-bold text-[11px] text-black leading-[2px]">
                        Wed
                      </p>
                      <p className="font-medium text-gray-700 text-[8px]">
                        11th Apr
                      </p>
                    </div>
                    <div className="text-center w-8">
                      <p className="font-bold text-[11px] text-black leading-[2px]">
                        Thu
                      </p>
                      <p className="font-medium text-gray-700 text-[8px]">
                        11th Apr
                      </p>
                    </div>
                    <div className="text-center w-8">
                      <p className="font-bold text-[11px] text-black leading-[2px]">
                        Fri
                      </p>
                      <p className="font-medium text-gray-700 text-[8px]">
                        11th Apr
                      </p>
                    </div>
                    <div className="text-center w-8">
                      <p className="font-bold text-[11px] text-black leading-[2px]">
                        Sat
                      </p>
                      <p className="font-medium text-gray-700 text-[8px]">
                        11th Apr
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-300 grid grid-cols-6 grid-rows-4 text-[11px] text-center">
                    <div className="bg-[#2C4999] border-l border-l-gray-400 border-b border-b-white px-2 py-1">
                      09:00
                    </div>
                    <div className="border-l border-l-gray-400 px-2 py-1"></div>
                    <div className="border-l border-l-gray-400 px-2 py-1"></div>
                    <div className="border-l border-l-gray-400 px-2 py-1"></div>
                    <div className="border-l border-l-gray-400 px-2 py-1"></div>
                    <div className="border-l border-l-gray-400 px-2 py-1"></div>
                    <div className="bg-[#2C4999] border-l border-l-gray-400 px-2 py-1">
                      09:30
                    </div>
                    <div className="border-l border-l-gray-400 px-2 py-1"></div>
                    <div className="border-l border-l-gray-400 px-2 py-1"></div>
                    <div className="border-l border-l-gray-400 px-2 py-1"></div>
                    <div className="border-l border-l-gray-400 px-2 py-1"></div>
                    <div className="border-l border-l-gray-400 px-2 py-1"></div>
                    <div className="bg-[#2C4999] border-l border-l-gray-400 px-2 py-1">
                      10:00
                    </div>
                    <div className="border-l border-l-gray-400 px-2 py-1"></div>
                    <div className="border-l border-l-gray-400 px-2 py-1"></div>
                    <div className="border-l border-l-gray-400 px-2 py-1"></div>
                    <div className="border-l border-l-gray-400 px-2 py-1"></div>
                    <div className="border-l border-l-gray-400 px-2 py-1"></div>

                    <div className="bg-[#2C4999] border-l border-l-gray-400 px-2 py-1">
                      10:30
                    </div>
                    <div className="border-l border-l-gray-400 px-2 py-1"></div>
                    <div className="border-l border-l-gray-400 px-2 py-1"></div>
                    <div className="border-l border-l-gray-400 px-2 py-1"></div>
                    <div className="border-l border-l-gray-400 px-2 py-1"></div>
                    <div className="border-l border-l-gray-400 px-2 py-1"></div>
                  </div>
                </div>
              </div>
              <Options color="#4F7DDB" text="View Profile" />
              <Options color="#2B4C93" text="Order" />
              <Options color="#2B4C93" text="Invite to Bid" />
              <Options color="#2B4C93" text="Propose Price Match" />
              <Options color="#FFC300" text="Enquire" />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
