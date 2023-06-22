import React from 'react'

const Member = () => {
  return (
    <>
    <div className=' bg-[#E3D5CA] w-full h-fit   '>
     <div className='flex items-center justify-center'><h4 className='pt-3 text-2xl sm:text-3xl'>PERSONAL INFORMATION</h4></div>
    <div className='flex flex-col-reverse w-full px-2 py-8 mx-auto md:px-6 sm:flex-row'>
   
    <div className='sm:w-1/2'>
        
        <div className='text-2xl font-semibold'>Dr. Tasneem Parvin,<span></span></div>
        <div className='font-semibold'>Acedemic Qualification</div>
        <div>PhD : Indian Institute Of Technology Guwahati ,2009</div>
        <div className='font-semibold'>Work Experience</div>
        <div>
            <span>2018-Present: Associate Professor ,NIT Patna</span>
            <span>2011-2018: Assistant Professor,NIT Patna</span>
            <span>2010-11: Young Scientist,DST sponsered Fast Track Project(PI),IIT Patna</span>
        </div>
        <div className='font-semibold'>Research Expertise</div>
        <div>Green Organic Sysnthesis, Multicomponenet reactions, Heterocycle Chemistry,Organocatalysis,Asymmetric Synthesis </div>
    </div>
    <div className='flex items-center justify-center px-4 py-4 sm:w-1/2 '>
        <img src='maam1.jpg' width="280px"  className='flex items-center justify-center rounded-[50%]'/>
    </div>
    </div>
    {/* members */}
    <div className='flex items-center justify-center'><h4 className='text-2xl font-semibold'  >PhD Candidates</h4></div>
    <div className='flex flex-col-reverse w-full px-4 py-8 mx-auto sm:px-10 md:px-6 sm:flex-row'>
   
    <div className='flex flex-col justify-center items-left sm:px-10 sm:w-2/3'>
        
        <div className='text-2xl font-semibold'>Ruchi Bharti<span className='text-xl'>(2012-2016)</span></div>
        
        <div className='font-semibold '>Thesis Title:</div>
        <div>Synthesis of functionalized heterocycles using organocatalyzed multicomponent reactions.</div>
    </div>
    <div className='flex items-center justify-center px-4 py-4 sm:w-1/3 '>
        <img src='photo1.png' width={200} className='flex items-center justify-center'/>
    </div>
    </div>
    {/* 2nd */}
    <div className='flex flex-col-reverse w-full px-4 py-8 mx-auto sm:px-10 md:px-6 sm:flex-row'>
   
   <div className='flex flex-col justify-center items-left sm:px-10 sm:w-2/3'>
       
       <div className='text-2xl font-semibold'>Pooja Kumari<span className='text-xl'>(2014-2020)</span></div>
       
       <div className='font-semibold '>Thesis Title:</div>
       <div>Exploration of multicomponent reactions (MCRs) for the synthesis of bioactive heterocycles.</div>
   </div>
   <div className='flex items-center justify-center px-4 py-4 sm:w-1/3 '>
       <img src='photo1.png' width={200} className='flex items-center justify-center'/>
   </div>
   </div>
   {/* 3rd */}
   <div className='flex flex-col-reverse w-full px-4 py-8 mx-auto sm:px-10 md:px-6 sm:flex-row'>
   
   <div className='flex flex-col justify-center items-left sm:px-10 sm:w-2/3'>
       
       <div className='text-2xl font-semibold'>Rahul Yadav<span className='text-xl'>(2018-2022)</span></div>
       
       <div className='font-semibold '>Thesis Title:</div>
       <div>Synthesis of Pyrazole Fused Polycyclic Heterocycles by Multicomponent Reactions.</div>
   </div>
   <div className='flex items-center justify-center px-4 py-4 sm:w-1/3 '>
       <img src='photo1.png' width={200} className='flex items-center justify-center'/>
   </div>
   </div>
   {/* 4th */}
   <div className='flex flex-col-reverse w-full px-4 py-8 mx-auto sm:px-10 md:px-6 sm:flex-row'>
   
   <div className='flex flex-col justify-center items-left sm:px-10 sm:w-2/3'>
       
       <div className='text-2xl font-semibold'> Darakshan<span className='text-xl'>(2019-continuing)</span></div>
       
       <div className='font-semibold '>Thesis Title:</div>
       <div>Development of new synthetic methodologies for the synthesis of diverse heterocyclic scaffolds</div>
   </div>
   <div className='flex items-center justify-center px-4 py-4 sm:w-1/3 '>
       <img src='photo1.png' width={200} className='flex items-center justify-center'/>
   </div>
   </div>
   {/* 5th */}
   <div className='flex flex-col-reverse w-full px-4 py-8 mx-auto sm:px-10 md:px-6 sm:flex-row'>
   
   <div className='flex flex-col justify-center items-left sm:px-10 sm:w-2/3'>
       
       <div className='text-2xl font-semibold'>Aatka Mehar<span className='text-xl'>(2020-Continuing)</span></div>
       
       <div className='font-semibold '>Thesis Title:</div>
       <div>Synthesis and Characterization of Polycyclic Fused Heterocycles</div>
   </div>
   <div className='flex items-center justify-center px-4 py-4 sm:w-1/3 '>
       <img src='photo1.png' width={200} className='flex items-center justify-center'/>
   </div>
   </div>
   {/* 6th */}
   <div className='flex flex-col-reverse w-full px-4 py-8 mx-auto sm:px-10 md:px-6 sm:flex-row'>
   
   <div className='flex flex-col justify-center items-left sm:px-10 sm:w-2/3'>
       
       <div className='text-2xl font-semibold'>Ujjain Chaurasia	
        <span className='text-xl'>(2021-Continuing)</span></div>
       
       <div className='font-semibold '>Thesis Title:</div>
       <div>Green Synthesis of Heterocyclic Compounds</div>
   </div>
   <div className='flex items-center justify-center px-4 py-4 sm:w-1/3 '>
       <img src='photo1.png' width={200} className='flex items-center justify-center'/>
   </div>
   </div>
   {/* 7th */}
   <div className='flex flex-col-reverse w-full px-4 py-8 mx-auto sm:px-10 md:px-6 sm:flex-row'>
   
   <div className='flex flex-col justify-center items-left sm:px-10 sm:w-2/3'>
       
       <div className='text-2xl font-semibold'> Mohammad Zahid Hussain<span className='text-xl'>(2022-Continuing)</span></div>
       
       <div className='font-semibold '>Thesis Title:</div>
       <div>Organic Synthesis</div>
   </div>
   <div className='flex items-center justify-center px-4 py-4 sm:w-1/3 '>
       <img src='photo1.png' width={200} className='flex items-center justify-center'/>
   </div>
   </div>
   </div>
    

      
    </>
  )
}

export default Member;
