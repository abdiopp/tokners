import React from "react";
import w from "../../assets/img/group-3.png";
import woman from "../../assets/img/woman-holding-iphone-xs-in-hand-mockup-1.png";

export default function Section3() {
  return (
    <>
      <div>
        <div className=" grid grid-cols-1 md:grid-cols-2 py-16">
          <div className=" bg-[#171b29] right-0 rounded-[25px] flex md:hidden">
            <img src={woman} className="" />
          </div>
          <div className=" mx-auto text-start w-4/5 ">
            <div className="py-4 text-[#fff] text-4xl md:text-5xl font-bold leading-[54px] flex items-baseline">
              <img src={w} alt="logo" className="w-12 me-3" /> Tokners is coming
            </div>
            <div className="text-[#fff] font-[700] leading-[24px] text-sm md:text-[16px]">
              Cryptocurrency adoption is at less than 1% of the global world
              population with some countries and entities actively fighting
              against its mass adoption and the smartest developers and nerds
              holding the fort{" "}
            </div>
            <div className="my-2 opacity-60 text-[#DDE2FF] text-sm md:text-[16px] font-[400] leading-6 drop-shadow-2xl">
              Bitcoin was the first, and it has since grown to thousands of
              tokens launched all aiming to fix one problem or the other with
              some quite simply FOMOing the moment. Our goal is to bring mass
              adoption to the cryptocurrency space by dumbing it down. How far
              down? So down that even a celebrity can explain it in simple words
              to their followers and have them download an app, buy into the
              social currency of their favourite person and watch their
              investment as is with other crypto currency project.
              <br />
              <br />
              We are trying to do to this space what investment apps did for the
              "nonexistent retail investors". We are gamefying digital currency,
              bringing in popular faces instead of hard to
              <div className="hidden lg:block">
                understand projects to make it the norm and inadvertently being
                the "gateway drug" for a lot of people to finally give this
                space a real look.
              </div>
            </div>
            <div className="my-3 text-[#fff] font-[700] leading-[24px] text-sm md:text-[16px] hidden lg:block">
              A new digital economy is coming. People would be just as powerful
              as countries and creators would be paid beyond the peanuts that
              conventional social media platforms can offer.
            </div>
            <div className="my-2 text-[#fff] font-[400] leading-[24px] text-sm md:text-[16px] hidden lg:block">
              There would be new markets and advertisers with little to offer
              would not find home there. Like Kanye said,
              <div className="flex flex-row flex-wrap gap-3 my-4 items-start">
                <div className="text-2xl  font-bold leading-[24px] text-[#ffd100] mt-1 hidden lg:block">
                  “
                </div>
                <div className=" font-bold leading-[24px] italic text-[#9fa1a6] hidden lg:block">
                  "Personalities would become the new currency, and services
                  would be built on top of them"
                </div>
              </div>
              Well, Kanye didn't exactly say that, but it sounds like something
              we hope he would say.
              <br />
              <br />
              Currency is digital, it has been that way for a while now, but
              this time there would be no dead presidents on the money, there
              would people like you on the money, and you would own it because
              it would make the most sense in the world.
            </div>
            <div className="md:bg-[#22A75D] w-[147px] h-[48px] text-center leading-[47px] text-[#22A75D] md:text-black md:border md:rounded-[54px] ms:learnMoreBtn mt-5">
              <a href="">Learn More</a>
            </div>
          </div>

          <div className=" bg-[#171b29] right-0 rounded-[25px] overflow-hidden hidden md:flex">
            <img src={woman} className="" />
          </div>

          {/* <div className=" rounded-xl item2Img">
            <img src={woman} className="max-w-[700px} w-[100%]" alt="img" />
          </div> */}
        </div>
      </div>
    </>
  );
}
