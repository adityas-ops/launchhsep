import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className=" w-full h-full mx-auto max-w-[1280px]">
        <div className="md:py-[110px] py-[60px] md:px-[115px] px-5">
          <div className="w-full h-full flex flex-col md:flex-row  gap-4  ">
            <div className=" md:block hidden w-[350px] h-full leading-[2] font-HeadLand whitespace-pre-line text-[1.25rem] text-[#000]">
              LaunchHS is a transformative <br />
              entrepreneurship
              <br /> program for high school <br /> students
            </div>
            <div className=" md:hidden block w-full px-4 h-full leading-[1.5] font-HeadLand whitespace-pre-line text-[1.25rem] text-[#000]">
              LaunchHS is a transformative
              entrepreneurship
               program for high school students
            </div>
            <div className="md:w-[75%] w-full px-5 font-Inter text-[#0E0E0E] font-[400] md:leading-[2]">
              We provide an unparalleled opportunity for high school students to
              develop their business ideas and turn them into reality. With a
              mission to inspire and empower young entrepreneurs, LaunchHS
              offers an immersive startup building experience where students can
              explore their passions, develop business ideas by solving
              problems, learn and experience various aspects of
              entrepreneurship, including ideation, market research, business
              planning, marketing strategies, and financial management while
              building a real company. Whether students are interested in
              launching their own startups or gaining valuable entrepreneurial
              skills for the future, LaunchHS is the place to turn dreams into
              reality.
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] w-full h-full mx-auto flex justify-center ">
        <div className=" md:w-[85%] max-w-[350px] md:max-w-full h-full bg-gradient-1 md:py-[140px] py-[70px] rounded-[20px]">
          <p className="text-center font-HeadLand md:text-[2.25rem] text-[1.25rem] text-white">
            Helping high school students build real companies
          </p>
        </div>
      </div>
      <div className=" w-full h-full mt-[78px] md:max-w-[85%] gap-8 max-w-full px-5 mx-auto flex md:flex-row flex-col">
        <div className="md:w-[55%] w-full h-full flex  items-center justify-center">
          <div className="flex  flex-col items-center justify-center">
            <div className="text-black   font-HeadLand md:text-[1.75rem] text-[1.115rem] font-[400] ">
              Launch HSEP is not another high school summer program or bootcamp
            </div>
            <p className=" font-Inter md:text-[1rem] text-[14px] text-[#0E0E0E] md:mt-[28px] mt-[14px]">
              because we have created the world&apos;s first startup summer
              program for high school students helping them with
            </p>
          </div>
        </div>
        <div className="md:w-[40%] w-full font-Inter md:text-[1.25rem] text-[1rem] font-[500] flex justify-center text-[#0E0E0E]">
          <div className="w-full">
            <p className="mt-5">[0] Idea Validation</p>
            <p className="md:mt-8 mt-4">[1] Achieving Product Market Fit</p>
            <p className="md:mt-8 mt-4">[3] MVP/Prototype development</p>
            <p className="md:mt-8 mt-4">[4] Startup Credits and Funding</p>
          </div>
        </div>
      </div>
      <div className=" w-full h-[50vh]"/>
    </>
  );
}
