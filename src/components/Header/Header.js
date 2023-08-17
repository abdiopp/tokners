import React from "react";
import logo from "../../assets/img/logo-colored-sign-black-text.svg";
import mainImg from "../../assets/img/img.png";
import bg from "../../assets/img/bg.png";

export default function Header() {
  return (
    <header style={{ background: `url(${bg}) no-repeat` }}>
      <div className="header flex py-6 px-8">
        <nav className=" w-full flex items-center capitalize md:w-100 text-white">
          <div className="logo p-1 pb-2 items-center">
            <a href="#">
              <img src={logo} alt="logo" className="logoImg" />
            </a>
          </div>
          <ul className=" hidden md:flex md:justify-between">
            <li>
              <a
                href="#team"
                className="mx-[10px]  hover:text-gray-600 transition ease-linear delay-200"
              >
                Our team
              </a>
            </li>
            <li>
              <a
                href="#token"
                className="mx-[10px]  hover:text-gray-600 transition ease-linear delay-200"
              >
                tokens
              </a>
            </li>
            <li>
              <a
                href=""
                className="mx-[10px]  hover:text-gray-600 transition ease-linear delay-200"
              >
                connect wallet
              </a>
            </li>
            <li>
              <a
                href="#buy"
                className="mx-[10px]  hover:text-gray-600 transition ease-linear delay-200"
              >
                lightpaper
              </a>
            </li>
          </ul>
          <div className="hidden md:flex items-end ms-auto me-3">
            <div className="mx-[10px] py-2 px-3 hover:text-gray-600 transition ease-linear delay-200">
              <a>Sign in</a>
            </div>
            <div className="mx-[10px] border-2 border-[#22a75d] py-2 px-4 rounded-3xl hover:bg-[#22a75d] transition ease-in-out delay-200">
              <a>Sign up</a>
            </div>
          </div>
          <div className="md:hidden items-end flex ms-auto me-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 cursor-pointer md:hidden block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </nav>
      </div>
      <div>
        <div class="flex-wrap md:flex-nowrap flex gap-6 justify-between">
          <div class="mt-52 md:ms-16 max-w-[100%] ms-3 text-start md:max-w-[39%]">
            <div class="my-2 bg-gradient-to-t from-[#2B3087] to-[#00B4EC] bg-clip-text text-transparent font-[500] text-[16px]">
              At Tokners Are
            </div>
            <div class="my-2 text-[#fff] font-[700] leading-[54px] text-[40px]">
              Reimagining social media through the power of the blockchain.
            </div>
            <div class="my-2 opacity-60 text-[#DDE2FF] text-[16px] font-[400] leading-6">
              We are creating social media 3.0 with influencers, celebrities and
              creators being able to launch their own digital currency by simply
              creating a profile with media content posted as Non fungible
              Tokens that can be owned and traded on the Tokners network
            </div>
            <div class="bg-[#22A75D] w-[147px] h-[48px] text-center leading-[47px] border rounded-[54px] learnMoreBtn mt-5">
              <a href="">Learn More</a>
            </div>
          </div>
          <div class="itemImg">
            <img src={mainImg} className="max-w-[700px} w-[100%]" alt="img" />
          </div>
        </div>
      </div>
    </header>
  );
}
