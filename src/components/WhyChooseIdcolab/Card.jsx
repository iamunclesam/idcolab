import React from "react";
import { cards } from "./data";

function Card() {
  return (
    <section className="flex grid sm:grid-cols-2 w-full mt-6 gap-9 justify-center self-center items-center">
        {cards.map((info, i) => {
          return (
            <div
              key={i + 1}
              className="flex flex-col w-full p-6 rounded-[18px] mx-auto gap-4 md:gap-6 bg-black/10 border border-white dark:border-white shadow-md hover:shadow-slate-400 hover:shadow-slate-400 hover:shadow-lg justify-center items-start"
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
