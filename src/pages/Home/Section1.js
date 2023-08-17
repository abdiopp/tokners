import React from "react";
import image from "../../assets/img/group-34.png";

export default function Section1() {
  return (
    <>
      <section>
        <div class="py-7">
          <div className="flex mt-[50px] sm:mt-12 flex-wrap md:flex-nowrap">
            <div class="w-full sm:w-1/2 items-start">
              <img
                src={image}
                className="-scale-x-100 md:scale-100"
                alt="vectorImage"
              />
            </div>
            <div class="w-full sm:w-1/2 items-start flex bg-white rounded-tl-[290px]">
              <div className="flex overflow-hidden h-[500px] sm:h-auto">
                <div className="bg-white rounded-tl-[400px] pt-20">
                  <div className="text-gray-900 text-5xl font-bold left-[100px] tracking-normal leading-[54px] ">
                    What makes us different?
                  </div>
                  <p className="text-gray-900 text-base font-bold tracking-normal leading-5  left-[100px] opacity-60">
                    We would only launch tokens with the express permission of
                    the creators.
                  </p>
                  <p className="text-gray-900 text-base font-normal tracking-normal leading-6  left-[100px] opacity-60">
                    There are several thousand celebrities and creators on
                    twitter, tiktok, Instagram and YouTube with followings in
                    the millions who we would be actively engaging before we go
                    viral. <br />
                    <br />
                    We would get them on our platform and they would see the
                    opportunity to create a fan driven digital economy where
                    their digital content can be traded as NFTs and their most
                    loyal fans can have the monetary value of their
                    creator&#39;s currency increase significantly as they
                    promote their digital currency across their channels while
                    our native token holders benefit from the Weentar
                    popularity.
                  </p>
                  <div className="h-48  left-[100px] top-[17px] w-full">
                    <img
                      className="h-40  top-0 left-[113px] w-[704px]"
                      alt="Vector"
                      src="https://file.rendit.io/n/uzZkJxc4SIpxZWEh3pQH.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
