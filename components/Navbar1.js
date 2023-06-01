import React, { useState } from 'react'
import {FaBars,FaTimes} from "react-icons/fa";
import Link from 'next/link';

const Navbar1 = () => {
    const[nav,setNav]=useState(false);
    const links=[
        {
            id:1,
            link:'Home Page',
            href :"/components/Member"
            
        },
        {
            id:2,
            link:'Publication'
        },
        {
            id:3,
            link:'Administration'
        },
        {
            id:4,
            link:'Professional services'
        },
        {
            id:5,
            link:'Projects'
        },
        {
            id:5,
            link:'Members'
        },
        
    ];
  return (
    <div className='flex items-center justify-between w-full h-20 px-4 text-white bg-black'>
      <div>
        <h1 className='ml-2 font-serif text-3xl'>NIT PATNA</h1>
      </div>
      <ul className='hidden lg:flex'>
        {links.map(({id,link})=>(
            <li
             key={id} 
             className='font-medium text-white capitalize duration-200 cursor-pointer md:px-1 lg:px-4 hover:scale-105'>
                {link}
                </li>
        ))}
        
      </ul>
      <div onClick={()=>setNav(!nav)} className='z-10 pr-4 text-gray-500 cursor-pointer lg:hidden'>
        {nav? <FaTimes size={30}/>: <FaBars size={30}/>}
      </div>
      {nav && (
        <ul className='absolute top-0 left-0 flex flex-col justify-center w-full h-screen text-gray-500 bg-gradient-to-b from-black to-gray-800'>
       <Link> {links.map(({id,link,href})=>(
              <li
               key={id} 
               className='px-4 py-6 text-4xl capitalize cursor-pointer'>
                  {link}
                  </li>
          ))}
          </Link>
          
          
        </ul>
      )}
      
    </div>
  )
}

export default Navbar1;
