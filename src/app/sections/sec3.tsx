import React from 'react'
import Image from 'next/image';

const Sec3 = () => {
  return (
    <div className='absolute top-370 md:top-[1600px] lg:top-[1733px] z-50 w-full flex flex-col justify-center items-center gap-[25px] lg:flex-row gap-16px'>
      <div className=' w-[420px] h-[321px] p-6 rounded-[15px] border-1 border-[#00000026] drop-shadow-[#0000001A]'>
        <div className='flex flex-col gap-[25px] w-[365px] h-[272px]'>
          <Image src='/Group 47769.png' alt='Group 47769' width={60} height={60} /> 
          <h1 className='text-[22px] font-[600] '>AI-Powered Resume Creation</h1>
          <p className='text-[16px] font-[400] text-align leading-[25px]'>We leverage advanced AI technology to craft professional, tailored resumes that highlight your skills and experience effectively.</p>
          <a href='#' className='text-[16px] font-[400] text-[#5356FF] hover:underline'>Read more..</a>
        </div>
      </div>

      <div className=' w-[420px] h-[321px] p-6 rounded-[15px] border-1 border-[#00000026] drop-shadow-[#0000001A]'>
        <div className='flex flex-col gap-[25px] w-[365px] h-[272px]'>
          <Image src='/Group 47770.png' alt='Group 47770' width={60} height={60} /> 
          <h1 className='text-[22px] font-[600] '>AI-Powered Interviews </h1>
          <p className='text-[16px] font-[400] text-align leading-[25px]'>Our AI-driven interview platform customizes questions based on the candidate’s skills, job description, and recruiter requirements.</p>
          <a href='#' className='text-[16px] font-[400] text-[#5356FF] hover:underline'>Read more..</a>
        </div>
      </div>

      <div className=' w-[420px] h-[321px] p-6 rounded-[15px] border-1 border-[#00000026] drop-shadow-[#0000001A]'>
        <div className='flex flex-col gap-[25px] w-[365px] h-[272px]'>
          <Image src='/Group 47771.png' alt='Group 47771' width={60} height={60} /> 
          <h1 className='text-[22px] font-[600] '>AI-Powered Interview Feedback</h1>
          <p className='text-[16px] font-[400] text-align leading-[25px]'>We leverage advanced AI technology to craft professional, tailored resumes that highlight your skills and experience effectively.</p>
          <a href='#' className='text-[16px] font-[400] text-[#5356FF] hover:underline'>Read more..</a>
        </div>
      </div>

    </div>
  )
}

export default Sec3;