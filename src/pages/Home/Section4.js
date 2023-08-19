import React from "react";
import one from "../../assets/img/ellipse-18-1.svg";
import two from "../../assets/img/ellipse-19-1.svg";
import three from "../../assets/img/ellipse-20-1.svg";

export default function Section4() {
  return (
    <>
      <section>
        <div className="h-[1020px] testingImage text-center flex flex-col flex-shrink-0 justify-center items-center">
          <h1 className="text-5xl font-bold text-white mt-12 md:mt-24">
            Presale Details
          </h1>

          <div
            id="cards"
            className="grid md:grid-cols-3 gap-12 px-4 md:px-[80px] md:mt-7 w-full"
          >
            {/* card */}
            <div className="card bg-white rounded-3xl md:flex flex-col text-center py-16 hidden">
              <img src={one} alt="one" className="h-24" />
              <h5 className="card-title mt-10">Phase One</h5>
              <div className="text-gray-900 text-center text-base not-italic font-bold leading-5 opacity-60">
                0/04/2021 - 16/04/2021
              </div>
              <div className="text-gray-900 text-center text-xl not-italic font-bold leading-5 mt-16">
                1 BNB = 100000 WNTR
              </div>
              <div className="text-gray-900 text-center text-base not-italic font-normal leading-5">
                Soft cap:{" "}
                <span className="text-gray-900 text-base not-italic font-bold leading-5 opacity-100">
                  5000 BNB
                </span>
              </div>
              <div className="text-gray-900 text-center text-base not-italic font-normal leading-5">
                Hard cap:{" "}
                <span className="text-gray-900 text-base not-italic font-bold leading-5 opacity-100">
                  10000 BNB
                </span>
              </div>
            </div>
            {/* card */}
            {/* card */}
            <div className="card bg-white rounded-3xl flex flex-col text-center py-16 mt-11 md:h-full">
              <img src={two} alt="one" className="h-24" />
              <h5 className="card-title md:mt-10">Phase One</h5>
              <div className="text-gray-900 text-center text-base not-italic font-bold leading-5 opacity-60">
                0/04/2021 - 16/04/2021
              </div>
              <div className="text-gray-900 text-center text-xl not-italic font-bold leading-5 mt-16">
                1 BNB = 100000 WNTR
              </div>
              <div className="text-gray-900 text-center text-base not-italic font-normal leading-5">
                Soft cap:{" "}
                <span className="text-gray-900 text-base not-italic font-bold leading-5 opacity-100">
                  5000 BNB
                </span>
              </div>
              <div className="text-gray-900 text-center text-base not-italic font-normal leading-5">
                Hard cap:{" "}
                <span className="text-gray-900 text-base not-italic font-bold leading-5 opacity-100">
                  10000 BNB
                </span>
              </div>
            </div>
            {/* card */}
            {/* card */}
            <div className="card bg-white rounded-3xl md:flex flex-col text-center py-16 hidden">
              <img src={three} alt="one" className="h-24" />
              <h5 className="card-title mt-10">Phase One</h5>
              <div className="text-gray-900 text-center text-base not-italic font-bold leading-5 opacity-60">
                0/04/2021 - 16/04/2021
              </div>
              <div className="text-gray-900 text-center text-xl not-italic font-bold leading-5 mt-16">
                1 BNB = 100000 WNTR
              </div>
              <div className="text-gray-900 text-center text-base not-italic font-normal leading-5">
                Soft cap:{" "}
                <span className="text-gray-900 text-base not-italic font-bold leading-5 opacity-100">
                  5000 BNB
                </span>
              </div>
              <div className="text-gray-900 text-center text-base not-italic font-normal leading-5">
                Hard cap:{" "}
                <span className="text-gray-900 text-base not-italic font-bold leading-5 opacity-100">
                  10000 BNB
                </span>
              </div>
            </div>
            {/* card */}
          </div>
        </div>
      </section>
    </>
  );
}
