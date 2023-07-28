import Link from "next/link";
import React, { useState, useEffect } from "react";

function Header() {
  const [active, setActive] = useState("developer");
  const handleButtonClick = (button) => {
    setActive(button);
  };

  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const percentage = (scrolled / height) * 100;
    setScrollPercentage(percentage);
  };
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleButton = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [isDrawerOpen]);

  const header = scrollPercentage > 8 ? "white" : "transparent";

  return (
    <>
      <header
        className={`${
          header === "white"
            ? "bg-white fixed top-0 z-20 py-4 sm:py-6  w-full transition-colors group/header"
            : " bg-transparent fixed top-0 z-20 py-4 sm:py-6  w-full transition-colors group/header"
        }`}
      >
        <div className="xs:px-5 mx-auto container space-y-8 px-4 sm:px-6 lg:px-8 lg:!max-w-[1260px] relative flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button onClick={handleButton}>
              <svg
                width={40}
                height={40}
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`z-50 !m-0 cursor-pointer group-[:not(.has-scroll-over)] lg:hidden ${
                  header === "white" ? " text-black" : " text-white"
                }`}
              >
                <path
                  d="M11 20H29M11 14H29M11 26H29"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <Link href="/" className={`flex ${ header === "white" ? " text-black" : " text-white"} `}>
              <div className=" md:w-[22px] w-[14px] h-[16px]  md:h-[26px] md:mr-2 mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="26"
                  viewBox="0 0 22 26"
                  fill="currentColor"
                  className="md:block hidden"
                >
                  <g clip-path="url(#clip0_5_8)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.22406 3.31128L3.65923 8.06263L2.56681 11.3775C1.21087 15.4891 2.06631 19.4982 5.48146 20.6013L7.69999 13.8486C8.82663 10.4318 8.49313 5.02669 5.22406 3.31128Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.56683 11.3774L0.494356 17.6538C0.263058 18.3599 0.106972 19.0875 0.0285849 19.825C-0.306443 23.3443 2.35846 23.6417 5.14032 22.9919C6.99676 22.5481 8.9104 21.7309 10.6228 20.7427C3.69398 22.5341 0.994855 17.2654 2.56683 11.3774Z"
                      fill="CurrentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22 14.8447C19.538 16.2539 16.3479 16.9915 12.4297 17.0575C13.0407 17.7058 13.7295 18.2794 14.4812 18.7659C9.66163 23.0679 2.01982 25.2596 0.494324 23.0679C1.40544 25.1007 3.56831 26.2908 6.80265 25.9379C10.607 25.5155 14.9613 23.2693 17.0823 21.5674C17.2498 22.4171 17.3121 23.2898 17.3377 24.202C19.5548 21.4434 21.1444 18.2531 22 14.8447Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.56683 11.3774C1.47492 15.476 2.44886 19.2747 5.48147 20.6012L5.74551 19.784C2.83138 18.4345 1.88554 14.216 2.56683 11.3774Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.95953 4.1145C7.35223 6.02734 8.36752 10.8622 7.70002 13.8486C8.59735 10.8397 8.41502 5.49652 5.22408 3.31128L4.95953 4.1145Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.6228 20.7427C3.69397 22.5341 0.994853 17.2654 2.56683 11.3774L2.1986 12.4871C0.598539 18.2256 4.12502 23.1809 10.6228 20.7427Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.5985 17.3609C0.0699112 20.0429 1.21748 21.9013 3.97176 22.1737C6.14178 22.3921 8.86133 21.6289 10.6228 20.7427C4.12497 23.1809 0.5985 18.2256 2.19856 12.4871L0.5985 17.3609Z"
                      fill="currentColor"
                    />
                    <path
                      opacity="0.3"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.8826 18.9269C18.0304 19.8655 18.0791 20.8165 18.0282 21.7649C19.0536 20.197 19.8847 18.5152 20.5041 16.7551C19.1824 17.4019 17.7289 17.8378 16.2754 18.1302C16.7693 18.4231 17.3535 18.6885 17.8821 18.9269H17.8826Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.494324 23.0654C1.39165 24.6238 3.35432 24.7398 5.48808 24.236C9.27195 23.3363 12.6891 21.2815 15.5384 18.6879C15.017 18.3475 14.495 18.0206 14.0012 17.6258C17.472 17.1972 20.1382 16.2702 22 14.8447C19.538 16.2539 16.3479 16.9915 12.4297 17.0575C13.0407 17.7058 13.7295 18.2794 14.4812 18.7659C9.66163 23.0679 2.01982 25.2596 0.494324 23.0679V23.0654Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5_8">
                      <rect width="22" height="26"  fill="currentColor" />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="16"
                  viewBox="0 0 22 26"
                  fill="currentColor"
                  className="md:hidden block"
                >
                  <g clip-path="url(#clip0_5_8)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.22406 3.31128L3.65923 8.06263L2.56681 11.3775C1.21087 15.4891 2.06631 19.4982 5.48146 20.6013L7.69999 13.8486C8.82663 10.4318 8.49313 5.02669 5.22406 3.31128Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.56683 11.3774L0.494356 17.6538C0.263058 18.3599 0.106972 19.0875 0.0285849 19.825C-0.306443 23.3443 2.35846 23.6417 5.14032 22.9919C6.99676 22.5481 8.9104 21.7309 10.6228 20.7427C3.69398 22.5341 0.994855 17.2654 2.56683 11.3774Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22 14.8447C19.538 16.2539 16.3479 16.9915 12.4297 17.0575C13.0407 17.7058 13.7295 18.2794 14.4812 18.7659C9.66163 23.0679 2.01982 25.2596 0.494324 23.0679C1.40544 25.1007 3.56831 26.2908 6.80265 25.9379C10.607 25.5155 14.9613 23.2693 17.0823 21.5674C17.2498 22.4171 17.3121 23.2898 17.3377 24.202C19.5548 21.4434 21.1444 18.2531 22 14.8447Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.56683 11.3774C1.47492 15.476 2.44886 19.2747 5.48147 20.6012L5.74551 19.784C2.83138 18.4345 1.88554 14.216 2.56683 11.3774Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.95953 4.1145C7.35223 6.02734 8.36752 10.8622 7.70002 13.8486C8.59735 10.8397 8.41502 5.49652 5.22408 3.31128L4.95953 4.1145Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.6228 20.7427C3.69397 22.5341 0.994853 17.2654 2.56683 11.3774L2.1986 12.4871C0.598539 18.2256 4.12502 23.1809 10.6228 20.7427Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.5985 17.3609C0.0699112 20.0429 1.21748 21.9013 3.97176 22.1737C6.14178 22.3921 8.86133 21.6289 10.6228 20.7427C4.12497 23.1809 0.5985 18.2256 2.19856 12.4871L0.5985 17.3609Z"
                      fill="currentColor"
                    />
                    <path
                      opacity="0.3"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.8826 18.9269C18.0304 19.8655 18.0791 20.8165 18.0282 21.7649C19.0536 20.197 19.8847 18.5152 20.5041 16.7551C19.1824 17.4019 17.7289 17.8378 16.2754 18.1302C16.7693 18.4231 17.3535 18.6885 17.8821 18.9269H17.8826Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.494324 23.0654C1.39165 24.6238 3.35432 24.7398 5.48808 24.236C9.27195 23.3363 12.6891 21.2815 15.5384 18.6879C15.017 18.3475 14.495 18.0206 14.0012 17.6258C17.472 17.1972 20.1382 16.2702 22 14.8447C19.538 16.2539 16.3479 16.9915 12.4297 17.0575C13.0407 17.7058 13.7295 18.2794 14.4812 18.7659C9.66163 23.0679 2.01982 25.2596 0.494324 23.0679V23.0654Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5_8">
                      <rect width="22" height="26"  fill="currentColor" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className={` font-HeadLand font-[400] md:text-[24px] text-[18px]`}>
                Launch<span className="text-[#34323280]">HSEP</span>
              </p>
            </Link>
          </div>
          <div className="absolute left-1/2 top-1/2 !m-0 hidden -translate-x-1/2 -translate-y-1/2 items-center rounded-full border border-neutral-500 p-1 lg:flex">
            <Link
              className={` ${active === "developer" ? "active" : ""}   ${
                header === "white" ? " text-black" : " text-white"
              } rounded-full px-5 py-3 text-sm font-medium inline-flex justify-center duration-400 transition-colors group-[.has-scroll-over]/header:text-black`}
              href="/"
              onClick={() => handleButtonClick("developer")}
            >
              For Developers
            </Link>
            <Link
              className={`  ${
                active === "portfolio" ? "active" : ""
              } bg-primary-700 ${
                header === "white" ? " text-black" : " text-white"
              } rounded-full px-5 py-3 text-sm font-medium inline-flex justify-center duration-400 transition-colors`}
              href="/portfolio"
              onClick={() => handleButtonClick("portfolio")}
            >
              Portfolio
            </Link>
          </div>
          <div className="!m-0 flex items-center gap-4">
            <Link
              className={` ${
                header === "white" ? " bg-primary-7000 text-black" : " bg-transparent text-white"
              }   px-5 py-3 text-sm font-medium inline-flex justify-center group-[.has-scroll-over]/header:border-primary-700 group-[.has-scroll-over]/header:active:bg-primary-800 group-[.has-scroll-over]/header:bg-primary-700 !m-0 hidden gap-1 rounded-xl border !pb-1 !pl-2 !pr-3 !pt-2.5 transition-colors lg:flex`}
              target="_blank"
              href="https://heydevs.page.link/download"
            >
              <svg
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="!m-0"
              >
                <g>
                  <path
                    d="M15.3301 6.67505C18.0301 6.90755 19.1326 8.29505 19.1326 11.3325V11.43C19.1326 14.7825 17.7901 16.125 14.4376 16.125H9.55511C6.20261 16.125 4.86011 14.7825 4.86011 11.43V11.3325C4.86011 8.31755 5.94761 6.93005 8.60261 6.68255"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 1.5V11.16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.5128 9.48779L12.0003 12.0003L9.48779 9.48779"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>{" "}
              Install
            </Link>
            <div
              className={`!m-0 flex h-fit items-center gap-2 divide-x  ${
                header === "white" ? " divide-black" : " divide-white"
              } `}
            >
              <Link
                className={`text-sm ${
                  header === "white" ? " text-black" : " text-white"
                } font-medium inline-flex justify-center !m-0 h-fit rounded-none !px-3 !py-0 uppercase transition-colors   group-[.has-scroll-over]/header:!text-neutral-800`}
                href="/portfolio"
              >
                en
              </Link>
              <Link
                className=" text-sm font-medium inline-flex justify-center !m-0 h-fit rounded-none !px-3 !py-0 uppercase transition-colors group-[.has-scroll-over]/header:text-neutral-800 !text-neutral-400 hover:!text-neutral-200 group-[.has-scroll-over]/header:!text-neutral-600 group-[.has-scroll-over]/header:hover:!text-neutral-800"
                href="/portfolio"
              >
                vi
              </Link>
            </div>
          </div>
        </div>
      </header>
      {isDrawerOpen && (
        <div className=" fixed top-0 bottom-0 w-full h-screen bg-gradient-8  z-50">
          <div className="xs:px-5 container space-y-8 px-4 sm:px-6 md:px-7 lg:px-8 lg:!max-w-[1260px] mb-8 py-[22px] sm:py-6 lg:py-8">
            <svg
              width={40}
              height={40}
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer scale-95"
              type="button"
              onClick={handleButton}
            >
              <g clipPath="url(#clip0_3051_35669)">
                <path
                  d="M26.364 13.636L13.6361 26.3639"
                  stroke="#F5F5F8"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.636 13.636L26.3639 26.3639"
                  stroke="#F5F5F8"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_3051_35669">
                  <rect
                    width={24}
                    height={24}
                    fill="white"
                    transform="translate(8 8)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="h-full md:px-7.5 relative px-4">
            <div className="gap-[1.875rem] mx-auto flex flex-col items-center">
              <div className="flex flex-col items-center gap-5">
                <Link
                  className="text-white rounded-full px-5 py-3 text-sm font-medium inline-flex justify-center duration-400 hover:text-primary-300 !text-2xl transition-colors sm:!text-3xl"
                  href="/"
                  onClick={handleButton}
                >
                  For Developers
                </Link>
                <Link
                  className="text-white rounded-full px-5 py-3 text-sm font-medium inline-flex justify-center duration-400 hover:text-primary-300 !text-2xl transition-colors sm:!text-3xl"
                  href="/portfolio"
                  onClick={handleButton}
                >
                  Portfolio
                </Link>
              </div>
              <a
                className="text-white rounded-xl sm:rounded-2xl px-5 py-3 text-sm font-medium inline-flex justify-center !m-0 flex w-full gap-1 rounded-[12px] border !pb-1 !pl-2 !pr-2.5 !pt-2.5 transition-transform hover:scale-105 active:scale-95"
                target="_blank"
                rel="noopener noreferrer"
                href="https://heydevs.page.link/download"
              >
                <svg
                  width={24}
                  height={25}
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="!m-0"
                >
                  <g>
                    <path
                      d="M15.3301 6.67505C18.0301 6.90755 19.1326 8.29505 19.1326 11.3325V11.43C19.1326 14.7825 17.7901 16.125 14.4376 16.125H9.55511C6.20261 16.125 4.86011 14.7825 4.86011 11.43V11.3325C4.86011 8.31755 5.94761 6.93005 8.60261 6.68255"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 1.5V11.16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.5128 9.48779L12.0003 12.0003L9.48779 9.48779"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>{" "}
                Install
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
