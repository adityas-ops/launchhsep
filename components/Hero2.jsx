import React from "react";

function Hero2() {
  return (
    <>
      <div className=" 3xl:aspect-[1920/1082] relative flex aspect-[393/412] max-h-[90vh] w-full  overflow-hidden bg-white bg-cover bg-center bg-repeat  md:aspect-[393/414]  lg:aspect-[1280/1046]">
        <div className=" w-full  h-full max-w-[1280px] mx-auto flex flex-col justify-center">
          <div className=" px-[100px]">
            <h1 className=" font-HeadLand w-[60%] text-[2.5rem] font-[400] leading-[1.75] tracking-[-2px] text-[#7000FF]">
              30+ startups<span className="text-black"> by</span> high schoolers{" "}
              
              <span className="text-black">trying to make</span> a difference
            </h1>
            <p className=" w-[60%] mt-[22px] font-Inter leading-[1.75] font-[400] text-[1.125rem] text-[#333342]">
              Our goal is to back the exceptional teenagers with entrepreneurial
              spirit LHSEP is proud to make every aspiring teenpreneur dream
              come true with the help of our exclusive programs{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero2;
