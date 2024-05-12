import React from "react";
import Card from "./Card";

function WhyChooseIdcolab() {
  return (
    <section
      className="w-full px-[2vw] pt-24 md:pt-32 mx-auto justify-center items-center"
      id="why"
    >
      <div className="text-center mx-auto w-full justify-center items-center">
        <span className="dark:text-[#fff] text-2xl md:text-[48px] font-bold leading-[45px]">
          Why Choose IDCOLAB?
        </span>
        <hr className="w-[69px] h-[5px] mx-auto mt-3 text-center bg-[#6628c6] justify-center items-center" />
      </div>
      <div className="w-full flex flex-col">
        <Card />
      </div>
    </section>
  );
}

export default WhyChooseIdcolab;
