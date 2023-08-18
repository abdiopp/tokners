import React from "react";
import image from "../../assets/img/group-34.png";

export default function Section1() {
  return (
    <>
      <section>
        <div className="pt-7">
          <div className="flex mt-[50px] sm:mt-12 flex-wrap md:flex-nowrap">
            <div className="w-full sm:w-1/2 items-start">
              <img
                src={image}
                className="-scale-x-100 md:scale-100"
                alt="vectorImage"
              />
            </div>
            <div className="w-full sm:w-1/2 items-start overflow-hidden relative flex bg-white rounded-tr-[220px] px-2 md:px-16   md:rounded-tr-none md:rounded-tl-[290px]">
              <div className="flex overflow-x-hidden  h-[646px] sm:h-auto">
                <div className=" pt-20">
                  <div className="text-gray-900 text-3xl sm:text-lg  xl:text-5xl font-bold md-left-[100px] sm:top-[40px] top-[160px] md:top-[198px] xl:top-[228px] tracking-normal absolute ">
                    What makes us different?
                  </div>
                  <p className="text-gray-900 xl:text-base text-sm font-bold tracking-normal leading-5 sm:top-[80px] top-[240px] md:top-[250px] xl:top-[300px]  md-left-[100px] opacity-60 absolute">
                    We would only launch tokens with the express permission of
                    the creators.
                  </p>
                  <p className="text-gray-900 sm:text-xs w-auto md:w-auto sm:w-[300px]  xl:text-base text-sm font-normal tracking-normal leading-6 sm:top-[120px] top-[280px] md:top-[300px] xl:top-[350px] md-left-[100px] opacity-60 absolute">
                    There are several thousand celebrities and creators on
                    twitter, tiktok, Instagram and YouTube with followings in
                    the millions who we would be actively engaging before we go
                    viral. <br />
                    <br className="hidden md:block" />
                    We would get them on our platform and they would see the
                    opportunity to create a fan driven digital economy where
                    their digital content can be traded as NFTs and their most
                    loyal fans can have the monetary value of their
                    creator&#39;s currency increase significantly as they
                    promote their digital currency across their channels while
                    our native token holders benefit from the Weentar
                    popularity.
                  </p>
                  <div className="h-48  md-left-[100px] top-[175px] xl:top-[170px] sm:top[20px] w-full absolute">
                    <img
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
