import React from 'react'

function Card({item}) {
  return (
    <>
        <div className=" w-[340px] mb-[80px] rounded-[20px]  h-[400px] border border-[#ffffff80]  bg-card-gradient ">
              <div className=" w-full flex justify-center mt-[2.25rem]">
              {
                item.img2 && <img
                  src={item.img2}
                  alt="hero"
                  className="w-[28px]  h-[32px] mr-2 "
                />
              }
              <img
                  src={item.img1}
                  alt="hero"
                  className=""
                />
                
              </div>
              <div className="w-full flex justify-center mt-[22px]">
                <div className="px-[15px] py-[7px] border border-white text-[14px] flex items-center h-[30px] rounded-[10px] text-white font-Inter font-[400] ">
                 {item.role}
                </div>
              </div>
              <div className="px-[27px] leading-[2rem] mt-[30px] text-white text-center font-Inter font-[400]">
               {item.desc}
              </div>
            </div>
    </>
  )
}

export default Card