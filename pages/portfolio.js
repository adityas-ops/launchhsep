import Card from "@/components/Card";
import Hero2 from "@/components/Hero2";
import React from "react";

const data = [
  {
    img1: "/images/svg2/influenzo.svg",
    img2: "",
    role: "Influencer Marketing",
    desc: "A new influencer marketing platform helping brands connect with the right influencers to create impactful and successful marketing campaigns.",
  },
  {
    img1: "/images/svg2/uxbox.svg",
    img2: "/images/svg2/Asset1.svg",
    role: "Design Resources",
    desc: "Empowering designers with the best digital design resources, tools and inspiration to create amazing user experiences",
  },
  {
    img1: "/images/svg2/innoprompt.svg",
    img2: "",
    role: "Artificial Intelligence",
    desc: "Bringing AI enthusiasts, innovators & organizations looking to harness the power of artificial intelligence in their projects together for discovering, collaborating, and innovating AI prompts",
  },
  {
    img1: "/images/svg2/web3spective.svg",
    img2: "/images/svg2/asset2.svg",
    role: "Web3",
    desc: "A vibrant community of early adopters and builders passionate about showcasing and exchanging feedback on cutting-edge web3 projects building a new future of web3",
  },
  {
    img1: "/images/svg2/BrainBot.svg",
    img2: "",
    role: "Artificial Intelligence",
    desc: "Helping businesses and websites instantly build AI chatbots trained on website content & knowledge base to enhance customer support, automate processes, and improve overall user experience",
  },
  {
    img1: "/images/svg2/snoopa.svg",
    img2: "/images/svg2/4.svg",
    role: "Competitor Monitoring",
    desc: "An AI-powered competitor monitoring platform, revolutionizing the way businesses keep track of their competition providing real-time insights, online activities, and market trends effortlessly",
  },
  {
    img1: "/images/svg2/AIxchange.svg",
    img2: "/images/svg2/5.svg",
    role: "Artificial Intelligence",
    desc: "An ultimate AI tools directory platform dedicated to helping AI enthusiasts & businesses stay at the forefront of AI innovation by connecting them with the most advanced & innovative AI tools available",
  },
  {
    img1: "/images/svg2/AIscribe.svg",
    img2: "",
    role: "Artificial Intelligence",
    desc: "An all-in-one platform for generating AI content allowing businesses to harness the power of AI to easily create high-quality and engaging content including blogs, articles, social media posts, and more with just a few click.",
  },
];

function portfolio() {
  return (
    <>
      <Hero2 />
      <div className="w-full h-full bg-[#7A43EA] md:pt-[156px] pt-[50px] md:pb-[76px] pb-[20px]">
        <div className=" max-w-[1200px] mx-auto grid md:grid-cols-3 grid-cols-1 items-center justify-center">
          {data.map((item, index) => {
            return (
              <div key={index} className="flex items-center justify-center">
                <Card item={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="md:py-[150px] py-[55px]">
        <div className=" w-full h-full flex flex-col md:flex-row">
          <div className="md:w-[40%] w-full flex justify-center">
            <div className=" md:w-[400px] w-[300px] h-[300px] md:h-[400px] rounded-[20px] relative bg-[#7000FF]">
            <div className=" w-full h-full flex flex-col items-center justify-center absolute">
                <div className=" font-HeadLand text-[128px] text-white leading-[1]">5th</div>
                <div className=" font-Inter text-[28px] font-[600] mt-4 text-[#ffffffbf]">November, 2023</div>
              </div>
            </div>
          </div>
          <div className="md:w-[70%] w-full  flex flex-col px-4  justify-center text-center">
            <h3 className=" font-HeadLand md:w-[80%] w-full mt-8 md:mt-0 md:text-[3rem] text-[1.75rem] text-[#7000FF]">Teen Startups Demo Day</h3>
           <div className=" w-full justify-center md:mt-8 mt-2">
           <p className=" text-[#333342] font-Inter md:text-[18px] text-[14px] leading-[2] w-full md:w-[80%]">
            LaunchHS hosts live Demo Days thrice throughout the year. Demo Days
offer the opportunity to hear directly from our teen founders about the
innovative companies they have been building throughout our programs
            </p>
           </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default portfolio;
