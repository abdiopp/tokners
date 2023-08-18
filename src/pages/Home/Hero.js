import React from "react";

export default function Hero() {
  return (
    <>
      <div className="md:p-12 p-4">
        <div className="flex gap-5 mt-[50px] sm:mt-12 lg:flex-nowrap flex-wrap">
          <div className="bg-[#171b29] flex flex-[1 1 48%] pt-12 pb-10 px-[60px] text-start rounded-3xl flex-col justify-between items-start gap-8 md:h-[400px]">
            <div className="self-stretch flex flex-col justify-between gap-5 items-start">
              <div
                className="shadow-[0px_15px_25px_0px_rgba(34,_167,_93,_0.25)] bg-[#22a75d] flex flex-col justify-center ml-px w-16 h-16 shrink-0 items-center rounded-[50%]"
                id="Ellipse6"
              >
                <img
                  src="https://file.rendit.io/n/gQkQMC2KhNXEiAMG7gpx.svg"
                  className="w-6"
                />
              </div>
              <div
                className="text-4xl  font-bold leading-[54px] text-white"
                id="ForCreators1"
              >
                For{" "}
                <div
                  className="underline text-[#22a75d] contents"
                  id="ForCreators"
                >
                  Creators
                </div>
              </div>
              <div className=" leading-[24px] text-white w-full">
                Creators can gain independence through a decentralised digital
                currency system that is dependent on growing and engaging with
                the community and also their star power. They own 10-15% of the
                total value of the tokens minted.
              </div>
            </div>
            <div className="flex flex-row gap-2 w-24 items-start">
              <a
                href="#"
                className="text-sm  underline font-bold text-[#22a75d]"
              >
                Learn More
              </a>
              <img
                src="https://file.rendit.io/n/8XGeHM2LhEaMF476xErp.svg"
                className="mt-1 w-3 shrink-0"
                id="Union"
              />
            </div>
          </div>

          {/*2nd  */}
          <div className=" bg-[#171b29] flex flex-[1 1 48%] pt-12 pb-10 px-[60px] text-start rounded-3xl flex-col justify-between items-start gap-8 mt-8 md:h-[400px]">
            <div className="self-stretch flex flex-col justify-between gap-5 items-start">
              <div
                className="shadow-[0px_15px_25px_0px_rgba(34,_167,_93,_0.25)] bg-[#2278d4] flex flex-col justify-center ml-px w-16 h-16 shrink-0 items-center rounded-[50%]"
                id="Ellipse6"
              >
                <img
                  src="https://file.rendit.io/n/ZENz2oO1QSRBdeyFPqyP.svg"
                  className="w-6"
                />
              </div>
              <div
                className="text-4xl  font-bold leading-[54px] text-white"
                id="ForCreators1"
              >
                For{" "}
                <div
                  className="underline text-[#2278d4] contents"
                  id="ForCreators"
                >
                  Holders
                </div>
              </div>
              <div className=" leading-[24px] text-white w-full">
                Creators can gain independence through a decentralised digital
                currency system that is dependent on growing and engaging with
                the community and also their star power. They own 10-15% of the
                total value of the tokens minted.
              </div>
            </div>
            <div className="flex flex-row gap-2 w-24 items-start">
              <a
                href="#"
                className="text-sm  underline font-bold text-[#2278d4]"
              >
                Learn More
              </a>
              <img
                src="https://file.rendit.io/n/MJ4KG0ZujmVZFzChQ0sm.svg"
                className="mt-1 w-3 shrink-0"
                id="Union"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
