import React from "react";
import image from "../../assets/img/group-34.png";

export default function Section1() {
  return (
    <>
      <section>
        <>
          <div className="grid  pt-[70px] sm:mt-12 grid-cols-1 md:grid-cols-2">
            <div className="w-full  items-start">
              <img
                src={image}
                className="-scale-x-100 md:scale-100"
                alt="vectorImage"
              />
            </div>
            <div className="flex flex-col h-[700px] md:h-auto  md:justify-around items-center pt-16 relative overflow-x-hidden bg-white rounded-tr-[220px] md:rounded-tr-none md:rounded-tl-[160px] lg:rounded-tl-[290px]">
              <div className="w-11/12">
                <div className="text-gray-900 text-3xl   xl:text-5xl font-bold  ">
                  What makes us different?
                </div>
                <p className="text-gray-900 xl:text-base text-sm font-bold  leading-5 opacity-60">
                  We would only launch tokens with the express permission of the
                  creators.
                </p>
                <p className="text-gray-900  w-auto md:w-auto  xl:text-base text-sm  leading-6  opacity-60">
                  There are several thousand celebrities and creators on
                  twitter, tiktok, Instagram and YouTube with followings in the
                  millions who we would be actively engaging before we go viral.{" "}
                  <br />
                  <br />
                  We would get them on our platform and they would see the
                  opportunity to create a fan driven digital economy where their
                  digital content can be traded as NFTs and their most loyal
                  fans can have the monetary value of their creator&#39;s
                  currency increase significantly as they promote their digital
                  currency across their channels while our native token holders
                  benefit from the Weentar popularity.
                </p>
              </div>
              <div className="h-48    top-[230px]   w-full absolute">
                <img
                  alt="Vector"
                  src="https://file.rendit.io/n/uzZkJxc4SIpxZWEh3pQH.svg"
                />
              </div>
            </div>
          </div>
        </>
      </section>
    </>
  );
}
