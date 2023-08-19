import React from "react";
import Hero from "./Hero";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Test2 from "../test2";
import Section3 from "./Section3";
import Section4 from "./Section4";

export default function index() {
  return (
    <>
      <Hero />
      <Section1 />
      {/* <Test2 /> */}
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
}
