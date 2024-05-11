import React from "react";
import { cards } from "./data";

function Card() {
  return (
    <section className="flex grid md:grid-cols-2 w-full mt-6 gap-4 lg:gap-9 justify-center self-center items-center">
        {cards.map((info, i) => {
          return (
            <div
              key={i + 1}
              className="flex flex-col w-full p-6 rounded-[18px] mx-auto gap-4 lg:gap-6 bg-black/10 border border-white dark:border-white shadow-mdtransform transition-transform duration-300 hover:scale-105 justify-center items-start"
            >
              <div className="flex flex-row gap-4 items-center">
                <img src={info.img} alt="" className="" />
                <div className="dark:text-[#fff] text-black font-bold text-lg md:text-[25px] leading-[19px] md:leading-[32px]">
                  {info.tittle}
                </div>
              </div>
              <div className="dark:text-[#fff] text-xs md:text-sm">
                {info.discr}
              </div>
            </div>
          );
        })}
    </section>
  );
}

export default Card;
