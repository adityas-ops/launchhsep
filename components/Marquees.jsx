import React from 'react'
import Marquee from 'react-fast-marquee';
// import useScrollDirection from '../customeHook/useScrollDirection';
import useScrollDirection from './hooks/useScrollDirection';


const data = [
    "/images/svg/1.svg",
    "/images/svg/2.svg",
    "/images/svg/3.svg",
    "/images/svg/4.svg",
    "/images/svg/5.svg",
    "/images/svg/6.svg",
    "/images/svg/7.svg",
    "/images/svg/8.svg",
    "/images/svg/9.svg",
    "/images/svg/10.svg",
]


function Marquees() {
    const scrollDirection = useScrollDirection();
  const marqueeDirection = scrollDirection === 'down' ? 'left' : 'right';
  return (
    <div className='flex min-w-0 flex-[0_0_100%]  items-center gap-8 flex-nowrap'>
    <Marquee direction={marqueeDirection} speed={25} gradient={false} className='flex min-w-0 flex-[0_0_100%]  items-center gap-8 flex-nowrap'>
        {data.map((item, index) => (

           <div className='flex items-center justify-center mx-5 w-full h-full' key={index}>
           <img src={item} alt="marquee"   />
           </div>
        ))}
    </Marquee>
    </div>
  )
}

export default Marquees