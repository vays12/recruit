import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='absolute flex flex-row top-3110 md:top-2110 lg:top-2170 w-full left-1/2 transform -translate-x-1/2 max-w-[1295px] h-[350px] bg-black rounded-[30px] p-4 lg:p-15 justify-between items-center'>
      <div className='flex flex-col  w-[250px] items-start gap-4'>
        <div className='flex flex-row gap-1'>
          <Image src='/logo.png' alt='Logo' width={24} height={24} />
          <h1 className='text-white text-xl font-[600]'>Recruit GPT</h1>
        </div>
        <p className='flex flex-row text-white text-sm font-[400]'>
          Analyze. Visualize. Collaborate. Elevate

        </p>
        <div className='flex flex-row w-full gap-6 items-center'>
          <Image src='/Facebook.png' alt='facebook' width={40} height={40}/>
          <Image src='/Instagram.png' alt='instagram' width={40} height={40}/>
          <Image src='/Email.png' alt='email' width={40} height={40}/>
        </div>
      </div>
      <div className='flex flex-row w-[230px] justify-between '>
        <div className='flex flex-col gap-4'>
          <h1 className='text-white text-xl font-[600]'>Product</h1>
          <a className='text-white'>Home</a>
          <a className='text-white '>Company</a>
          <a className='text-white '>Product</a>
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='text-white text-xl font-[600]'>Features</h1>
          <a className='text-white'>Contact</a>
          <a className='text-white'>Login</a>
          <a className='text-white'>Register</a>
        </div>
      </div>
        
    </div>
  )
}

export default Footer;