import Link from "next/link";
import React from "react";
import Marquees from "./Marquees";

function Hero() {
  return (
    <>
    <div className=" 4xl:[zoom:1] lg:[zoom:0.9675] 3xl:aspect-[1920/1082] relative flex aspect-[393/412] max-h-screen w-full  overflow-hidden bg-neutral-900 bg-cover bg-center bg-repeat  md:aspect-[393/414]  lg:aspect-[1280/1046] bg-hero">
      <div className=" w-full  h-full max-w-[1280px] mx-auto">
        <div className=" flex items-center w-fit md:top-[112px] top-[54px] md:left-[154px] left-[70px] absolute justify-center">
          <div className=" md:w-[22px] w-[14px] h-[16px]  md:h-[26px] md:mr-2 mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="26"
              viewBox="0 0 22 26"
              fill="none" 
              className="md:block hidden"
            >
              <g clip-path="url(#clip0_5_8)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.22406 3.31128L3.65923 8.06263L2.56681 11.3775C1.21087 15.4891 2.06631 19.4982 5.48146 20.6013L7.69999 13.8486C8.82663 10.4318 8.49313 5.02669 5.22406 3.31128Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.56683 11.3774L0.494356 17.6538C0.263058 18.3599 0.106972 19.0875 0.0285849 19.825C-0.306443 23.3443 2.35846 23.6417 5.14032 22.9919C6.99676 22.5481 8.9104 21.7309 10.6228 20.7427C3.69398 22.5341 0.994855 17.2654 2.56683 11.3774Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22 14.8447C19.538 16.2539 16.3479 16.9915 12.4297 17.0575C13.0407 17.7058 13.7295 18.2794 14.4812 18.7659C9.66163 23.0679 2.01982 25.2596 0.494324 23.0679C1.40544 25.1007 3.56831 26.2908 6.80265 25.9379C10.607 25.5155 14.9613 23.2693 17.0823 21.5674C17.2498 22.4171 17.3121 23.2898 17.3377 24.202C19.5548 21.4434 21.1444 18.2531 22 14.8447Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.56683 11.3774C1.47492 15.476 2.44886 19.2747 5.48147 20.6012L5.74551 19.784C2.83138 18.4345 1.88554 14.216 2.56683 11.3774Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.95953 4.1145C7.35223 6.02734 8.36752 10.8622 7.70002 13.8486C8.59735 10.8397 8.41502 5.49652 5.22408 3.31128L4.95953 4.1145Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.6228 20.7427C3.69397 22.5341 0.994853 17.2654 2.56683 11.3774L2.1986 12.4871C0.598539 18.2256 4.12502 23.1809 10.6228 20.7427Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.5985 17.3609C0.0699112 20.0429 1.21748 21.9013 3.97176 22.1737C6.14178 22.3921 8.86133 21.6289 10.6228 20.7427C4.12497 23.1809 0.5985 18.2256 2.19856 12.4871L0.5985 17.3609Z"
                  fill="white"
                />
                <path
                  opacity="0.3"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.8826 18.9269C18.0304 19.8655 18.0791 20.8165 18.0282 21.7649C19.0536 20.197 19.8847 18.5152 20.5041 16.7551C19.1824 17.4019 17.7289 17.8378 16.2754 18.1302C16.7693 18.4231 17.3535 18.6885 17.8821 18.9269H17.8826Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.494324 23.0654C1.39165 24.6238 3.35432 24.7398 5.48808 24.236C9.27195 23.3363 12.6891 21.2815 15.5384 18.6879C15.017 18.3475 14.495 18.0206 14.0012 17.6258C17.472 17.1972 20.1382 16.2702 22 14.8447C19.538 16.2539 16.3479 16.9915 12.4297 17.0575C13.0407 17.7058 13.7295 18.2794 14.4812 18.7659C9.66163 23.0679 2.01982 25.2596 0.494324 23.0679V23.0654Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_5_8">
                  <rect width="22" height="26" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="16"
              viewBox="0 0 22 26"
              fill="none" 
              className="md:hidden block"
            >
              <g clip-path="url(#clip0_5_8)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.22406 3.31128L3.65923 8.06263L2.56681 11.3775C1.21087 15.4891 2.06631 19.4982 5.48146 20.6013L7.69999 13.8486C8.82663 10.4318 8.49313 5.02669 5.22406 3.31128Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.56683 11.3774L0.494356 17.6538C0.263058 18.3599 0.106972 19.0875 0.0285849 19.825C-0.306443 23.3443 2.35846 23.6417 5.14032 22.9919C6.99676 22.5481 8.9104 21.7309 10.6228 20.7427C3.69398 22.5341 0.994855 17.2654 2.56683 11.3774Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22 14.8447C19.538 16.2539 16.3479 16.9915 12.4297 17.0575C13.0407 17.7058 13.7295 18.2794 14.4812 18.7659C9.66163 23.0679 2.01982 25.2596 0.494324 23.0679C1.40544 25.1007 3.56831 26.2908 6.80265 25.9379C10.607 25.5155 14.9613 23.2693 17.0823 21.5674C17.2498 22.4171 17.3121 23.2898 17.3377 24.202C19.5548 21.4434 21.1444 18.2531 22 14.8447Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.56683 11.3774C1.47492 15.476 2.44886 19.2747 5.48147 20.6012L5.74551 19.784C2.83138 18.4345 1.88554 14.216 2.56683 11.3774Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.95953 4.1145C7.35223 6.02734 8.36752 10.8622 7.70002 13.8486C8.59735 10.8397 8.41502 5.49652 5.22408 3.31128L4.95953 4.1145Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.6228 20.7427C3.69397 22.5341 0.994853 17.2654 2.56683 11.3774L2.1986 12.4871C0.598539 18.2256 4.12502 23.1809 10.6228 20.7427Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.5985 17.3609C0.0699112 20.0429 1.21748 21.9013 3.97176 22.1737C6.14178 22.3921 8.86133 21.6289 10.6228 20.7427C4.12497 23.1809 0.5985 18.2256 2.19856 12.4871L0.5985 17.3609Z"
                  fill="white"
                />
                <path
                  opacity="0.3"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.8826 18.9269C18.0304 19.8655 18.0791 20.8165 18.0282 21.7649C19.0536 20.197 19.8847 18.5152 20.5041 16.7551C19.1824 17.4019 17.7289 17.8378 16.2754 18.1302C16.7693 18.4231 17.3535 18.6885 17.8821 18.9269H17.8826Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.494324 23.0654C1.39165 24.6238 3.35432 24.7398 5.48808 24.236C9.27195 23.3363 12.6891 21.2815 15.5384 18.6879C15.017 18.3475 14.495 18.0206 14.0012 17.6258C17.472 17.1972 20.1382 16.2702 22 14.8447C19.538 16.2539 16.3479 16.9915 12.4297 17.0575C13.0407 17.7058 13.7295 18.2794 14.4812 18.7659C9.66163 23.0679 2.01982 25.2596 0.494324 23.0679V23.0654Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_5_8">
                  <rect width="22" height="26" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className=" font-HeadLand font-[400] md:text-[24px] text-[18px] text-white">
            Launch<span className="text-[#ffffff80]">HSEP</span>
          </p>
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
