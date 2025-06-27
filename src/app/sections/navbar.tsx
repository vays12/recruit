'use client'
import React, { useState } from "react";


export function Navbar () {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen);
    
    return (
        
        <nav className="flex flex-col gap-10 lg:justify-between lg:flex-row lg:max-w-[1062px] h-[80px] bg-white border-white border-1 rounded-[15px] drop-shadow-lg mx-auto  lg:items-center px-4 py-2">
            <div className="flex py-3 items-center ">
                <img src="/logo.png" alt="Logo" className="h-8 w-8" />
                <h1 className="text-xl md:text-2xl font-bold">RecruitGPT</h1>
            </div>
            
            <div className={`${isOpen ? 'flex' : 'hidden'} flex-col bg-white gap-5 lg:flex lg:flex-row items-center lg:gap-5`}>
              <div className="flex flex-col lg:flex-row gap-5 lg:flex items-center lg:gap-5">
                  <a href="https://www.google.com" className="text-xl md:text-base text-gray-700 hover:text-gray-900">Home</a>
                  <a href="#" className="text-xl md:text-base text-gray-700 hover:text-gray-900">Client</a>
                  <a href="#" className="text-xl md:text-base text-gray-700 hover:text-gray-900">Features</a>
                  <a href="#" className="text-xl md:text-base text-gray-700 hover:text-gray-900">How it works</a>
                  <a href="#" className="text-xl md:text-base text-gray-700 hover:text-gray-900">About Us</a>
              </div>
              <button className="bg-black hover:cursor-pointer text-white text-sm md:text-base rounded-[40px] w-[173px] h-[54px]">Get Started</button>
            </div>
            <button onClick={()=>{setIsOpen(!isOpen);}} className="lg:hidden cursor-pointer absolute top-0  left-4/5 flex flex-col gap-2 rounded-lg w-[50px] h-full justify-start items-start py-2 ">
                <span className="h-[10px] w-full bg-green-500 rounded-lg"></span>
                <span className="h-[10px] w-full bg-green-500 rounded-lg"></span>
                <span className="h-[10px] w-full bg-green-500 rounded-lg"></span>
                

            </button>
        </nav>
        

        
    )
}

