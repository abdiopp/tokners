import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="mt-4">
          <p className="text-gray-100 text-4xl not-italic font-bold text-center leading-[54px]">
            How to Buy?
          </p>
          <div
            id="cards"
            className="grid md:grid-cols-3 px-10 gap-4 mt-3 relative"
          >
            <div className="w-full h-[270px] bg-[#171b29] flex flex-row items-center py-8 px-5 rounded-[25px]">
              <div className="text-xs  font-bold opacity-60 leading-[24px] text-white self-start">
                01
              </div>
              <div className="text-lg  font-bold leading-[24px] text-white w-full">
                First Connect your Metamask or TrustWallet to the "Connect
                Wallet" on the Homepage.
              </div>
            </div>
            <div className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="86"
                height="86"
                viewBox="0 0 86 86"
                fill="none"
              >
                <circle cx="43" cy="43" r="43" fill="red" />
              </svg>
              <div className="w-full h-[270px] bg-[#171b29] flex flex-row items-center py-8 px-5 rounded-[25px] md:mt-10">
                <div className="text-xs  font-bold opacity-60 leading-[24px] text-white self-start">
                  02
                </div>
                <div className="text-lg  font-bold leading-[24px] text-white w-full">
                  Then send minimum of 0.1 BNB or maximum of 10 BNB to the
                  Presale wallet
                </div>
              </div>
            </div>
            <div className="w-full h-[270px] bg-[#171b29] flex flex-row items-center py-8 px-5 rounded-[25px]">
              <div className="text-xs  font-bold opacity-60 leading-[24px] text-white self-start">
                03
              </div>
              <div className="text-lg  font-bold leading-[24px] text-white w-full">
                Then after you will received your $WNTR to your address within
                24hours.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
