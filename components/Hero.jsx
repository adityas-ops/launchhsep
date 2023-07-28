import Link from "next/link";
import React from "react";
import Marquees from "./Marquees";

function Hero() {
  return (
    <>
    <div className=" 4xl:[zoom:1] lg:[zoom:0.9675] 3xl:aspect-[1920/1082] relative flex aspect-[393/412] max-h-screen w-full  overflow-hidden bg-neutral-900 bg-cover bg-center bg-repeat  md:aspect-[393/414]  lg:aspect-[1280/1046] bg-hero">
      <div className=" w-full  h-full max-w-[1280px] mx-auto">
        <div className=" flex items-center w-fit md:top-[112px] top-[54px] md:left-[154px] left-[70px] absolute justify-center">
         </div>
        {/*  */}
        <div className="w-full h-full  flex items-center justify-center">
          <div>
            <div className=" font-HeadLand text-center text-[1.25rem] md:text-[3rem] leading-normal font-[400] text-white">
              Dare to Dream, Learn to Build
            </div>
            <div className=" font-Inter hidden md:block text-[18px]  md:mt-4 leading-[1.9] text-[#ffffffbf] font-[500] text-center  ">
              Explore the world of entrepreneurship and launch your
              entrepreneurial journey being a <br/>part of the world&apos;s most
              exclusive <span className=" font-[600] text-[#ffffffe6]">Launch High School Entrepreneurship Program</span>
            </div>
            <div className=" font-Inter block md:hidden text-[14px] px-5  mt-4 leading-[1.9] text-[#ffffffbf] font-[500] text-center  ">
              Explore the world of entrepreneurship and launch your
              entrepreneurial journey being a part of the world&apos;s most
              exclusive <span className=" font-[600] text-[#ffffffe6]">Launch High School Entrepreneurship Program</span>
            </div>

          </div>
        </div>
      </div>
    </div>
    <section className="4xl:[zoom:1] lg:[zoom:0.9675] bg-neutral-100">
        <div className="xs:px-5 container mx-auto space-y-8 px-4 sm:px-6 md:px-7 lg:px-8 lg:!max-w-[1260px]">
          <div style={{ opacity: "1", transform: "none" }}>
            <section className="md:pt-[50px] pt-[25px] xs:pb-8 pb-6 px-[2.5rem] sm:pb-10">
              <h2 className="text-lg font-bold text-[#000] text-[1.25rem] font-HeadLand tracking-[-0.8px]">
              From ideas to ventures
              </h2>
              <div className="mt-2 py-3 sm:mt-3">
                <div className="flex flex-nowrap overflow-hidden whitespace-nowrap">
                  <Marquees />
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
