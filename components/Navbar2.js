/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import {FaBars,FaTimes} from "react-icons/fa";
import Link from 'next/link';

const Navbar2 = () => {
    const[nav,setNav]=useState(false);
    // const links=[
    //     {
    //         id:1,
    //         link:'Home Page',
    //         href :"/components/Member"
            
    //     },
    //     {
    //         id:2,
    //         link:'Publication'
    //     },
    //     {
    //         id:3,
    //         link:'Administration'
    //     },
    //     {
    //         id:4,
    //         link:'Professional services'
    //     },
    //     {
    //         id:5,
    //         link:'Projects'
    //     },
    //     {
    //         id:5,
    //         link:'Members'
    //     },
        
    // ];
  return (
    <div className='sticky top-0 flex items-center justify-between w-full h-20 px-4 text-white bg-black '>
      <div>
        <h1 className='ml-2 font-serif text-2xl capitalize'>Prof. Tasneem'Research Group</h1>
      </div>
      <ul className='hidden lg:flex'>
        {/* {links.map(({id,link})=>(
            <li
             key={id} 
             className='font-medium text-white capitalize duration-200 cursor-pointer md:px-1 lg:px-4 hover:scale-105'>
                {link}
                </li>
        ))} */}
        {/* <ul className='flex items-center mx-auto space-x-10 font-bold'> */}
        <Link  className='text-[15px] font-medium text-white capitalize duration-200 cursor-pointer md:px-1 lg:px-2 hover:scale-105' href={'/'}>Home Page</Link>
       
        <Link   className='text-[15px] font-medium text-white capitalize duration-200 cursor-pointer md:px-1 lg:px-2 hover:scale-105' href={'/Publication'}>Publication</Link>
        <Link   className='text-[15px] font-medium text-white capitalize duration-200 cursor-pointer md:px-1 lg:px-2 hover:scale-105' href={'/Administration'}>Administration</Link>
        <Link   className='text-[15px] font-medium text-white capitalize duration-200 cursor-pointer md:px-1 lg:px-2 hover:scale-105' href={'/ProfessionalServices'}>Professional Services</Link>
        <Link   className='text-[15px] font-medium text-white capitalize duration-200 cursor-pointer md:px-1 lg:px-2 hover:scale-105' href={'/Projects'}>Projects</Link>
        <Link   className='text-[15px] font-medium text-white capitalize duration-200 cursor-pointer md:px-1 lg:px-2 hover:scale-105' href={'/Member'}>Members</Link>
        <Link   className='text-[15px] font-medium text-white capitalize duration-200 cursor-pointer md:px-1 lg:px-2 hover:scale-105' href={'https://docs.google.com/forms/d/e/1FAIpQLSfIcsVl4QMkckqNmi3VTcy7bVsNoIkhZFNDDIF__bQYmMT52A/viewform?usp=sf_link'}>Job</Link>
       
        
      </ul>
      <div onClick={()=>setNav(!nav)} className='z-10 pr-4 text-gray-500 cursor-pointer lg:hidden'>
        {nav? <FaTimes size={30}/>: <FaBars size={30}/>}
      </div>
      {nav && (
        <ul className='absolute top-0 left-0 flex flex-col justify-center w-full h-screen text-gray-500 bg-gradient-to-b from-black to-gray-800'>
       {/* <Link> {links.map(({id,link,href})=>(
              <li
               key={id} 
               className='px-4 py-6 text-4xl capitalize cursor-pointer'>
                  {link}
                  </li>
          ))}
          </Link> */}
          <Link className='px-4 py-6 text-4xl capitalize cursor-pointer' href={'/'}>Home Page</Link>
          <Link  className='px-4 py-6 text-4xl capitalize cursor-pointer' href={'/job'}>Job</Link>
        <Link  className='px-4 py-6 text-4xl capitalize cursor-pointer' href={'/Publication'}>Publication</Link>
        <Link  className='px-4 py-6 text-4xl capitalize cursor-pointer' href={'/Administration'}>Administration</Link>
        <Link  className='px-4 py-6 text-4xl capitalize cursor-pointer' href={'/ProfessionalServices'}>Professional Services</Link>
        <Link  className='px-4 py-6 text-4xl capitalize cursor-pointer' href={'/Projects'}>Projects</Link>
        <Link  className='px-4 py-6 text-4xl capitalize cursor-pointer' href={'/Member'}>Members</Link>
       
          
          
        </ul>
      )}
      
    </div>
  )
}

export default Navbar2;
