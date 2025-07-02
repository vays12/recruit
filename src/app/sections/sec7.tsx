import React from 'react'
import Image from 'next/image';

const Sec7 = () => {
  return (
    <div className="w-full max-w-[1295px] h-[389px] absolute top-3000 md:top-2000 lg:top-2050 left-1/2 transform -translate-x-1/2 rounded-[35px] bg-gradient-to-b from-white via-[#5356FF78] to-[#5356FF]">
          <h1 className="text-center capitalize w-full max-w-[748px] h-fit lg:h-[140px] absolute top-[69px] left-1/2 transform -translate-x-1/2 font-[600] text-2xl lg:text-[48px] lg:leading-[70px]">Unlock 
            your business <span className="text-[#5356FF]">potential with top talent</span>  today!</h1>
          <p className="w-full max-w-[554px] text-center capitalize h-[15px] text-[12px] font-[500] absolute top-40 lg:top-[229px] left-1/2 transform -translate-x-1/2">contact 
            Recruit GPT now to connect with exceptional professionals and elevate your business.</p>
          <button className="w-[173px] h-[54px] absolute top-[273px] left-1/2 transform -translate-x-1/2 bg-black hover:bg-grey-800 transition-colors cursor-pointer font[500] text-[16px]  text-white rounded-[40px]">Get Started</button>
          <Image width={84} height={84} className="absolute top-[42px] left-1/6 lg:left-[210px]" src="/portalm1.png" alt="portal"/>
          <Image width={41} height={41} className="absolute top-[132px] left-4/5 lg:left-[912px]" src="/Portalm.png" alt="portal" />

        </div>
  )
}

export default Sec7;