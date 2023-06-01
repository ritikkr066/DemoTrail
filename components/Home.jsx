import React from 'react'
import Link from 'next/link';
import{MdOutlineKeyboardArrowRight} from "react-icons/md";


const Home1 = () => {
  return (
    <div name="home" className='h-screen py-4 pb-8 bg-gradient-to-b from-black to-gray-800 via-black '>
       <div className='flex flex-col items-center justify-center h-full max-w-screen-lg px-4 py-2 mx-auto md:flex-row '>
        <div className='flex flex-col justify-center h-full md:w-2/3'>
          <h2 className='text-3xl font-semibold text-white sm:text-7xl'>
          Dr. Tasneem Parvin
          </h2 >
          <p className='pt-4 text-2xl font-semibold text-white'>Research Interest:-</p>
          <p className='max-w-md py-2 text-gray-500'>
          Green Organic Synthesis, Multicomponent reactions, Heterocyclic Chemistry, Organocatalysis, Asymmetric Synthesis
          </p>
          <p className='flex flex-col md:flex-row'>
          <span className='text-white sm:pr-10 '>Email:<a href='tasneem@nitp.ac.in'>tasneem@nitp.ac.in</a></span>
          <span className='text-white'>phone No:9876543210</span></p>
          <Link   className='font-medium text-white capitalize cursor-pointer ' href={'/Contactus'}><button className='flex items-center px-6 py-2 my-4 text-white rounded-md cursor-pointer group w-fit bg-gradient-to-r from-cyan-500 to-blue-500'>
           Contact Me
             <span className='duration-300 group-hover:rotate-90'>
              <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
              </span>
          </button></Link>
          {/* <button className='flex items-center px-6 py-2 my-4 text-white rounded-md cursor-pointer group w-fit bg-gradient-to-r from-cyan-500 to-blue-500'>
            Portfolio
             <span className='duration-300 group-hover:rotate-90'>
              <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
              </span>
          </button> */}
        </div>
        <div className='my-4 md:w-1/3 md:my-0'>
          <img src='maam1.jpg' width="280px" alt='my profile' className='flex justify-center w-3/4 mx-auto rounded-[50%] md:w-full '/>
        </div>
       </div>
    </div>
  )
}

export default Home1;
