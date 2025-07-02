import React from 'react'
import Image from 'next/image';

const Sec1 = () => {
  return (
  <div className='h-auto'>  
    <div className="relative left-1/2 transform -translate-x-1/2 max-w-[1295px] h-[851px] rounded-[35px] bg-gradient-to-b from-white via-[#5356FF80] to-[#5356FF] z-0  ">
        
  
        <div className="max-w-[122px] relative top-[12%] left-[80%] md:top-[20%] lg:top-[20%]  lg:left-[74.5%]  bg-cover z-10">
          <Image src="/Portal.svg" alt="Portal" width={40} height={40} className="w-10 h-10 md:w-[80px] md:h-[80px] lg:w-[122px] lg:h-[122px]" />
        </div>
        <div className='flex flex-wrap z-20 leading-[70px] justify-center items-center relative top-15 left-1/2 transform -translate-x-1/2 md:h-[140px] lg:w-[748px] w-2/3 '>
          <h1 className='text-center text-4xl font-[600] lg:text-[60px]'>Discover the <span className='text-[#5356FF]'>Best Talent </span>for your Companies</h1>
  
        </div>
        <p className='text-center text-[12px] relative top-20 px-25'>We Connect You With High-Quality Professionals Across Various Industry Fields.</p>
        <div className='flex flex-col relative top-30 left-1/2 transform -translate-x-1/2 max-w-[374px] items-center justify-between sm:flex-row gap-[25px] '>
          <button className='bg-transparent font-[500] hover:bg-blur hover:text-[20px] cursor-pointer  border-1 text-[16px] text-center rounded-[40px] w-[173px] h-[54px]'>Learn More</button>
          <button className='bg-black font-[500] hover:bg-blur hover:text-[20px] cursor-pointer text-white border-1 text-[16px] text-center rounded-[40px] w-[173px] h-[54px]'>Get Started</button>
        </div>
        <div className="absolute top-80 left-10 bg-cover z-10">
            <Image src="/portal2.svg" alt="Portal" width={40} height={40} className="w-1/2 h-1/2 md:w-[410px] md:h-[410px]" />
        </div>
        <Image src="/Dashboard 1.png" alt='Dashboard' width={1100} height={350} className='rounded-2xl relative top-50 left-1/2 transform -translate-x-1/2 z-20' /> 
          
  
    </div>
  </div>
  )
}

export default Sec1;